/* TEMPORARY, ONE-SHOT write test — apply the Bridal Journey tag + website_lead_source
 * attribute to the EXISTING synthetic test contact via the documented contact upsert
 * (POST /v4/contacts). Same email → Podium dedupes and UPDATES (never a new contact).
 * write_contacts only. Run-once guarded. No new contact/message/conversation/note, no
 * GA4/Charts, no tokens/PII logged. Removed right after the result is captured. */
import { env, initBlobs, getAccessToken, getLocationUid } from "../lib/podium.mjs";
import { getStore } from "@netlify/blobs";

const API = "https://api.podium.com/v4";
const TEST_EMAIL = "aven-bridal-status-test@example.com";
const TEST_NAME = "AVEN Bridal Status Test";
const TAG_UID = "01a03985-9b26-74dd-8a30-cf25dff26c9a";   // Bridal Journey
const ATTR_UID = "01a03964-58fb-7ad7-985f-cb83d9bb2419";  // website_lead_source (STRING)
const RESULT_KEY = "tag-attr-write-result";
const json = (s, o) => ({ statusCode: s, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(o) });

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

    // Upsert the EXISTING contact by email (dedup → update). Apply tag + attribute value.
    const payload = {
      name: TEST_NAME,
      locations: [loc],
      email: TEST_EMAIL,
      tags: [TAG_UID],
      attributes: [{ uid: ATTR_UID, value: "Bridal Journey" }],
    };
    const r = await fetch(`${API}/contacts`, { method: "POST", headers: H, body: JSON.stringify(payload) });
    const status = r.status;
    const text = await r.text().catch(() => "");
    let body = null; try { body = JSON.parse(text); } catch {}
    const accepted = [200, 201, 202].includes(status);

    const result = {
      testContact: { name: TEST_NAME, email: TEST_EMAIL },
      applied: { tag: { label: "Bridal Journey", uid: TAG_UID }, attribute: { label: "website_lead_source", uid: ATTR_UID, value: "Bridal Journey" } },
      httpStatus: status,
      accepted,
      identifierPresent: !!(body && body.data && body.data.identifier),
      resourceUrl: (body && body.metadata && body.metadata.url) || null,
      detail: accepted ? undefined : text.slice(0, 400),
    };
    if (accepted) await store.set(RESULT_KEY, JSON.stringify(result));
    return json(200, { ok: accepted, ...result });
  } catch (err) {
    const m = (err && err.message) || "";
    if (m === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "write_test_failed", message: m.slice(0, 120) });
  }
};
