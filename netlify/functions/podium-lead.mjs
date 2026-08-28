/* AVEN MED — website lead → Podium webhook.
 *
 * Public route: POST /api/podium/lead  (the browser posts here and never calls Podium
 * directly). ONE webhook serves every website lead source; `website_lead_source`
 * distinguishes them, per Jordan's confirmed contract.
 *
 * SECURITY: the Podium webhook URL lives only in the PODIUM_WEBHOOK_URL environment
 * variable, read server-side. It must never appear in the client bundle, the HTML, a
 * form action, a query string, analytics, or a log line.
 *
 * PRIVACY: only the approved fields below are forwarded. Free-text clinical answers,
 * skin concerns, treatment history, wellness goals, IP addresses, cookies, analytics
 * ids and browser metadata are neither accepted nor sent. Logs carry the source and
 * the upstream status only — never lead values.
 *
 * This function is separate from podium-bridal-submit.mjs, which is the older OAuth
 * Contacts-API path with an incompatible camelCase schema. They are two different
 * integrations; nothing is shared but the phone normalizer and the rate limiter. */
import { normalizePhoneE164, rateLimitOk, initBlobs } from "../lib/podium.mjs";

/* Static, per Jordan's contract. */
const LOCATION = "AVEN MED";

/* Exact visible option labels. Choice values are forwarded verbatim — never converted
 * to slugs — so these mirror the form registries character for character. */
const CONTACT_INTEREST = [
  "Aesthetic Medicine Assessment",
  "Wellness Assessment",
  "Skin Assessment",
  "AVEN Essential membership",
  "AVEN Elevate (founding cohort)",
  "Press · Other",
];
const BRIDAL_CONSULT_TIMING = ["As soon as possible", "Within 1 month", "1–3 months", "Just exploring for now"];
const BRIDAL_APPOINTMENT = ["Weekday mornings", "Weekday afternoons", "Evenings", "Weekends", "No preference"];
const BRIDAL_REFERRAL = ["Instagram", "Friend or family", "Google", "A current patient", "Other"];

/* Recognised lead sources. `fields` are the optional, source-specific keys this source
 * may send; anything else in the body is dropped. `choices` whitelists label values. */
const SOURCES = {
  "Website — Contact": {
    fields: ["interest", "message"],
    choices: { interest: CONTACT_INTEREST },
  },
  "Bridal Journey": {
    fields: ["wedding_date", "engagement_date", "consultation_timing", "preferred_appointment", "referral_source"],
    choices: {
      consultation_timing: BRIDAL_CONSULT_TIMING,
      preferred_appointment: BRIDAL_APPOINTMENT,
      referral_source: BRIDAL_REFERRAL,
    },
    dates: ["wedding_date", "engagement_date"],
  },
};

const json = (status, obj) => ({
  statusCode: status,
  headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  body: JSON.stringify(obj),
});

const str = (v, n) => (typeof v === "string" ? v.trim().slice(0, n) : "");
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isDate = (v) => /^\d{4}-\d{2}-\d{2}$/.test(v);

/* First token is the given name, everything after it is the surname, so compound
 * surnames survive. A single-name visitor is valid: last_name is "" and Podium
 * accepts it. Never reject on an empty last_name, never fabricate one. */
export function splitName(full) {
  const parts = str(full, 120).split(/\s+/).filter(Boolean);
  if (!parts.length) return null;
  return { first_name: parts[0], last_name: parts.slice(1).join(" ") };
}

export const handler = async (event) => {
  if (event.httpMethod !== "POST") return json(405, { ok: false, error: "method_not_allowed" });

  initBlobs(event);
  const ipHeader = (event.headers && (event.headers["x-nf-client-connection-ip"] || event.headers["x-forwarded-for"])) || "";
  const ip = String(ipHeader).split(",")[0].trim();
  if (!(await rateLimitOk(ip))) return json(429, { ok: false, error: "rate_limited" });

  let body;
  try { body = JSON.parse(event.body || "{}"); } catch { return json(400, { ok: false, error: "invalid_request" }); }

  const source = str(body.website_lead_source, 60);
  const spec = SOURCES[source];
  if (!spec) return json(400, { ok: false, error: "invalid_source" });

  const name = splitName(body.name);
  if (!name) return json(400, { ok: false, error: "invalid_request" });

  const email = str(body.email, 200);
  if (!isEmail(email)) return json(400, { ok: false, error: "invalid_email" });

  /* Phone is Podium's primary dedup key, so it is normalized to one consistent
   * representation before it ever leaves here. An unparseable or absent number sends
   * an empty string — never a placeholder, never a fabricated number. */
  const phone = normalizePhoneE164(str(body.phone, 40)) || "";

  const payload = {
    location: LOCATION,
    website_lead_source: source,
    first_name: name.first_name,
    last_name: name.last_name,
    email,
    phone,
  };

  for (const key of spec.fields) {
    const raw = str(body[key], key === "message" ? 4000 : 120);
    if (!raw) continue;
    if (spec.choices && spec.choices[key]) {
      // Unrecognised label = dropped, not forwarded and not an error.
      if (!spec.choices[key].includes(raw)) continue;
    }
    if (spec.dates && spec.dates.includes(key) && !isDate(raw)) continue;
    payload[key] = raw;
  }

  const url = process.env.PODIUM_WEBHOOK_URL;
  if (!url) return json(503, { ok: false, error: "not_configured" });

  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
    });
  } catch {
    /* Ambiguous failure: the request may have reached Podium even though we never saw
     * the response. Podium dedupes primarily on phone, so a blind retry risks a
     * duplicate. We do NOT retry — we return a retryable error and let the visitor
     * decide. No retry queue in Phase A. */
    console.log(JSON.stringify({ fn: "podium-lead", source, upstream: "network_error" }));
    return json(503, { ok: false, error: "upstream_unavailable" });
  }

  /* Jordan: ANY 2xx is success — 200, 201, 202, 204 all count. Never `=== 200`. */
  const ok = res.status >= 200 && res.status < 300;
  console.log(JSON.stringify({ fn: "podium-lead", source, upstream_status: res.status, ok }));
  if (!ok) return json(502, { ok: false, error: "upstream_rejected" });

  return json(200, { ok: true });
};
