/* TEMPORARY, READ-ONLY diagnostic — find the "Website Lead Source" attribute UID.
 *
 * Uses the existing encrypted OAuth token (read_contacts). Tries a few list-contacts URL
 * shapes (the list params aren't documented), and on the first that works, scans for the
 * attribute whose label is "Website Lead Source" (or value "Bridal Journey") and returns
 * ONLY { uid, label, value }. NEVER returns contact name/email/phone or any token/secret,
 * and NEVER modifies anything. If all shapes fail, returns the Podium validation message
 * (a 4xx body carries no PII) so the correct query can be determined. Removed after use. */
import { env, initBlobs, getAccessToken, getLocationUid } from "../lib/podium.mjs";

const API = "https://api.podium.com/v4";
const json = (status, obj) => ({
  statusCode: status,
  headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  body: JSON.stringify(obj),
});
const norm = (s) => (typeof s === "string" ? s.trim().toLowerCase() : "");

function findAttr(body) {
  const arr = Array.isArray(body?.data) ? body.data : Array.isArray(body) ? body : [];
  for (const c of arr) {
    const attrs = Array.isArray(c?.attributes) ? c.attributes : [];
    const a = attrs.find((x) => x && (norm(x.label) === "website lead source" || norm(x.value) === "bridal journey"));
    if (a) return { uid: a.uid, label: a.label, value: a.value, dataType: a.dataType };
  }
  return null;
}

export const handler = async (event) => {
  let e;
  try { e = env(); } catch { return json(503, { ok: false, error: "not_configured" }); }
  try {
    initBlobs(event);
    const token = await getAccessToken(e);
    const H = { Authorization: `Bearer ${token}`, Accept: "application/json" };
    let loc = null;
    try { loc = await getLocationUid(token); } catch { /* optional */ }

    const candidates = [
      `${API}/contacts`,
      `${API}/contacts?size=50`,
      loc && `${API}/contacts?locationUid=${loc}`,
      loc && `${API}/contacts?locations=${loc}`,
      loc && `${API}/contacts?locationUids=${loc}`,
      loc && `${API}/locations/${loc}/contacts`,
    ].filter(Boolean);

    const attempts = [];
    let firstDetail = null;
    for (const u of candidates) {
      const r = await fetch(u, { headers: H });
      attempts.push({ path: u.replace(API, ""), status: r.status });
      if (r.ok) {
        const body = await r.json();
        const total = Array.isArray(body?.data) ? body.data.length : Array.isArray(body) ? body.length : 0;
        const attribute = findAttr(body);
        if (attribute) return json(200, { ok: true, found: true, attribute });
        return json(200, { ok: true, found: false, scanned: total, note: "list worked but no matching attribute on this page", attempts });
      }
      if (firstDetail == null) firstDetail = (await r.text().catch(() => "")).slice(0, 300);
    }
    return json(200, { ok: false, error: "list_failed", attempts, detail: firstDetail });
  } catch (err) {
    const msg = (err && err.message) || "";
    if (msg === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "probe_failed" });
  }
};
