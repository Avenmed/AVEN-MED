/* AVEN MED — Podium OAuth server-side helpers.
 *
 * SERVER-ONLY. This module runs exclusively inside Netlify Functions. It is NEVER
 * imported by React/browser code, so the Podium Client Secret and OAuth tokens never
 * reach the client bundle.
 *
 * PRIVACY / SECURITY CONTRACT:
 *  - The Client Secret lives only in an environment variable, read here at runtime.
 *  - Access/refresh tokens are persisted ENCRYPTED (AES-256-GCM) in Netlify Blobs.
 *  - Nothing sensitive is ever logged: no access tokens, refresh tokens, authorization
 *    codes, client secret, or contact/location data. Errors carry short codes only
 *    (e.g. "missing_env:PODIUM_CLIENT_ID", "token_exchange_failed:400") — never values.
 *  - No Podium data of any kind is sent to GA4 / client analytics.
 *
 * Podium API v4 endpoints confirmed against docs.podium.com (OAuth 2.0 auth-code flow).
 */
import crypto from "node:crypto";
import { getStore, connectLambda } from "@netlify/blobs";

// --- Podium API (v4) ---
export const PODIUM = {
  authorize: "https://api.podium.com/oauth/authorize",
  token: "https://api.podium.com/oauth/token",
  api: "https://api.podium.com/v4",
};

// Exactly the scopes AVEN requests for this integration — nothing else.
// (No message / appointment / campaign / payment / review scopes.)
export const SCOPES = ["read_contacts", "write_contacts", "read_locations"];

const BLOB_STORE = "podium-oauth";
const BLOB_KEY = "token-set"; // single AVEN Podium account → one key
const STATE_COOKIE = "pod_oauth_state";
export const STATE_COOKIE_NAME = STATE_COOKIE;

// --- environment (read at runtime; only NAMES are ever surfaced, never values) ---
export function env() {
  const need = (k) => {
    const v = process.env[k];
    if (!v) throw new Error(`missing_env:${k}`);
    return v;
  };
  return {
    clientId: need("PODIUM_CLIENT_ID"),
    clientSecret: need("PODIUM_CLIENT_SECRET"),
    redirectUri: need("PODIUM_REDIRECT_URI"),
    encKey: need("PODIUM_TOKEN_ENC_KEY"),
    stateSecret: need("PODIUM_OAUTH_STATE_SECRET"),
    // OPTIONAL owner-defined custom-attribute UIDs. Podium requires an attribute to be
    // defined first (it has a UID); attaching an existing UID needs only write_contacts.
    // Only fields whose UID is configured are sent to Podium — unset → simply not sent.
    leadSourceAttrUid: process.env.PODIUM_LEAD_SOURCE_ATTR_UID || null,
    weddingDateAttrUid: process.env.PODIUM_WEDDING_DATE_ATTR_UID || null,
    consultTimingAttrUid: process.env.PODIUM_CONSULT_TIMING_ATTR_UID || null,
    referralAttrUid: process.env.PODIUM_REFERRAL_ATTR_UID || null,
  };
}

// --- AES-256-GCM at-rest encryption for the persisted token set ---
function keyBuf(encKey) {
  // Guard: the key must be a STRING (a common footgun is passing the whole env object).
  // Fail with a safe type-only code, never a cryptic Buffer error or the value.
  if (typeof encKey !== "string") throw new Error(`bad_enc_key_type:${typeof encKey}`);
  // Accept a 64-char hex or base64 key; both must decode to exactly 32 bytes.
  const buf = /^[0-9a-fA-F]{64}$/.test(encKey)
    ? Buffer.from(encKey, "hex")
    : Buffer.from(encKey, "base64");
  if (buf.length !== 32) throw new Error("bad_enc_key_length");
  return buf;
}
function encrypt(plaintext, encKey) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", keyBuf(encKey), iv);
  const enc = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, enc]).toString("base64"); // iv|tag|ciphertext
}
function decrypt(b64, encKey) {
  const raw = Buffer.from(b64, "base64");
  const decipher = crypto.createDecipheriv("aes-256-gcm", keyBuf(encKey), raw.subarray(0, 12));
  decipher.setAuthTag(raw.subarray(12, 28));
  return Buffer.concat([decipher.update(raw.subarray(28)), decipher.final()]).toString("utf8");
}

