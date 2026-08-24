/* AVEN MED — Bridal Journey → Podium lead handoff.
 * Public route: POST /api/podium/bridal-submit  (browser posts here; never calls Podium
 * directly). Creates/updates a Podium contact from the APPROVED fields only and labels it
 * as a Bridal Journey lead. No tokens/secrets/PII are exposed to the browser or logged.
 *
 * PRIVACY: only name, email, phone (+ optional non-sensitive lead metadata via owner-
 * defined attributes) are sent to Podium. Skin concerns, goals, treatment history,
 * skincare routine, wellness goals, and free-text answers are NOT accepted or forwarded. */
import {
  env, initBlobs, getAccessToken, getLocationUid, postContact,
  normalizePhoneE164, rateLimitOk, LEAD_SOURCE,
} from "../lib/podium.mjs";

// Allowed option values (server-side whitelist — mirror the form registry).
const OK_TIMING = ["As soon as possible", "Within 1 month", "1–3 months", "Just exploring for now"];
const OK_REFERRAL = ["Instagram", "Friend or family", "Google", "A current patient", "Other"];
const str = (v, n) => (typeof v === "string" ? v.trim().slice(0, n) : "");

const json = (status, obj) => ({
  statusCode: status,
  headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  body: JSON.stringify(obj),
});

export const handler = async (event) => {
  if (event.httpMethod !== "POST") return json(405, { ok: false, error: "method_not_allowed" });

  initBlobs(event); // wire Blobs context (v1 Lambda handler) before any store access

  // Abuse protection — lightweight per-IP rate limit (Netlify client IP + Blobs).
  const ipHeader = (event.headers && (event.headers["x-nf-client-connection-ip"] || event.headers["x-forwarded-for"])) || "";
  const ip = String(ipHeader).split(",")[0].trim();
  if (!(await rateLimitOk(ip))) return json(429, { ok: false, error: "rate_limited" });

  // Parse + validate server-side (never trust client validation). Whitelist only —
  // sensitive fields are ignored even if present in the body.
  let body;
  try { body = JSON.parse(event.body || "{}"); } catch { return json(400, { ok: false, error: "invalid_request" }); }

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const consent = body.consent === true;
  if (!name) return json(400, { ok: false, error: "invalid_request" });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json(400, { ok: false, error: "invalid_email" });
  if (!consent) return json(400, { ok: false, error: "consent_required" });

  const phone = normalizePhoneE164(str(body.phone, 40));
  const weddingDate = /^\d{4}-\d{2}-\d{2}$/.test(str(body.weddingDate, 10)) ? str(body.weddingDate, 10) : null;
  const timing = OK_TIMING.includes(str(body.consultationTiming, 40)) ? str(body.consultationTiming, 40) : null;
  const referral = OK_REFERRAL.includes(str(body.referral, 40)) ? str(body.referral, 40) : null;

  let e;
  try { e = env(); } catch { return json(503, { ok: false, error: "not_configured" }); }

  try {
    // Approved Podium contact attributes — only those whose owner-defined UID is set.
    const attributes = [
      { uid: e.leadSourceAttrUid, value: LEAD_SOURCE },
      { uid: e.weddingDateAttrUid, value: weddingDate },
      { uid: e.consultTimingAttrUid, value: timing },
      { uid: e.referralAttrUid, value: referral },
    ].filter((a) => a.uid && a.value);

    let accessToken = await getAccessToken(e);
    const locationUid = await getLocationUid(accessToken);

    const buildPayload = () => {
      const p = { name, locations: [locationUid], email };
      if (phone) p.phoneNumber = phone;
      if (attributes.length) p.attributes = attributes;
      return p;
    };

    // POST; on 401 (expired/invalid token) force a refresh and retry exactly once.
    let res = await postContact(accessToken, buildPayload());
    if (res.status === 401) {
      accessToken = await getAccessToken(e, { forceRefresh: true });
      res = await postContact(accessToken, buildPayload());
    }
    if (![200, 201, 202].includes(res.status)) {
      return json(502, { ok: false, error: "podium_error" }); // no Podium details to client
    }
    return json(200, { ok: true }); // no contact id returned to the browser
  } catch (err) {
    const msg = (err && err.message) || "";
    if (msg === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "submit_failed" });
  }
};
