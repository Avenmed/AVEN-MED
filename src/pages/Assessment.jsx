/* AVEN MED — The AVEN Assessment (two-tier paid consultation) */
import React from 'react';
import { Eyebrow, Logo, Reveal, HeroBg } from '../components.jsx';
import { BOOKING_ENABLED } from '../config.js';

const AssessmentPage = ({ navigate }) => {
  return (
    <main className="page">
      {/* HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 200, paddingBottom: 100 }}>
        <HeroBg />
        <div className="container" style={{ maxWidth: 880, textAlign: "center" }}>
          <Reveal>
            <Logo size={48} style={{ margin: "0 auto 32px", opacity: 0.9 }} />
            <Eyebrow>· Inside the Process</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(48px, 7vw, 110px)", margin: "32px auto 24px", lineHeight: 1.02, maxWidth: "18ch", fontWeight: 300 }}>
              Time with <em>Alaa.</em>
            </h1>
            <p className="lede" style={{ maxWidth: "52ch", margin: "0 auto 24px" }}>
              Every plan at AVEN begins with a consultation. Two paths to the practice — both paid, both credited toward your treatment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TWO TIERS */}
      <section style={{ paddingBottom: 100 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

            {/* TIER 1 — Quick Consultation */}
            <Reveal>
              <div style={{ padding: "48px 40px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%", display: "flex", flexDirection: "column" }}>
                <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.28em" }}>Tier 01 · Quick</div>
                <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: "20px 0 12px", fontWeight: 300 }}>
                  Quick Consultation with <em>Alaa.</em>
                </h2>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 8, marginBottom: 20 }}>
                  <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--muted)", fontSize: 18 }}>From</span>
                  <span style={{ fontFamily: "var(--serif)", fontSize: 52, fontWeight: 300, color: "var(--gold)", letterSpacing: "-0.01em" }}>$50</span>
                </div>
                <p className="body" style={{ margin: "0 0 24px", maxWidth: "44ch" }}>
                  A focused 5–10 minute consultation with Alaa Mashal, FNP-BC. Includes an Aura skin analysis — a fast, expert read on what your skin is showing and what your next step could be.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12, paddingTop: 20, borderTop: "1px solid var(--hairline)" }}>
                  {[
                    "5–10 minutes with Alaa",
                    "Aura skin analysis included",
                    "The $50 is credited toward your treatment"
                  ].map((it) => (
                    <li key={it} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, color: "var(--ivory)", fontSize: 14 }}>
                      <span style={{ width: 12, height: 1, background: "var(--gold)", marginTop: 11 }}></span><span>{it}</span>
                    </li>
                  ))}
                </ul>
                <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="link" style={{ alignSelf: "flex-start", marginTop: "auto" }}>
                  <span>{BOOKING_ENABLED ? "Book a Quick Consultation" : "Join the Waitlist"}</span><span className="arrow"></span>
                </a>
              </div>
            </Reveal>

            {/* TIER 2 — AVEN Assessment */}
            <Reveal delay={140}>
              <div style={{ padding: "48px 40px", border: "1px solid var(--gold-soft)", background: "var(--surface)", height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
                <div style={{ position: "absolute", top: 24, right: 24, padding: "6px 14px", border: "1px solid var(--gold)", color: "var(--gold)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase" }}>
                  In-Depth
                </div>
                <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.28em" }}>Tier 02 · AVEN Assessment</div>
                <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: "20px 0 12px", fontWeight: 300 }}>
                  The <em>AVEN</em> Assessment.
                </h2>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 8, marginBottom: 20 }}>
                  <span style={{ fontFamily: "var(--serif)", fontSize: 52, fontWeight: 300, color: "var(--gold)", letterSpacing: "-0.01em" }}>$200</span>
                  <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--muted)", fontSize: 18 }}>up to 60 minutes</span>
                </div>
                <p className="body" style={{ margin: "0 0 24px", maxWidth: "44ch" }}>
                  An in-depth consultation with Alaa Mashal, FNP-BC. A full review of your history and goals — and a written plan you walk out with. The fee is credited toward your treatment.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12, paddingTop: 20, borderTop: "1px solid var(--hairline)" }}>
                  {[
                    "Up to 60 minutes with Alaa",
                    "Full anatomical and goals review",
                    "Aura skin analysis included",
                    "Written plan — yours to keep",
                    "The $200 is credited toward your treatment"
                  ].map((it) => (
                    <li key={it} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, color: "var(--ivory)", fontSize: 14 }}>
                      <span style={{ width: 12, height: 1, background: "var(--gold)", marginTop: 11 }}></span><span>{it}</span>
                    </li>
                  ))}
                </ul>
                <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid" style={{ alignSelf: "flex-start", marginTop: "auto" }}>
                  <span>{BOOKING_ENABLED ? "Book the AVEN Assessment" : "Join the Waitlist"}</span><span className="arrow"></span>
                </a>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* WHY PAID */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start", maxWidth: 1080 }}>
          <Reveal>
            <Eyebrow>· Why a paid consultation</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="display" style={{ fontSize: "clamp(28px, 3vw, 44px)", margin: "0 0 24px", maxWidth: "26ch", fontWeight: 300 }}>
              Time with a top injector, <em>valued.</em>
            </h3>
            <p className="body" style={{ marginBottom: 22 }}>
              The consultation is where the work begins. Listening to goals and writing a plan takes Alaa's full attention — and that time has value. A paid consultation lets the practice slow down, focus, and treat every visit with the same care.
            </p>
            <p className="body" style={{ color: "var(--ivory-soft)" }}>
              Whichever tier you choose, the fee credits directly toward your treatment. No appointment is wasted — every dollar moves with you into your care.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={36} style={{ margin: "0 auto 24px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", margin: "0 auto 28px", maxWidth: "16ch" }}>
              Begin a <em>consultation.</em>
            </h2>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
              <span>{BOOKING_ENABLED ? "Book a Consultation" : "Join the Waitlist"}</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default AssessmentPage;
