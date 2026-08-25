/* TEMPORARY, READ-ONLY probe — read the test contact by email, inspect embedded custom
 * attribute values (SINGLE_SELECT + DATETIME), and retry the UID-keyed sub-resource read.
 * read_contacts only. Returns attribute-value structures (synthetic test values) + route
 * statuses — never name/email/phone. No writes, no tokens logged. Removed after capture. */
import { env, initBlobs, getAccessToken } from "../lib/podium.mjs";

const API = "https://api.podium.com/v4";
const EMAIL = "aven-bridal-status-test@example.com";
const TARGETS = {
  "01a03a17-a1db-71fd-ad7b-d586451be683": "consultation_timing",
  "01a03a12-a37d-763d-b35c-1dca774c0155": "wedding_date",
  "01a03964-58fb-7ad7-985f-cb83d9bb2419": "website_lead_source",
};
const json = (s, o) => ({ statusCode: s, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(o) });

export const handler = async (event) => {
  let e;
  try { e = env(); } catch { return json(503, { ok: false, error: "not_configured" }); }
  try {
    initBlobs(event);
    const token = await getAccessToken(e);
    const H = { Authorization: `Bearer ${token}`, Accept: "application/json" };
    const id = encodeURIComponent(EMAIL);
    const get = async (u) => { const r = await fetch(u, { headers: H }); return r.ok ? { status: r.status, body: await r.json().catch(() => null) } : { status: r.status, detail: (await r.text().catch(() => "")).slice(0, 250) }; };

    // 1) single contact by email
    const single = await get(`${API}/contacts/${id}`);
    let contactUid = null, embeddedTargets = [], embeddedAllShape = null, topKeys = null;
    if (single.status === 200) {
      const c = (single.body && single.body.data) ? single.body.data : single.body;
      topKeys = c && typeof c === "object" ? Object.keys(c) : null;
      contactUid = c && c.uid ? c.uid : null;
      const attrs = Array.isArray(c && c.attributes) ? c.attributes : [];
      embeddedTargets = attrs.filter((a) => a && TARGETS[a.uid]); // raw structures (values synthetic)
      embeddedAllShape = attrs.map((a) => ({ uid: a && a.uid, label: a && a.label, dataType: a && a.dataType }));
    }

    // 2) UID-keyed sub-resource reads (if we got a uid)
    let subByUid = null;
    if (contactUid) {
      const cid = encodeURIComponent(contactUid);
      subByUid = {
        single_consultation: await get(`${API}/contacts/${cid}/attributes/01a03a17-a1db-71fd-ad7b-d586451be683`),
        single_wedding: await get(`${API}/contacts/${cid}/attributes/01a03a12-a37d-763d-b35c-1dca774c0155`),
        index: await get(`${API}/contacts/${cid}/attributes`),
      };
    }

    return json(200, {
      ok: true,
      singleGetByEmail: { status: single.status, detailIfNot200: single.status !== 200 ? single.detail : undefined },
      contactTopKeys: topKeys,
      contactUidFound: !!contactUid,
      embeddedTargets,
      embeddedAllShape,
      subByUid,
    });
  } catch (err) {
    const m = (err && err.message) || "";
    if (m === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "readback_failed", message: m.slice(0, 120) });
  }
};
