/* AVEN MED — Contact */

import React from 'react';
import { DividerMark, Eyebrow, Logo, Ph, Reveal, HeroBg, ASSESSMENT_CTA_LABEL } from '../components.jsx';
import Video from '../Video.jsx';
import { BOOKING_ENABLED, BOOKING_URL } from '../config.js';
import { trackContactLeadSubmit } from '../analytics.js';
import { CLINIC } from '../content/clinic.js';

const ContactPage = ({ navigate }) => {
  const [form, setForm] = React.useState({
    // Must match the first <option> exactly — the select is controlled, so a value
    // with no matching option leaves state and what the visitor sees disagreeing,
    // and the exact visible label is what gets sent to Podium.
    name: "", email: "", phone: "", interest: "Aesthetic Medicine Assessment", message: ""
  });
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [submitError, setSubmitError] = React.useState("");
  const [redirecting, setRedirecting] = React.useState(false);
  // Read synchronously by `finally`, which runs even on the early return below.
  const redirectingRef = React.useRef(false);
  // Ref guard as well as state: a second click can land before React re-renders and
  // disables the button, and a duplicate lead is expensive when Podium dedupes on
  // phone. Same pattern the Bridal form already uses.
  const sendingRef = React.useRef(false);
  // Pre-launch: no booking ceremony (there's nothing to book yet).
  const [showCeremony, setShowCeremony] = React.useState(() => {
    if (!BOOKING_ENABLED) return false;
    try { return !localStorage.getItem('aven-booking-seen'); } catch { return false; }
  });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  /* The form posts to AVEN's own Netlify function, which forwards the lead to Podium
   * server-side. The browser never sees or calls the Podium webhook. The visitor is
   * only ever shown success after that function confirms Podium returned a 2xx — we
   * never claim to have received something we haven't.
   *
   * This replaced the pre-opening mailto waitlist, which is fully retired: exactly one
   * delivery path fires, never both. */
  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending || sendingRef.current) return; // no double-submit
    sendingRef.current = true;
    setSubmitError("");
    setSending(true);
    try {
      const res = await fetch("/api/podium/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          website_lead_source: "Website — Contact",
          name: form.name,
          email: form.email,
          phone: form.phone,
          interest: form.interest, // exact visible option label, never a slug
          message: form.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error("submit_failed");

      /* ORDER MATTERS. The lead is captured first and confirmed by Podium, THEN the
       * analytics event, THEN — only when booking is enabled — the hand-off to
       * scheduling. A visitor who opens the calendar, looks at dates and leaves has
       * still reached us. We never redirect before delivery is confirmed. */
      if (BOOKING_ENABLED) {
        redirectingRef.current = true;
        setRedirecting(true);
        // Fires the event and navigates once it has actually been sent, with a short
        // timeout so the patient is never blocked by analytics.
        trackContactLeadSubmit(() => { window.location.href = BOOKING_URL; });
        return; // stay in the sending/redirecting state until the browser leaves
      }
      trackContactLeadSubmit(); // GA4 — only after confirmed delivery; zero PII
      setSent(true);            // values are never cleared until success
    } catch {
      // Never surface backend/Podium detail to the visitor. Entered values are kept
      // so they can simply press the button again.
      setSubmitError("Something went wrong sending your details. Please try again in a moment, or reach us directly below.");
    } finally {
      // `finally` runs even on the early return above, so the hand-off case must stay
      // locked: the page is navigating away and re-enabling the button would invite a
      // second lead for the same visitor.
      if (!redirectingRef.current) {
        sendingRef.current = false;
        setSending(false);
      }
    }
  };

  React.useEffect(() => {
    if (!showCeremony) return;
    const t = setTimeout(() => {
      setShowCeremony(false);
      try { localStorage.setItem('aven-booking-seen', '1'); } catch {}
    }, 7400);
    return () => clearTimeout(t);
  }, [showCeremony]);

  return (
    <main className="page">
      {showCeremony && (
        <div className="booking-ceremony" onClick={() => setShowCeremony(false)}>
          <p className="line">An Assessment begins<br />with stillness.</p>
          <img className="ceremony-logo" src="/assets/logo.png" alt="" aria-hidden="true" />
        </div>
      )}
      {/* HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 80 }}>
        <HeroBg />
        <div className="container">
          <Reveal style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <Eyebrow>Contact · By Appointment</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 132px)", margin: "24px 0 0", lineHeight: 0.96, maxWidth: "12ch" }}>
                <em>Let's</em><br />begin.
              </h1>
            </div>
            <p className="lede">
              Tell us what brings you to AVEN. We'll take the time to understand
              what you're looking for, and guide you toward the right next step.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CLINIC PHOTO — placeholder */}
      <section style={{ paddingBottom: 60 }}>
        <div className="container">
          <Reveal>
            <Ph label="The clinic · interior · 16:9" meta="warm tungsten · plaster · placeholder" aspect="16/9">
              <Video src="/assets/contact.mp4" />
            </Ph>
          </Reveal>
        </div>
      </section>

      {/* FORM + CLINIC */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 96, alignItems: "start" }}>
          <Reveal>
            {!sent ? (
              <form onSubmit={onSubmit}
                style={{ display: "grid", gap: 36 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>
                  <div className="field">
                    <label htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      value={form.name}
                      onChange={set("name")}
                      required
                      placeholder="Maren Ellsworth"
                      type="text"
                      autoComplete="name"
                      autoCapitalize="words"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      placeholder="maren@clinic.co"
                      autoComplete="email"
                      autoCapitalize="off"
                      inputMode="email"
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder={CLINIC.phoneDisplay}
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </div>

                <div className="field">
                  <label htmlFor="contact-interest">I am interested in</label>
                  <select id="contact-interest" value={form.interest} onChange={set("interest")}>
                    <option>Aesthetic Medicine Assessment</option>
                    <option>Wellness Assessment</option>
                    <option>Skin Assessment</option>
                    <option>Family Medicine</option>
                    <option>AVEN Maintenance membership</option>
                    <option>AVEN Signature membership</option>
                    <option>Press · Other</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="contact-message">A few words about what you're hoping for</label>
                  <textarea id="contact-message" value={form.message} onChange={set("message")} placeholder="Optional. Anything you'd like the clinic to know in advance." />
                </div>

                <div style={{ display: "flex", gap: 32, alignItems: "center", marginTop: 16, flexWrap: "wrap" }}>
                  <button type="submit" className="btn solid" disabled={sending}
                    aria-busy={sending ? "true" : undefined}
                    style={{ height: 56, opacity: sending ? 0.6 : 1 }}>
                    <span>{redirecting ? "Taking you to scheduling…" : sending ? "Sending…" : ASSESSMENT_CTA_LABEL}</span><span className="arrow"></span>
                  </button>
                  <div className="body-sm" style={{ color: "var(--muted)" }}>
                    {BOOKING_ENABLED
                      ? "We respond personally — not from a queue."
                      : "Share your details and our team will be in touch."}
                  </div>
                </div>
                {submitError && (
                  <p className="body-sm" role="alert" style={{ marginTop: 20, marginBottom: 0, color: "var(--gold)", maxWidth: "48ch" }}>
                    {submitError}
                  </p>
                )}
              </form>
            ) : (
              <div style={{ padding: "80px 0", textAlign: "left" }}>
                <Logo size={48} />
                <div className="label" style={{ marginTop: 32, color: "var(--gold)" }}>Received</div>
                <h2 className="display" style={{ fontSize: 56, margin: "20px 0 24px", fontWeight: 300 }}>
                  Thank you, {form.name.split(" ")[0] || "friend"}.
                </h2>
                <p className="body">
                  {BOOKING_ENABLED
                    ? "We've received your Assessment request. Our team will be in touch."
                    : `We have your details, and our team will reach out to coordinate your AVEN Assessment. Prefer to reach us directly? Email ${CLINIC.email} or text ${CLINIC.phoneDisplay}.`}
                </p>
                <div style={{ marginTop: 40, display: "flex", gap: 22 }}>
                  <button className="link" onClick={() => setSent(false)}>
                    <span>Send another</span><span className="arrow"></span>
                  </button>
                  <button className="link" onClick={() => navigate("/assessment")}>
                    <span>About The Assessment</span><span className="arrow"></span>
                  </button>
                </div>
              </div>
            )}
          </Reveal>

          <Reveal delay={140}>
            <Ph label="The clinic · entry · 16:9" meta="warm tungsten · brass detail · placeholder" aspect="16/9">
              <Video src="/assets/contact-entry.mp4" />
            </Ph>
            <div style={{ marginTop: 40, display: "grid", gap: 28 }}>
              <div>
                <div className="label" style={{ color: "var(--gold)" }}>Visit</div>
                <div className="display" style={{ fontSize: 22, marginTop: 8, lineHeight: 1.4, fontWeight: 300 }}>
                  {CLINIC.streetAddress}<br />{CLINIC.addressLocality}, {CLINIC.addressRegion} {CLINIC.postalCode}
                </div>
              </div>
              <div>
                <div className="label" style={{ color: "var(--gold)" }}>Hours</div>
                <div className="display" style={{ fontSize: 17, marginTop: 8, lineHeight: 1.7, fontWeight: 300 }}>
                  Monday · 9 AM – 3 PM<br />
                  Tuesday · 9 AM – 3 PM<br />
                  Wednesday · 9 AM – 6 PM<br />
                  Thursday · 9 AM – 3 PM<br />
                  Friday · 9 AM – 3 PM<br />
                  Saturday · Every other · 9 AM – 1 PM<br />
                  <span style={{ color: "var(--muted)" }}>Closed Sunday</span>
                </div>
              </div>
              <div>
                <div className="label" style={{ color: "var(--gold)" }}>Direct</div>
                <div className="display" style={{ fontSize: 20, marginTop: 8, lineHeight: 1.6, fontWeight: 300 }}>
                  <a href={`mailto:${CLINIC.email}`} style={{ color: "var(--ivory)" }}>{CLINIC.email}</a><br />
                  <a href={`tel:${CLINIC.phoneE164}`} style={{ color: "var(--ivory)" }}>{CLINIC.phoneDisplay}</a>
                </div>
              </div>
              <div>
                <div className="label" style={{ color: "var(--gold)" }}>Follow</div>
                <div style={{ marginTop: 8, display: "flex", gap: 18, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase" }}>
                  <a href="https://instagram.com/avenmedil" target="_blank" rel="noreferrer" style={{ color: "var(--ivory)", borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2 }}>Instagram</a>
                  <a href="https://facebook.com/avenmedil" target="_blank" rel="noreferrer" style={{ color: "var(--ivory)", borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2 }}>Facebook</a>
                  <a href="https://tiktok.com/@avenmedil" target="_blank" rel="noreferrer" style={{ color: "var(--ivory)", borderBottom: "1px solid var(--hairline-strong)", paddingBottom: 2 }}>TikTok</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAP — Google Maps embed for 14470 LaGrange Rd, Ste 101, Orland Park, IL 60462 */}
      <section style={{ marginTop: 40 }}>
        <div className="container">
          <Reveal>
            <div style={{ aspectRatio: "21/9", border: "1px solid var(--hairline)", overflow: "hidden", background: "var(--surface)" }}>
              <iframe
                title="AVEN MED — 14470 LaGrange Rd, Ste 101, Orland Park, IL 60462"
                src="https://www.google.com/maps?q=14470+LaGrange+Rd+Ste+101+Orland+Park+IL+60462&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <DividerMark />

      {/* CLOSING */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={42} style={{ margin: "0 auto 24px" }} />
            <div className="display italic" style={{ fontSize: "clamp(24px, 3vw, 38px)", maxWidth: "30ch", margin: "0 auto", color: "var(--ivory)" }}>
              "Thank you for finding us."
            </div>
            <div className="label" style={{ marginTop: 32, color: "var(--muted)" }}>— AVEN MED</div>
          </Reveal>
        </div>
      </section>
      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default ContactPage;
