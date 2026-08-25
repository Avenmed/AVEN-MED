/* TEMPORARY, ONE-SHOT write test — set ONE SINGLE_SELECT attribute value on the existing
 * synthetic contact via the dedicated per-contact endpoint:
 *   POST /v4/contacts/{identifier=email}/attributes/{uid}   body {value}   scope write_contacts
 * Touches ONLY consultation_timing. No upsert, no new contact, no name/locations/tags/other
 * attributes changed. Run-once guarded. No GA4/Notes/Charts/messages. No tokens/PII logged.
 * Removed right after the result is captured. */
import { env, initBlobs, getAccessToken } from "../lib/podium.mjs";
import { getStore } from "@netlify/blobs";

const API = "https://api.podium.com/v4";
const EMAIL = "aven-bridal-status-test@example.com";
const ATTR_UID = "01a03a17-a1db-71fd-ad7b-d586451be683"; // consultation_timing (SINGLE_SELECT)
const VALUE = "As soon as possible";
const RESULT_KEY = "singleselect-write-result";
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

    const url = `${API}/contacts/${encodeURIComponent(EMAIL)}/attributes/${ATTR_UID}`;
    const r = await fetch(url, { method: "POST", headers: H, body: JSON.stringify({ value: VALUE }) });
    const status = r.status;
    const text = await r.text().catch(() => "");
    let body = null; try { body = JSON.parse(text); } catch {}
    const accepted = [200, 201, 202].includes(status);

    const result = {
      endpoint: `POST /v4/contacts/{email}/attributes/${ATTR_UID}`,
      attribute: "consultation_timing",
      valueSent: VALUE,
      httpStatus: status,
      acceptedLabelString: accepted,
      identifierReturned: !!(body && body.data && body.data.identifier),
      resourceUrl: (body && body.metadata && body.metadata.url) || null,
      detail: accepted ? undefined : text.slice(0, 400), // 4xx validation msg (no PII)
    };
    if (accepted) await store.set(RESULT_KEY, JSON.stringify(result));
    return json(200, { ok: accepted, ...result });
  } catch (err) {
    const m = (err && err.message) || "";
    if (m === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "ss_write_failed", message: m.slice(0, 120) });
  }
};
