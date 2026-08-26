/* AVEN MED — Contact */

import React from 'react';
import { DividerMark, Eyebrow, Logo, Ph, Reveal, HeroBg, ASSESSMENT_CTA_LABEL } from '../components.jsx';
import Video from '../Video.jsx';
import { BOOKING_ENABLED, BOOKING_URL, WAITLIST_EMAIL } from '../config.js';
import { trackContactHandoff } from '../analytics.js';
import { CLINIC } from '../content/clinic.js';

const ContactPage = ({ navigate }) => {
  const [form, setForm] = React.useState({
    // Must match the first <option> exactly — the select is controlled, so a value
    // with no matching option leaves state and what the visitor sees disagreeing,
    // and the pre-opening mailto reports the state value.
    name: "", email: "", phone: "", interest: "Aesthetic Medicine Assessment", message: ""
  });
  const [sent, setSent] = React.useState(false);
  // Pre-launch: no booking ceremony (there's nothing to book yet).
  const [showCeremony, setShowCeremony] = React.useState(() => {
    if (!BOOKING_ENABLED) return false;
    try { return !localStorage.getItem('aven-booking-seen'); } catch { return false; }
  });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Pre-opening (BOOKING_ENABLED false), the form is a waitlist sign-up: hand the
  // details to our real inbox through the visitor's own mail app — nothing is stored
  // or silently dropped, and nobody is sent to book an appointment at a practice that
  // has not opened yet. Restores the original pre-launch flow, which commit 14777c4
  // removed while the switch was still false. The success state tells the visitor to
  // hit send, and offers the direct email/text fallbacks, so we never claim to have
  // received something we haven't.
  //
  // Once BOOKING_ENABLED flips to true this reverts to the normal Podium submit below.
  const onSubmit = (e) => {
    e.preventDefault();
    if (!BOOKING_ENABLED) {
      const subject = `AVEN waitlist — ${form.name || "new sign-up"}`;
      const body =
        `Please add me to the AVEN MED list.\n\n` +
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        `Interested in: ${form.interest}\n\n` +
        `${form.message}`;
      window.location.href =
        `mailto:${WAITLIST_EMAIL}?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
      setSent(true);
      return;
    }
    // Build the Podium handoff URL — prefill (name/email/phone) preserved for the
    // patient. It goes ONLY to Podium via a full-page off-site navigation, which
    // never produces a GA4 page_view, so those values can never reach GA4.
    const params = new URLSearchParams();
    if (form.name) params.set("name", form.name);
    if (form.email) params.set("email", form.email);
    if (form.phone) params.set("phone", form.phone);
    const qs = params.toString();
    const dest = qs ? `${BOOKING_URL}?${qs}` : BOOKING_URL;
    // Fire the PII-free handoff event, then redirect once it has actually been sent
    // (with a fallback so the patient is never blocked).
    trackContactHandoff(() => { window.location.href = dest; });
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
              <Video src="assets/contact.mp4" />
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
                    <option>AVEN Essential membership</option>
                    <option>AVEN Elevate (founding cohort)</option>
                    <option>Press · Other</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="contact-message">A few words about what you're hoping for</label>
                  <textarea id="contact-message" value={form.message} onChange={set("message")} placeholder="Optional. Anything you'd like the clinic to know in advance." />
                </div>

                <div style={{ display: "flex", gap: 32, alignItems: "center", marginTop: 16, flexWrap: "wrap" }}>
                  <button type="submit" className="btn solid"
                    style={{ height: 56 }}>
                    <span>{ASSESSMENT_CTA_LABEL}</span><span className="arrow"></span>
                  </button>
                  <div className="body-sm" style={{ color: "var(--muted)" }}>
                    {BOOKING_ENABLED
                      ? "We respond personally — not from a queue."
                      : "AVEN MED opens September 15. Share your details and our team will be in touch."}
                  </div>
                </div>
              </form>
            ) : (
              <div style={{ padding: "80px 0", textAlign: "left" }}>
                <Logo size={48} />
                <div className="label" style={{ marginTop: 32, color: "var(--gold)" }}>{BOOKING_ENABLED ? "Received" : "Almost there"}</div>
                <h2 className="display" style={{ fontSize: 56, margin: "20px 0 24px", fontWeight: 300 }}>
                  Thank you, {form.name.split(" ")[0] || "friend"}.
                </h2>
                <p className="body">
                  {BOOKING_ENABLED
                    ? "We've received your Assessment request. Our team will be in touch."
                    : `Your email app should have opened with your details — just hit send and you're on the list. Prefer to reach us directly? Email ${CLINIC.email} or text ${CLINIC.phoneDisplay}.`}
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
              <Video src="assets/contact-entry.mp4" />
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
