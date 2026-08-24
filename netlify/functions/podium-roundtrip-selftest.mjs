/* TEMPORARY — encryption → Blob write → Blob read → decrypt round-trip self-test with
 * DUMMY tokens only. Returns safe stage flags + typeof, never token/key/secret values.
 * Removed immediately after verification. */
import { env, initBlobs, __roundtripSelfTest } from "../lib/podium.mjs";

export const handler = async (event) => {
  try {
    const e = env();
    initBlobs(event);
    const stages = await __roundtripSelfTest(e.encKey);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
      body: JSON.stringify(stages),
    };
  } catch (err) {
    // name/code only — never key/token values.
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
      body: JSON.stringify({ ok: false, stage_error: err.name || String(err.message || err) }),
    };
  }
};
