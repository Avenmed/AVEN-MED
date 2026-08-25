/* TEMPORARY, CONTROLLED TEST — does POST /v4/contacts accept contactStatus:{name}?
 *
 * Creates ONE clearly-synthetic test contact (example.com email, no phone) with
 * contactStatus:{name:"Bridal Journey"} using the existing encrypted token + write_contacts,
 * then re-reads it via the resource URL to see whether the status is reported. Returns only
 * API result metadata + the synthetic test-contact identity (so the owner can find/delete
 * it) — never tokens/secrets or third-party PII. Removed immediately after the test. */
import { env, initBlobs, getAccessToken, getLocationUid } from "../lib/podium.mjs";

const API = "https://api.podium.com/v4";
const TEST = { name: "AVEN Bridal Status Test", email: "aven-bridal-status-test@example.com" };
const json = (s, o) => ({ statusCode: s, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(o) });
const pickStatus = (s) => (s && typeof s === "object" ? { name: s.name ?? null, uid: s.uid ?? null } : (s ?? null));

export const handler = async (event) => {
  let e;
  try { e = env(); } catch { return json(503, { ok: false, error: "not_configured" }); }
  try {
    initBlobs(event);
    const token = await getAccessToken(e);
    const H = { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept: "application/json" };
    const loc = await getLocationUid(token);

    const payload = { name: TEST.name, locations: [loc], email: TEST.email, contactStatus: { name: "Bridal Journey" } };
    const cr = await fetch(`${API}/contacts`, { method: "POST", headers: H, body: JSON.stringify(payload) });
    const createStatus = cr.status;
    const createText = await cr.text().catch(() => "");
    let createBody = null; try { createBody = JSON.parse(createText); } catch {}
    const accepted = [200, 201, 202].includes(createStatus);
    const resourceUrl = createBody?.metadata?.url || null;

    // brief pause — create is 202/async; give it a moment before re-reading
    await new Promise((r) => setTimeout(r, 1500));

    let refetch = null;
    if (resourceUrl) {
      const gr = await fetch(resourceUrl, { headers: { Authorization: H.Authorization, Accept: "application/json" } });
      const gt = await gr.text().catch(() => "");
      let gb = null; try { gb = JSON.parse(gt); } catch {}
      const c = (gb && gb.data) ? gb.data : gb;
      refetch = {
        status: gr.status,
        keys: (c && typeof c === "object") ? Object.keys(c) : null,
        contactStatus: pickStatus((c && (c.contactStatus ?? c.status)) ?? null),
      };
    }

    return json(200, {
      ok: true,
      testContact: TEST, // synthetic — for the owner to locate/delete in the Podium UI
      create: {
        httpStatus: createStatus,
        accepted,
        identifierPresent: !!(createBody && createBody.data && createBody.data.identifier),
        resourceUrlPresent: !!resourceUrl,
        detail: accepted ? undefined : createText.slice(0, 400), // 4xx validation msg (no PII)
      },
      refetch,
    });
  } catch (err) {
    const m = (err && err.message) || "";
    if (m === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "status_test_failed", message: m.slice(0, 120) });
  }
};
