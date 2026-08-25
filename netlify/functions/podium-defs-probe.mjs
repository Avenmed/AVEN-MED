/* TEMPORARY, READ-ONLY probe — list org tag + attribute DEFINITIONS.
 * GET /v4/contact_tags and GET /v4/contact_attributes (read_contacts). Returns ONLY
 * definition metadata (uid, label, dataType, ownerResource, isEncrypted). No contact
 * PII, no values, no tokens. Creates/modifies nothing. Removed after capture. */
import { env, initBlobs, getAccessToken } from "../lib/podium.mjs";

const API = "https://api.podium.com/v4";
const json = (s, o) => ({ statusCode: s, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(o) });

async function listAll(url, H) {
  const items = [];
  let u = url, pages = 0;
  while (u && pages < 10) {
    const r = await fetch(u, { headers: H });
    if (!r.ok) return { error: String(r.status), detail: (await r.text().catch(() => "")).slice(0, 300) };
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

    const t = await listAll(`${API}/contact_tags`, H);
    const tags = t.error ? { error: t.error, detail: t.detail }
      : { count: t.items.length, all: t.items.map((x) => ({ uid: x.uid, label: x.label ?? x.name ?? null })) };

    const a = await listAll(`${API}/contact_attributes`, H);
    const attributes = a.error ? { error: a.error, detail: a.detail }
      : { count: a.items.length, all: a.items.map((x) => ({ uid: x.uid, label: x.label ?? null, dataType: x.dataType ?? null, isEncrypted: x.isEncrypted ?? null })) };

    return json(200, { ok: true, tags, attributes });
  } catch (err) {
    const m = (err && err.message) || "";
    if (m === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "probe_failed", message: m.slice(0, 120) });
  }
};
