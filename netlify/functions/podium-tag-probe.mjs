/* TEMPORARY, READ-ONLY diagnostic — find the "Bridal Journey" contact-tag UID.
 *
 * Existing encrypted OAuth token (read_contacts). Lists contacts and inspects the embedded
 * `tags`. If a tag named "Bridal Journey" is present, returns ONLY { uid, name }. Otherwise
 * returns non-PII diagnostics: tag counts, the tag object's key NAMES, and the distinct tags
 * present (uid + name only). NEVER returns contact name/email/phone/messages or any token/
 * secret; NEVER modifies data. Removed after the UID is captured. */
import { env, initBlobs, getAccessToken } from "../lib/podium.mjs";

const API = "https://api.podium.com/v4";
const json = (status, obj) => ({
  statusCode: status,
  headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  body: JSON.stringify(obj),
});
const norm = (s) => (typeof s === "string" ? s.trim().toLowerCase() : "");
const tagName = (t) => (t && typeof t === "object" ? (t.name || t.label || t.title || t.value || "") : (typeof t === "string" ? t : ""));
const tagUid = (t) => (t && typeof t === "object" ? (t.uid || t.id || t.identifier || null) : null);

export const handler = async (event) => {
  let e;
  try { e = env(); } catch { return json(503, { ok: false, error: "not_configured" }); }
  try {
    initBlobs(event);
    const token = await getAccessToken(e);
    const r = await fetch(`${API}/contacts`, { headers: { Authorization: `Bearer ${token}`, Accept: "application/json" } });
    if (!r.ok) return json(200, { ok: false, error: `list_failed:${r.status}`, detail: (await r.text().catch(() => "")).slice(0, 300) });

    const body = await r.json();
    const arr = Array.isArray(body?.data) ? body.data : Array.isArray(body) ? body : [];
    const distinct = new Map(); // uid -> {uid,name}
    let firstTagKeys = null;

    for (const c of arr) {
      const tags = Array.isArray(c && c.tags) ? c.tags : [];
      for (const t of tags) {
        if (firstTagKeys == null && t && typeof t === "object") firstTagKeys = Object.keys(t);
        const name = tagName(t), uid = tagUid(t);
        if (norm(name) === "bridal journey" && uid) {
          return json(200, { ok: true, found: true, tag: { uid, name } });
        }
        if (uid && !distinct.has(uid)) distinct.set(uid, { uid, name });
      }
    }

    return json(200, {
      ok: true, found: false,
      diag: {
        listCount: arr.length,
        perContactTagCounts: arr.map((c) => (Array.isArray(c && c.tags) ? c.tags.length : 0)),
        firstTagKeys,
        distinctTags: [...distinct.values()], // uid + name only — no PII
      },
    });
  } catch (err) {
    const m = (err && err.message) || "";
    if (m === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "probe_failed" });
  }
};
