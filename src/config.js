/* AVEN MED — site config
 *
 * BOOKING_ENABLED is the single canonical control for whether a captured lead
 * continues on to Podium scheduling. It is NOT a launch flag and NOT a lead-capture
 * switch:
 *
 *   true  → Contact posts the lead to /api/podium/lead and, once Podium has
 *           confirmed delivery, hands the visitor on to BOOKING_URL to pick a time.
 *
 *   false → Contact posts the same lead the same way and shows an in-page success
 *           state instead of redirecting. The lead is still captured.
 *
 * Lead capture is unconditional either way — the retired mailto waitlist is gone and
 * must not come back. See netlify/functions/podium-lead.mjs.
 *
 * Actual appointment availability is owned by the Podium scheduling calendar, not by
 * this site. Do not add date logic here.
 */
export const BOOKING_ENABLED = true;

/* Podium online booking — PUBLIC, browser-visible by design, and not to be confused
 * with the secret PODIUM_WEBHOOK_URL, which is server-side only. A visitor reaches
 * this only after their lead has already been captured. */
export const BOOKING_URL = "https://booking.podium.com/medspa/019e704b-019f-760d-a64e-532c1666178c";
