/* TEMPORARY, READ-ONLY diagnostic — find the "Website Lead Source" attribute UID.
 *
 * Existing encrypted OAuth token (read_contacts). Lists contacts and inspects the embedded
 * attributes. If a "Website Lead Source" / "Bridal Journey" attribute exists, returns ONLY
 * { uid, label, value }. Otherwise returns the DISTINCT attribute field definitions present
 * (label + uid + dataType only — NO values, so no PII) plus per-contact attribute counts,
 * so the correct field/uid can be identified. Never returns contact name/email/phone or any
 * token/secret; never modifies data. Removed after use. */
import { env, initBlobs, getAccessToken } from "../lib/podium.mjs";

const API = "https://api.podium.com/v4";
const json = (status, obj) => ({
  statusCode: status,
  headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  body: JSON.stringify(obj),
});
const norm = (s) => (typeof s === "string" ? s.trim().toLowerCase() : "");

export const handler = async (event) => {
  let e;
  try { e = env(); } catch { return json(503, { ok: false, error: "not_configured" }); }
  try {
    initBlobs(event);
    const token = await getAccessToken(e);
    const listRes = await fetch(`${API}/contacts`, { headers: { Authorization: `Bearer ${token}`, Accept: "application/json" } });
    if (!listRes.ok) {
      return json(200, { ok: false, error: `list_failed:${listRes.status}`, detail: (await listRes.text().catch(() => "")).slice(0, 300) });
    }
    const body = await listRes.json();
    const arr = Array.isArray(body?.data) ? body.data : Array.isArray(body) ? body : [];

    const distinct = new Map(); // uid -> {uid,label,dataType}  (field DEFINITIONS only, no values)
    for (const c of arr) {
      for (const a of (Array.isArray(c && c.attributes) ? c.attributes : [])) {
        if (!a) continue;
        // Direct hit → return the field we want (its value "Bridal Journey" is non-PII).
        if (norm(a.label) === "website lead source" || norm(a.value) === "bridal journey") {
          return json(200, { ok: true, found: true, attribute: { uid: a.uid, label: a.label, value: a.value, dataType: a.dataType } });
        }
        if (a.uid && !distinct.has(a.uid)) distinct.set(a.uid, { uid: a.uid, label: a.label, dataType: a.dataType });
      }
    }

    return json(200, {
      ok: true, found: false,
      diag: {
        listCount: arr.length,
        perContactAttrCounts: arr.map((c) => (Array.isArray(c && c.attributes) ? c.attributes.length : 0)),
        distinctAttributes: [...distinct.values()], // label + uid only — NO values
      },
    });
  } catch (err) {
    const msg = (err && err.message) || "";
    if (msg === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "probe_failed" });
  }
};
