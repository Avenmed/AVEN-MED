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
import { getStore } from "@netlify/blobs";

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
  };
}

// --- AES-256-GCM at-rest encryption for the persisted token set ---
function keyBuf(encKey) {
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
