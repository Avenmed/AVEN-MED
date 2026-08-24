/* AVEN MED — Podium OAuth: START.
 * Public route: GET /api/podium/oauth/start (rewritten to this function).
 * Generates a signed OAuth state, binds it to an httpOnly cookie, and 302-redirects
 * the browser to Podium's authorize endpoint. No secrets are exposed to the client. */
import { env, makeState, setStateCookie, authorizeUrl } from "../lib/podium.mjs";

export const handler = async () => {
  try {
    const e = env();
    const { state, nonce } = makeState(e.stateSecret);
    return {
      statusCode: 302,
      headers: {
        Location: authorizeUrl(e, state),
        "Set-Cookie": setStateCookie(nonce),
        "Cache-Control": "no-store",
      },
    };
  } catch (err) {
    // err.message is a short code (e.g. "missing_env:PODIUM_CLIENT_ID") — never a value.
    return {
      statusCode: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
      body: `Podium OAuth start unavailable (${err.message}).`,
    };
  }
};
