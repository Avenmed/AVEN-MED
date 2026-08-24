/* AVEN MED — Podium OAuth: CALLBACK.
 * Public route: GET /api/podium/oauth/callback (rewritten to this function). This is the
 * exact Redirect URL registered in the Podium Developer dashboard.
 *
 * Flow: validate OAuth state (CSRF) against the httpOnly cookie → exchange the code for
 * tokens server-side (Client Secret never leaves the server) → persist the token set
 * ENCRYPTED in Netlify Blobs → run one harmless read_locations check → return a minimal
 * success page. No token, code, secret, or contact data is ever logged or shown. */
import {
  env, verifyState, clearStateCookie, readCookie, STATE_COOKIE_NAME,
  exchangeCode, saveTokens, countLocations,
} from "../lib/podium.mjs";

function page(status, title, message) {
  return {
    statusCode: status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Set-Cookie": clearStateCookie(), // one-time state cookie is always cleared
    },
    body:
      `<!doctype html><meta charset="utf-8">` +
      `<meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>` +
      `<body style="font-family:ui-serif,Georgia,serif;background:#E9DDC8;color:#2E2620;` +
      `display:grid;place-items:center;min-height:100vh;margin:0">` +
      `<main style="max-width:34rem;padding:2rem;text-align:center">` +
      `<h1 style="font-weight:400;letter-spacing:.01em">${title}</h1>` +
      `<p style="line-height:1.7;color:#4A3D2E">${message}</p></main></body>`,
  };
}

export const handler = async (event) => {
  let e;
  try {
    e = env();
  } catch (err) {
    return page(500, "Configuration incomplete", `The Podium connection is not configured (${err.message}). No action was taken.`);
  }

  const q = event.queryStringParameters || {};

  // Podium reported an error (e.g. the user denied access).
  if (q.error) return page(400, "Authorization cancelled", "Podium did not grant access. No tokens were stored.");

  // CSRF: the state param must be signature-valid AND match the httpOnly cookie nonce.
  const cookieNonce = readCookie(event.headers && event.headers.cookie, STATE_COOKIE_NAME);
  if (!verifyState(q.state, cookieNonce, e.stateSecret)) {
    return page(400, "Request rejected", "OAuth state validation failed, so this request was not trusted. Please start the connection again.");
  }
  if (!q.code) return page(400, "Request rejected", "The authorization code was missing. Please start the connection again.");

  try {
    const tokens = await exchangeCode(q.code, e); // Client Secret used server-side only
    await saveTokens(tokens, e);                  // encrypted at rest in Netlify Blobs

    // Harmless verification using read_locations only — count, never data.
    let note;
    try {
      const n = await countLocations(tokens.access_token);
      note = ` Verified read access to ${n} Podium location${n === 1 ? "" : "s"}.`;
    } catch {
      note = " (Tokens stored, but the location read-check did not complete.)";
    }
    return page(200, "Connected to Podium", `The AVEN MED website is now authorized with Podium.${note} You can close this window.`);
  } catch (err) {
    // err.message is a short code (e.g. "token_exchange_failed:400") — no secret/token.
    return page(502, "Connection failed", `The authorization could not be completed (${err.message}).`);
  }
};
