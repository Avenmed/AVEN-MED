/* TEMPORARY, ONE-SHOT synthetic test — does an API conversation note appear in the
 * contact-profile Notes tab? Uses the existing encrypted token (write_messages just
 * authorized). Exactly ONE import (no send) to establish the conversation, then exactly
 * ONE labeled note. Run-once guarded via Blobs so re-hitting the URL never creates more.
 * Never sends SMS/email. Never logs tokens/PII/note content. Removed after inspection. */
import { env, initBlobs, getAccessToken, getLocationUid } from "../lib/podium.mjs";
import { getStore } from "@netlify/blobs";

const API = "https://api.podium.com/v4";
const TEST_EMAIL = "aven-bridal-status-test@example.com";
const TEST_NAME = "AVEN Bridal Status Test";
const RESULT_KEY = "note-test-result"; // run-once flag + stored result
const NOTE_BODY = [
  "AVEN MED — Bridal Journey TEST",
  "",
  "Wedding Date: October 10, 2027",
  "Desired Consultation Timing: 9–12 months before wedding",
  "Preferred Appointment Timing: Weekday mornings",
  "Referral Source: Instagram",
  "",
  "Submitted through: AVEN MED Bridal Journey (synthetic test)",
].join("\n");

const json = (s, o) => ({ statusCode: s, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(o) });

export const handler = async (event) => {
  let e;
  try { e = env(); } catch { return json(503, { ok: false, error: "not_configured" }); }
  try {
    initBlobs(event);
    const store = getStore("podium-oauth");

    // Run-once guard: if the test already ran, return the stored result — no new writes.
    const prior = await store.get(RESULT_KEY);
    if (prior) return json(200, { ok: true, alreadyRan: true, ...JSON.parse(prior) });

    const token = await getAccessToken(e); // now carries write_messages / read_messages
    const H = { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept: "application/json" };
    const loc = await getLocationUid(token);

    // 1) Import ONE non-sent message to establish/resolve the conversation for this contact.
    const importRes = await fetch(`${API}/import/messages`, {
      method: "POST", headers: H,
      body: JSON.stringify({
        body: "AVEN MED — Bridal Journey (website): synthetic test to establish conversation.",
        channel: { type: "email", identifier: TEST_EMAIL },
        contactName: TEST_NAME,
        direction: "inbound",
        locationUid: loc,
        publishedAt: new Date().toISOString(),
      }),
    });
    if (!importRes.ok) return json(200, { ok: false, stage: "import", status: importRes.status, detail: (await importRes.text().catch(() => "")).slice(0, 300) });
    const importBody = await importRes.json().catch(() => null);
    const msg = (importBody && importBody.data) ? importBody.data : importBody;
    const conversationUid = msg && msg.conversation && msg.conversation.uid;
    if (!conversationUid) return json(200, { ok: false, stage: "conversation_uid_missing", importKeys: msg ? Object.keys(msg) : null });

    // 2) Create ONE conversation note (confirmed schema: body + senderName; scope write_messages).
    const noteRes = await fetch(`${API}/conversations/${encodeURIComponent(conversationUid)}/notes`, {
      method: "POST", headers: H,
      body: JSON.stringify({ body: NOTE_BODY, senderName: "AVEN MED Website" }),
    });
    if (!noteRes.ok) return json(200, { ok: false, stage: "note", status: noteRes.status, conversationUid, detail: (await noteRes.text().catch(() => "")).slice(0, 300) });
    const noteBody = await noteRes.json().catch(() => null);
    const note = (noteBody && noteBody.data) ? noteBody.data : noteBody;

    const result = {
      testContact: { name: TEST_NAME, email: TEST_EMAIL },
      conversationUid,
      noteUid: (note && note.uid) || null,
      noteConversationUid: (note && note.conversation && note.conversation.uid) || null,
      locationUid: (note && note.location && note.location.uid) || null,
      resourceUrl: (noteBody && noteBody.metadata && noteBody.metadata.url) || null,
      noteHttpStatus: noteRes.status,
    };
    await store.set(RESULT_KEY, JSON.stringify(result));
    return json(200, { ok: true, ...result });
  } catch (err) {
    const m = (err && err.message) || "";
    if (m === "not_connected") return json(503, { ok: false, error: "not_connected" });
    return json(502, { ok: false, error: "note_test_failed", message: m.slice(0, 120) });
  }
};
