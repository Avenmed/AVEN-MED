/* TEMPORARY, READ-ONLY probe — read back two attribute VALUES set via the Podium UI on the
 * existing synthetic contact, to learn the exact API representation of SINGLE_SELECT and
 * DATETIME values. Uses documented reads:
 *   GET /v4/contacts/{identifier}/attributes/{uid}   (single)
 *   GET /v4/contacts/{identifier}/attributes         (index)
 * Scope read_contacts. Returns the raw attribute-value objects (labels/uids/dataType/value
 * structure) — the attribute sub-resource carries NO contact name/email/phone; values here
 * are synthetic test data. No tokens. Creates/modifies nothing. Removed after capture. */
import { env, initBlobs, getAccessToken } from "../lib/podium.mjs";

const API = "https://api.podium.com/v4";
const EMAIL = "aven-bridal-status-test@example.com";
const CONSULT_UID = "01a03a17-a1db-71fd-ad7b-d586451be683"; // consultation_timing (SINGLE_SELECT)
const WEDDING_UID = "01a03a12-a37d-763d-b35c-1dca774c0155"; // wedding_date (DATETIME)
const json = (s, o) => ({ statusCode: s, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(o) });

export const handler = async (event) => {
  let e;
  try { e = env(); } catch { return json(503, { ok: false, error: "not_configured" }); }
  try {
    initBlobs(event);
    const token = await getAccessToken(e);
    const H = { Authorization: `Bearer ${token}`, Accept: "application/json" };
    const id = encodeURIComponent(EMAIL);

    async function get(url) {
      const r = await fetch(url, { headers: H });
      return r.ok ? { status: r.status, body: await r.json().catch(() => null) }
                  : { status: r.status, detail: (await r.text().catch(() => "")).slice(0, 300) };
    }

    const consultation = await get(`${API}/contacts/${id}/attributes/${CONSULT_UID}`);
    const wedding = await get(`${API}/contacts/${id}/attributes/${WEDDING_UID}`);
    const index = await get(`${API}/contacts/${id}/attributes`);

    return json(200, { ok: true, consultation_timing: consultation, wedding_date: wedding, all_attributes_index: index });
  } catch (err) {
    const m = (err && err.message) || "";
    if (m === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "readback_failed", message: m.slice(0, 120) });
  }
};
