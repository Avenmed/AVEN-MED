/* AVEN MED — site config
 *
 * BOOKING_ENABLED is the single switch for the pre-launch state.
 *
 *   false  → pre-launch: "Opening Fall 2026" bar shows on the homepage, every
 *            "Book…" CTA reads "Join the Waitlist", the /contact form becomes a
 *            waitlist sign-up that emails us the details (no real appointments),
 *            and the booking-ceremony intro is hidden.
 *
 *   true   → licensed / open: flip this to true on the day we have our
 *            certificate of occupancy. The announcement bar disappears and all
 *            booking CTAs + the /contact form return to their normal behavior.
 *
 * Reverting the pre-launch changes is this one line.
 */
export const BOOKING_ENABLED = false;

/* Working channels used for the pre-launch waitlist (email + text hand-off).
 * These reach the real inbox/phone — nothing is stored or dropped.
 * At launch, wire the waitlist to Podium instead (see AnnouncementBar.jsx). */
export const WAITLIST_EMAIL = "info@avenmedil.com";
export const WAITLIST_PHONE = "+17087346902";
