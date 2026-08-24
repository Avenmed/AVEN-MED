/* TEMPORARY — Netlify Blobs initialization self-test. Proves connectLambda(event) wires
 * the Blobs context in the deployed v1 function runtime. Writes/reads/deletes a throwaway
 * key in the podium-oauth store. NO Podium data, tokens, secrets, or PII involved.
 * Removed immediately after verification. */
import { getStore } from "@netlify/blobs";
import { initBlobs } from "../lib/podium.mjs";

export const handler = async (event) => {
  try {
    initBlobs(event);
    const store = getStore("podium-oauth");
    const key = "__selftest";
    await store.set(key, "ok");
    const val = await store.get(key);
    await store.delete(key);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
      body: JSON.stringify({ ok: val === "ok" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
      body: JSON.stringify({ ok: false, error: err.name || String(err.message || err) }),
    };
  }
};
