/* AVEN MED — pre-launch announcement bar (homepage only)
 *
 * A slim, editorial "Opening Fall 2026" strip pinned above the nav. It does NOT
 * hide the site — the full homepage stays visible and browsable underneath.
 *
 * Capture is intentionally backend-free: the two actions hand off to the
 * visitor's own mail / SMS app pre-addressed to our real, working channels, so
 * nothing is ever stored or silently dropped. When Podium is re-enabled at
 * launch, point these at Podium instead (and flip BOOKING_ENABLED to true,
 * which unmounts this bar entirely).
 */
import React from 'react';
import { WAITLIST_EMAIL, WAITLIST_PHONE } from './config.js';

const EMAIL_SUBJECT = "Add me to the AVEN MED list";
const EMAIL_BODY =
  "Hi AVEN MED — I'd love to know when you open. Please add me to your list.";
const SMS_BODY = "Add me to the AVEN MED list — I'd love to know when you open.";

const AnnouncementBar = () => {
  const mailto =
    `mailto:${WAITLIST_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}` +
    `&body=${encodeURIComponent(EMAIL_BODY)}`;
  const sms = `sms:${WAITLIST_PHONE}?&body=${encodeURIComponent(SMS_BODY)}`;

  // Push the fixed header (and hero padding) down by the bar's height while it's
  // mounted; clear it on unmount so other routes are unaffected.
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--announce-h", "40px");
    return () => root.style.removeProperty("--announce-h");
  }, []);

  return (
    <div className="announce" role="region" aria-label="Opening announcement">
      <p className="announce-msg">
        <span className="announce-mark">Opening Fall 2026</span>
        <span className="announce-dot" aria-hidden="true">·</span>
        <span className="announce-tag">Be the first to know</span>
      </p>
      <p className="announce-actions">
        <a href={mailto} className="announce-cta">Email us</a>
        <a href={sms} className="announce-cta">Text us</a>
      </p>
    </div>
  );
};

export default AnnouncementBar;
