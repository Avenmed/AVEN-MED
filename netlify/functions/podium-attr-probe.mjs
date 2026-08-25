/* TEMPORARY, READ-ONLY diagnostic — find the "Website Lead Source" attribute UID.
 *
 * Uses the existing encrypted OAuth token (read_contacts). Lists contacts, finds the one
 * whose attribute label is "Website Lead Source" (or value "Bridal Journey"), and returns
 * ONLY that attribute's { uid, label, value } — NEVER the contact's name/email/phone, and
 * never any token/secret. Does NOT modify anything. Removed immediately after the UID is
 * captured. No PII/token is logged. */
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
    const token = await getAccessToken(e); // existing encrypted-token flow (+ refresh)

    let url = `${API}/contacts?size=100`;
    let pages = 0, scanned = 0, match = null;
    while (url && pages < 10 && !match) {
      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}`, Accept: "application/json" } });
      if (!res.ok) return json(502, { ok: false, error: `contacts_read_failed:${res.status}` });
      const body = await res.json();
      const arr = Array.isArray(body?.data) ? body.data : Array.isArray(body) ? body : [];
      scanned += arr.length;
      for (const c of arr) {
        const attrs = Array.isArray(c?.attributes) ? c.attributes : [];
        const a = attrs.find((x) => x && (norm(x.label) === "website lead source" || norm(x.value) === "bridal journey"));
        if (a) { match = { uid: a.uid, label: a.label, value: a.value, dataType: a.dataType }; break; }
      }
      const next = (body && body.metadata && (body.metadata.cursor || body.metadata.next || body.metadata.nextCursor)) || null;
      url = next ? `${API}/contacts?cursor=${encodeURIComponent(next)}` : null;
      pages++;
    }

    if (!match) return json(200, { ok: true, found: false, scanned });
    // ONLY attribute metadata — no contact PII, no tokens.
    return json(200, { ok: true, found: true, attribute: match });
  } catch (err) {
    const msg = (err && err.message) || "";
    if (msg === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "probe_failed" });
  }
};
