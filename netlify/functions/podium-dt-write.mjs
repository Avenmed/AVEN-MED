/* TEMPORARY, ONE controlled DATETIME write (Option B — Protective) on the existing
 * synthetic contact. POST /v4/contacts sets wedding_date=2027-02-15T20:00:00Z and re-sends
 * consultation_timing="As soon as possible" + tags:[Bridal Journey] to protect them.
 * website_lead_source is intentionally NOT sent (currently blank). Then GET /v4/contacts/
 * {email} read-back. Run-once guarded. No restore, no new contact, no other fields, no
 * GA4/OAuth/Notes/Charts/messages. No tokens/PII logged. Removed after the test. */
import { env, initBlobs, getAccessToken, getLocationUid } from "../lib/podium.mjs";
import { getStore } from "@netlify/blobs";

const API = "https://api.podium.com/v4";
const EMAIL = "aven-bridal-status-test@example.com";
const NAME = "AVEN Bridal Status Test";
const WEDDING = "01a03a12-a37d-763d-b35c-1dca774c0155"; // wedding_date DATETIME
const CONSULT = "01a03a17-a1db-71fd-ad7b-d586451be683"; // consultation_timing SINGLE_SELECT
const WLS = "01a03964-58fb-7ad7-985f-cb83d9bb2419";     // website_lead_source STRING
const TAG = "01a03985-9b26-74dd-8a30-cf25dff26c9a";     // Bridal Journey tag
const NEW_DATE = "2027-02-15T20:00:00Z";                // Feb 15 2027 2:00 PM CST (UTC-6)
const RESULT_KEY = "dt-write-result";
const json = (s, o) => ({ statusCode: s, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(o) });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export const handler = async (event) => {
  let e;
  try { e = env(); } catch { return json(503, { ok: false, error: "not_configured" }); }
  try {
    initBlobs(event);
    const store = getStore("podium-oauth");
    const prior = await store.get(RESULT_KEY);
    if (prior) return json(200, { ok: true, alreadyRan: true, ...JSON.parse(prior) });

    const token = await getAccessToken(e);
    const H = { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept: "application/json" };
    const loc = await getLocationUid(token);
    const id = encodeURIComponent(EMAIL);

    const read = async () => {
      const r = await fetch(`${API}/contacts/${id}`, { headers: { Authorization: H.Authorization, Accept: "application/json" } });
      if (!r.ok) return { status: r.status };
      const b = await r.json(); const c = (b && b.data) ? b.data : b;
      const attrs = Array.isArray(c && c.attributes) ? c.attributes : [];
      const pick = (uid) => { const a = attrs.find((x) => x && x.uid === uid); return a ? { value: a.value, dataType: a.dataType } : null; };
      const tags = Array.isArray(c && c.tags) ? c.tags : [];
      return { status: 200, wedding_date: pick(WEDDING), consultation_timing: pick(CONSULT), website_lead_source: pick(WLS), tagCount: tags.length };
    };

    const before = await read();

    // Protective upsert: set wedding_date; re-send consultation_timing + tag to protect them.
    const payload = {
      name: NAME, locations: [loc], email: EMAIL,
      tags: [TAG],
      attributes: [
        { uid: WEDDING, value: NEW_DATE },
        { uid: CONSULT, value: "As soon as possible" },
      ],
    };
    const up = await fetch(`${API}/contacts`, { method: "POST", headers: H, body: JSON.stringify(payload) });
    const upsert = { httpStatus: up.status, accepted: [200, 201, 202].includes(up.status) };

    await wait(1800); // 202 async
    const after = await read();

    const result = {
      dateSent: NEW_DATE,
      before,
      upsert,
      after,
      wedding_date_exposed_by_api: after.wedding_date, // null = not surfaced (known discrepancy)
      consultation_timing_still_asap: !!(after.consultation_timing && after.consultation_timing.value === "As soon as possible"),
      tagCount: after.tagCount,
    };
    await store.set(RESULT_KEY, JSON.stringify(result));
    return json(200, { ok: true, ...result });
  } catch (err) {
    const m = (err && err.message) || "";
    if (m === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "dt_write_failed", message: m.slice(0, 120) });
  }
};