// --- Netlify Blobs runtime context ---
// Classic (v1) Lambda-compatible functions receive the Blobs siteID/token INSIDE the
// Lambda event, not via the global environment — so getStore() alone throws
// MissingBlobsEnvironmentError. connectLambda(event) wires that auto-injected context
// (no manual siteID/token, no personal access token). Call once per invocation before
// any getStore() usage. Harmless/idempotent.
export function initBlobs(event) {
  connectLambda(event);
}

// --- token persistence (Netlify Blobs, encrypted at rest) ---
export async function saveTokens(tokenSet, encKey) {
  const store = getStore(BLOB_STORE);
  await store.set(BLOB_KEY, encrypt(JSON.stringify(tokenSet), encKey));
}
export async function loadTokens(encKey) {
  const store = getStore(BLOB_STORE);
  const b64 = await store.get(BLOB_KEY);
  return b64 ? JSON.parse(decrypt(b64, encKey)) : null;
}

// --- OAuth state: an HMAC-signed nonce bound to an httpOnly cookie (CSRF) ---
const b64url = (buf) => buf.toString("base64url");
export function makeState(stateSecret) {
  const nonce = b64url(crypto.randomBytes(16));
  const sig = b64url(crypto.createHmac("sha256", stateSecret).update(nonce).digest());
  return { state: `${nonce}.${sig}`, nonce };
}
export function verifyState(stateParam, cookieNonce, stateSecret) {
  if (!stateParam || !cookieNonce) return false;
  const [nonce, sig] = String(stateParam).split(".");
  if (!nonce || !sig) return false;
  const expSig = b64url(crypto.createHmac("sha256", stateSecret).update(nonce).digest());
  const eq = (x, y) => {
    const a = Buffer.from(String(x)), b = Buffer.from(String(y));
    return a.length === b.length && crypto.timingSafeEqual(a, b);
  };
  return eq(sig, expSig) && eq(nonce, cookieNonce); // signature valid AND bound to cookie
}

