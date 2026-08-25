/* TEMPORARY, READ-ONLY probe — discover the API representation of SINGLE_SELECT + DATETIME
 * attribute values set via the Podium UI on the existing synthetic contact.
 * (a) GET /v4/contacts and read the test contact's EMBEDDED attributes; (b) retry the
 * sub-resource read keyed by contact UID. read_contacts only. Returns ONLY attribute-value
 * structures (uid/label/dataType/value for the 3 target fields; values are synthetic test
 * data) — never name/email/phone or the contact uid. No writes, no tokens logged. */
import { env, initBlobs, getAccessToken } from "../lib/podium.mjs";

const API = "https://api.podium.com/v4";
const TARGETS = {
  "01a03a17-a1db-71fd-ad7b-d586451be683": "consultation_timing",  // SINGLE_SELECT
  "01a03a12-a37d-763d-b35c-1dca774c0155": "wedding_date",         // DATETIME
  "01a03964-58fb-7ad7-985f-cb83d9bb2419": "website_lead_source",  // STRING (control)
};
const TEST_NAME = "AVEN Bridal Status Test"; // used only to locate the contact; never returned
const json = (s, o) => ({ statusCode: s, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(o) });

async function listAll(url, H) {
  const items = []; let u = url, pages = 0;
  while (u && pages < 10) {
    const r = await fetch(u, { headers: H });
    if (!r.ok) return { error: r.status };
    const b = await r.json();
    const arr = Array.isArray(b?.data) ? b.data : Array.isArray(b) ? b : [];
    items.push(...arr);
    const next = (b && b.metadata && (b.metadata.cursor || b.metadata.next)) || null;
    u = next ? `${url}${url.includes("?") ? "&" : "?"}cursor=${encodeURIComponent(next)}` : null;
    pages++;
  }
  return { items };
}

export const handler = async (event) => {
  let e;
  try { e = env(); } catch { return json(503, { ok: false, error: "not_configured" }); }
  try {
    initBlobs(event);
    const token = await getAccessToken(e);
    const H = { Authorization: `Bearer ${token}`, Accept: "application/json" };

    const list = await listAll(`${API}/contacts`, H);
    if (list.error) return json(200, { ok: false, error: `contacts_list:${list.error}` });

    // Locate the test contact: prefer one carrying a target attribute; fallback to name.
    let contact = list.items.find((c) => Array.isArray(c?.attributes) && c.attributes.some((a) => a && TARGETS[a.uid]))
               || list.items.find((c) => c && c.name === TEST_NAME);

    const embeddedTargets = contact && Array.isArray(contact.attributes)
      ? contact.attributes.filter((a) => a && TARGETS[a.uid])
      : [];
    const embeddedAllShape = contact && Array.isArray(contact.attributes)
      ? contact.attributes.map((a) => ({ uid: a.uid, label: a.label, dataType: a.dataType, valueType: a && typeof a.value, valueIsObject: a && a.value !== null && typeof a.value === "object" }))
      : null;

    // Retry the sub-resource read keyed by the contact UID (not email).
    let subResource = null;
    if (contact && contact.uid) {
      const cid = encodeURIComponent(contact.uid);
      const get = async (u) => { const r = await fetch(u, { headers: H }); return r.ok ? { status: r.status, body: await r.json().catch(() => null) } : { status: r.status, detail: (await r.text().catch(() => "")).slice(0, 200) }; };
      subResource = {
        single_consultation: await get(`${API}/contacts/${cid}/attributes/01a03a17-a1db-71fd-ad7b-d586451be683`),
        index: await get(`${API}/contacts/${cid}/attributes`),
      };
    }

    return json(200, {
      ok: true,
      contactsScanned: list.items.length,
      nameMatchCount: list.items.filter((c) => c && c.name === TEST_NAME).length,
      perContact: list.items.map((c) => ({
        nameLen: (c && c.name ? String(c.name).length : 0),
        hasTargetAttr: Array.isArray(c?.attributes) && c.attributes.some((a) => a && TARGETS[a.uid]),
        attrUids: Array.isArray(c?.attributes) ? c.attributes.map((a) => a && a.uid) : [],
      })),
      contactFound: !!contact,
      embeddedTargets,          // raw structure of the 3 target attributes (values are synthetic)
      embeddedAllShape,         // uid/label/dataType + value type for every embedded attribute (no values)
      subResource,
    });
  } catch (err) {
    const m = (err && err.message) || "";
    if (m === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "readback_failed", message: m.slice(0, 120) });
  }
};
