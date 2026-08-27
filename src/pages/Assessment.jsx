/* AVEN MED — The AVEN Assessment hub (two-tier paid consultation + registry-derived directory) */
import React from 'react';
import { Eyebrow, Logo, Reveal, HeroBg, AssessmentCTA } from '../components.jsx';
import { getHubEntries } from '../content/registry.jsx';

const AssessmentPage = ({ navigate }) => {
  // Directory cards derive from the registry; new Assessment pages appear here
  // automatically, ordered by each page's hub.order.
  const pages = getHubEntries("assessment");

  return (
    <main className="page">
      {/* HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 200, paddingBottom: 100 }}>
        <HeroBg />
        <div className="container" style={{ maxWidth: 880, textAlign: "center" }}>
          <Reveal>
            <Logo size={48} style={{ margin: "0 auto 32px", opacity: 0.9 }} />
            <Eyebrow>· The AVEN Assessment</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(48px, 7vw, 110px)", margin: "32px auto 24px", lineHeight: 1.02, maxWidth: "18ch", fontWeight: 300 }}>
              Care begins with <em>understanding.</em>
            </h1>
            <p className="lede" style={{ maxWidth: "56ch", margin: "0 auto 24px" }}>
              Every plan at AVEN begins with a consultation — whether you're here for aesthetics,
              wellness, or family medicine. Two paths in: both paid, both credited toward your treatment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TWO TIERS */}
      <section style={{ paddingBottom: 48 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

            {/* TIER 1 — Quick Consultation.
                De-boxed: both depths carry the same thin hairline and no fill, so neither
                reads as a budget option or an upsell. They are two lengths of the same
                consultation, not a pricing table. */}
            <Reveal>
              <div style={{ paddingTop: 26, borderTop: "1px solid var(--hairline)", height: "100%", display: "flex", flexDirection: "column" }}>
                <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.28em" }}>Quick</div>
                <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: "20px 0 12px", fontWeight: 300 }}>
                  Quick Consultation with <em>Alaa.</em>
                </h2>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 8, marginBottom: 20 }}>
                  <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--muted)", fontSize: 18 }}>From</span>
                  <span style={{ fontFamily: "var(--serif)", fontSize: 52, fontWeight: 300, color: "var(--gold)", letterSpacing: "-0.01em" }}>$50</span>
                </div>
                <p className="body" style={{ margin: "0 0 24px", maxWidth: "44ch" }}>
                  A focused 5–10 minute consultation with Alaa Mashal, MSN, APRN, FNP-BC. Includes an Aura skin analysis — a fast, expert read on what your skin or your goal is showing, and what your next step could be.
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
                {/* Learn path (detail page) beside the booking CTA — so a browsing
                    visitor can understand the tier before scheduling (Part 6). */}
                <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24 }}>
                  <AssessmentCTA navigate={navigate} className="link" style={{ alignSelf: "flex-start" }} />
                  <a href="/assessment/quick-assessment" onClick={(e) => { e.preventDefault(); navigate("/assessment/quick-assessment"); }} className="link" data-aven-cta="assessment-tier" data-tier="quick">
                    <span>See what's included</span><span className="arrow"></span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* TIER 2 — Comprehensive Assessment */}
            <Reveal delay={140}>
              <div style={{ paddingTop: 26, borderTop: "1px solid var(--hairline)", height: "100%", display: "flex", flexDirection: "column" }}>
                <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.28em" }}>Comprehensive</div>
                <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: "20px 0 12px", fontWeight: 300 }}>
                  The Comprehensive <em>Assessment.</em>
                </h2>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 8, marginBottom: 20 }}>
                  <span style={{ fontFamily: "var(--serif)", fontSize: 52, fontWeight: 300, color: "var(--gold)", letterSpacing: "-0.01em" }}>$200</span>
                  <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--muted)", fontSize: 18 }}>up to 60 minutes</span>
                </div>
                <p className="body" style={{ margin: "0 0 24px", maxWidth: "44ch" }}>
                  An in-depth consultation with Alaa Mashal, MSN, APRN, FNP-BC. A full review of your history and goals — and a written plan you walk out with. The fee is credited toward your treatment.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12, paddingTop: 20, borderTop: "1px solid var(--hairline)" }}>
                  {[
                    "Up to 60 minutes with Alaa",
                    "Full history and goals review",
                    "Aura skin analysis included",
                    "Written plan — yours to keep",
                    "The $200 is credited toward your treatment"
                  ].map((it) => (
                    <li key={it} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, color: "var(--ivory)", fontSize: 14 }}>
                      <span style={{ width: 12, height: 1, background: "var(--gold)", marginTop: 11 }}></span><span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24 }}>
                  {/* Both depths use the same quiet .link treatment and the same order, so
                      neither is visually recommended. The one solid CTA lives at the foot
                      of the page. */}
                  <AssessmentCTA navigate={navigate} className="link" style={{ alignSelf: "flex-start" }} />
                  <a href="/assessment/comprehensive-assessment" onClick={(e) => { e.preventDefault(); navigate("/assessment/comprehensive-assessment"); }} className="link" data-aven-cta="assessment-tier" data-tier="comprehensive">
                    <span>See what's included</span><span className="arrow"></span>
                  </a>
                </div>
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
              Real clinical time, <em>valued.</em>
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

      {/* EXPLORE THE ASSESSMENT — registry-derived directory */}
      {pages.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal>
              <Eyebrow>· Explore the Assessment</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 16px", maxWidth: "20ch", fontWeight: 300 }}>
                Understand the <em>process.</em>
              </h2>
              <p className="body" style={{ marginBottom: 56, maxWidth: "58ch" }}>
                A closer look at how the AVEN Assessment works — and what to expect
                before you ever book.
              </p>
            </Reveal>
            {/* Reuses the approved .tx-grid/.tx-row editorial index (Aesthetics, Home
                Disciplines) instead of bordered cards — no new CSS, and it inherits the
                established focus-visible treatment. */}
            <div className="tx-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {pages.map((p) => (
                <Reveal key={p.label}>
                  <a
                    href={p.path}
                    onClick={(e) => { e.preventDefault(); navigate(p.path); }}
                    className="tx-row"
                  >
                    <span className="tx-head">
                      <span className="tx-name">{p.label}</span>
                      <span aria-hidden="true" className="tx-arrow">&rarr;</span>
                    </span>
                    <span className="tx-desc body-sm">{p.blurb}</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PLANNING FOR A WEDDING — Bridal Journey link */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 680 }}>
          <Reveal>
            <Eyebrow>· Planning for a Wedding</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 46px)", margin: "18px auto 18px", maxWidth: "22ch", fontWeight: 300 }}>
              There's a path made <em>for brides.</em>
            </h2>
            <p className="body" style={{ margin: "0 auto 26px", maxWidth: "50ch" }}>
              The AVEN Bridal Journey coordinates your Assessment and care around your
              wedding date — a personalized plan, begun early.
            </p>
            <a href="/bridal-journey" onClick={(e) => { e.preventDefault(); navigate("/bridal-journey"); }} className="link">
              <span>Explore the Bridal Journey</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center", background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Logo size={36} style={{ margin: "0 auto 24px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", margin: "0 auto 28px", maxWidth: "16ch" }}>
              Begin a <em>consultation.</em>
            </h2>
            <AssessmentCTA navigate={navigate} />
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default AssessmentPage;