// --- cookie helpers ---
export function setStateCookie(nonce) {
  return `${STATE_COOKIE}=${nonce}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`;
}
export function clearStateCookie() {
  return `${STATE_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}
export function readCookie(cookieHeader, name) {
  if (!cookieHeader) return null;
  for (const part of cookieHeader.split(";")) {
    const idx = part.indexOf("=");
    if (idx === -1) continue;
    if (part.slice(0, idx).trim() === name) return part.slice(idx + 1).trim();
  }
  return null;
}

// --- authorize URL ---
export function authorizeUrl(e, state) {
  const p = new URLSearchParams({
    client_id: e.clientId,
    redirect_uri: e.redirectUri,
    scope: SCOPES.join(" "),
    response_type: "code",
    state,
  });
  return `${PODIUM.authorize}?${p.toString()}`;
}

// --- token exchange / refresh (JSON body, per Podium docs) ---
function normalizeTokenSet(t) {
  const expiresIn = Number(t.expires_in) || 36000; // Podium access tokens ≈ 10h
  return {
    access_token: t.access_token,
    refresh_token: t.refresh_token,
    token_type: t.token_type || "Bearer",
    scope: t.scope || SCOPES.join(" "),
    obtained_at: Date.now(),
    expires_at: Date.now() + expiresIn * 1000,
  };
}
export async function exchangeCode(code, e) {
  const res = await fetch(PODIUM.token, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri: e.redirectUri,
      client_id: e.clientId,
      client_secret: e.clientSecret,
    }),
  });
  if (!res.ok) throw new Error(`token_exchange_failed:${res.status}`);
  return normalizeTokenSet(await res.json());
}
// Provided for later use (not called in this scaffold phase).
export async function refreshTokens(refreshToken, e) {
  const res = await fetch(PODIUM.token, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: e.clientId,
      client_secret: e.clientSecret,
    }),
  });
  if (!res.ok) throw new Error(`token_refresh_failed:${res.status}`);
  return normalizeTokenSet(await res.json());
}

// --- read_locations verification (harmless; no data stored or logged) ---
export async function countLocations(accessToken) {
  const res = await fetch(`${PODIUM.api}/locations`, {
    headers: { Authorization: `Bearer ${accessToken}`, Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`locations_read_failed:${res.status}`);
  const body = await res.json();
  const arr = Array.isArray(body?.data) ? body.data : Array.isArray(body) ? body : [];
  return arr.length; // count only — location details are never returned/stored/logged
}

// =============================================================================
//  Lead submission (Bridal Journey → Podium contact). write_contacts only.
// =============================================================================
export const LEAD_SOURCE = "Bridal Journey";

// Return a valid access token, refreshing (and persisting rotation) when within 60s of
// expiry or when forced. Never logs token values. Throws "not_connected" if unauthorized.
export async function getAccessToken(e, { forceRefresh = false } = {}) {
  const tokens = await loadTokens(e.encKey);
  if (!tokens || !tokens.access_token) throw new Error("not_connected");
  const nearExpiry = Date.now() > (tokens.expires_at || 0) - 60000;
  if ((forceRefresh || nearExpiry) && tokens.refresh_token) {
    const rotated = await refreshTokens(tokens.refresh_token, e);
    await saveTokens(rotated, e.encKey); // persist rotated set (encrypted)
    return rotated.access_token;
  }
  return tokens.access_token;
}

// The single AVEN location UID (read_locations), cached in Blobs to avoid refetching.
export async function getLocationUid(accessToken) {
  const store = getStore(BLOB_STORE);
  const cached = await store.get("location-uid");
  if (cached) return cached;
  const res = await fetch(`${PODIUM.api}/locations`, {
    headers: { Authorization: `Bearer ${accessToken}`, Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`locations_read_failed:${res.status}`);
  const body = await res.json();
  const arr = Array.isArray(body?.data) ? body.data : Array.isArray(body) ? body : [];
  const uid = arr[0] && (arr[0].uid || arr[0].id || arr[0].identifier);
  if (!uid) throw new Error("no_location");
  await store.set("location-uid", String(uid));
  return String(uid);
}

// Create/upsert a contact. Podium dedupes by email/phone/conversation → it UPDATES the
// existing contact instead of creating a duplicate. Returns the raw Response so the caller
// can handle 401 (refresh + retry once). No request/response bodies are ever logged.
export async function postContact(accessToken, payload) {
  return fetch(`${PODIUM.api}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
}

// Normalize a phone to Podium's E.164 (^\+[1-9]\d{1,15}$). Returns null if unusable
// (the field is then simply omitted — never sent malformed).
export function normalizePhoneE164(raw) {
  if (typeof raw !== "string") return null;
  const t = raw.trim();
  if (!t) return null;
  if (/^\+[1-9]\d{1,15}$/.test(t)) return t;
  const d = t.replace(/\D/g, "");
  if (d.length === 10) return `+1${d}`;              // US 10-digit
  if (d.length === 11 && d[0] === "1") return `+${d}`;
  return null;
}

// Lightweight per-IP rate limit via Blobs (no native TTL → compare timestamps). Returns
// true if allowed. Fails OPEN on storage errors so a Blobs hiccup never blocks real leads.
export async function rateLimitOk(ip, { max = 6, windowMs = 600000 } = {}) {
  if (!ip) return true;
  try {
    const store = getStore("podium-ratelimit");
    const key = ip.replace(/[^a-zA-Z0-9:._-]/g, "_").slice(0, 80);
    const now = Date.now();
    const raw = await store.get(key);
    let rec = raw ? JSON.parse(raw) : { c: 0, t: now };
    if (now - rec.t > windowMs) rec = { c: 0, t: now };
    rec.c += 1;
    await store.set(key, JSON.stringify(rec));
    return rec.c <= max;
  } catch { return true; }
}
