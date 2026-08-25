/* TEMPORARY, READ-ONLY diagnostic — find the "Website Lead Source" attribute UID.
 *
 * Existing encrypted OAuth token (read_contacts). Lists contacts, then reads each contact's
 * detail to inspect its attributes, and returns ONLY the matching attribute's { uid, label,
 * value }. NEVER returns contact name/email/phone or any token/secret; NEVER modifies data.
 * If not found, returns non-PII diagnostics (counts + key NAMES only). Removed after use. */
import { env, initBlobs, getAccessToken } from "../lib/podium.mjs";

const API = "https://api.podium.com/v4";
const json = (status, obj) => ({
  statusCode: status,
  headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  body: JSON.stringify(obj),
});
const norm = (s) => (typeof s === "string" ? s.trim().toLowerCase() : "");
const matchAttr = (attrs) =>
  (Array.isArray(attrs) ? attrs : []).find(
    (x) => x && (norm(x.label) === "website lead source" || norm(x.value) === "bridal journey")
  );

export const handler = async (event) => {
  let e;
  try { e = env(); } catch { return json(503, { ok: false, error: "not_configured" }); }
  try {
    initBlobs(event);
    const token = await getAccessToken(e);
    const H = { Authorization: `Bearer ${token}`, Accept: "application/json" };

    const listRes = await fetch(`${API}/contacts`, { headers: H });
    if (!listRes.ok) {
      const detail = (await listRes.text().catch(() => "")).slice(0, 300);
      return json(200, { ok: false, error: `list_failed:${listRes.status}`, detail });
    }
    const listBody = await listRes.json();
    const arr = Array.isArray(listBody?.data) ? listBody.data : Array.isArray(listBody) ? listBody : [];
    const cursor = (listBody && listBody.metadata && (listBody.metadata.cursor || listBody.metadata.next)) || null;

    // 1) attributes may already be embedded in the list
    for (const c of arr) {
      const a = matchAttr(c && c.attributes);
      if (a) return json(200, { ok: true, found: true, via: "list", attribute: { uid: a.uid, label: a.label, value: a.value, dataType: a.dataType } });
    }

    // 2) otherwise read each contact's detail (bounded) to inspect attributes
    let detailStatus = null, sampleAttrCount = null;
    for (const c of arr.slice(0, 25)) {
      const uid = c && (c.uid || c.identifier || c.id);
      if (!uid) continue;
      const dr = await fetch(`${API}/contacts/${encodeURIComponent(uid)}`, { headers: H });
      if (detailStatus == null) detailStatus = dr.status;
      if (!dr.ok) continue;
      const db = await dr.json();
      const detail = (db && db.data) ? db.data : db;
      const attrs = Array.isArray(detail && detail.attributes) ? detail.attributes : [];
      if (sampleAttrCount == null) sampleAttrCount = attrs.length;
      const a = matchAttr(attrs);
      if (a) return json(200, { ok: true, found: true, via: "detail", attribute: { uid: a.uid, label: a.label, value: a.value, dataType: a.dataType } });
    }

    return json(200, {
      ok: true, found: false,
      diag: {
        listCount: arr.length,
        hasCursor: !!cursor,
        firstContactKeys: arr[0] ? Object.keys(arr[0]) : [],
        detailStatus,
        sampleAttrCount,
      },
    });
  } catch (err) {
    const msg = (err && err.message) || "";
    if (msg === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "probe_failed" });
  }
};
