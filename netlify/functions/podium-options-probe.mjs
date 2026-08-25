/* TEMPORARY, READ-ONLY probe — full definitions (incl. options) for the 3 SINGLE_SELECT
 * Bridal attributes. GET /v4/contact_attributes (+ single-get each) with read_contacts.
 * Returns definition metadata only (labels/uids/options) — no contact PII, no values on
 * contacts, no tokens. Creates/modifies nothing. Removed after capture. */
import { env, initBlobs, getAccessToken } from "../lib/podium.mjs";

const API = "https://api.podium.com/v4";
const TARGETS = [
  "01a03a17-a1db-71fd-ad7b-d586451be683", // consultation_timing
  "01a03a1a-a8b7-792e-9e9d-6f0dc57035fd", // preferred_appointment
  "01a03a1e-3e6d-736f-b9e3-39c14cab017e", // referral_source
];
const json = (s, o) => ({ statusCode: s, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(o) });

export const handler = async (event) => {
  let e;
  try { e = env(); } catch { return json(503, { ok: false, error: "not_configured" }); }
  try {
    initBlobs(event);
    const token = await getAccessToken(e);
    const H = { Authorization: `Bearer ${token}`, Accept: "application/json" };

    // Full objects from the list view
    const lr = await fetch(`${API}/contact_attributes`, { headers: H });
    let fromList = null;
    if (lr.ok) {
      const lb = await lr.json();
      const arr = Array.isArray(lb?.data) ? lb.data : Array.isArray(lb) ? lb : [];
      fromList = arr.filter((a) => TARGETS.includes(a.uid)); // full raw defs (no PII)
    } else {
      fromList = { error: lr.status };
    }

    // Single-get each (in case the list omits the options array)
    const detail = {};
    for (const uid of TARGETS) {
      const dr = await fetch(`${API}/contact_attributes/${uid}`, { headers: H });
      detail[uid] = dr.ok
        ? { status: dr.status, body: await dr.json().catch(() => null) }
        : { status: dr.status, detail: (await dr.text().catch(() => "")).slice(0, 200) };
    }

    return json(200, { ok: true, fromList, detail });
  } catch (err) {
    const m = (err && err.message) || "";
    if (m === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "probe_failed", message: m.slice(0, 120) });
  }
};
