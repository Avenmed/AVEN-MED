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
      <section style={{ paddingBottom: 48 }}>
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
                <AssessmentCTA navigate={navigate} className="link" style={{ alignSelf: "flex-start", marginTop: "auto" }} />
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
                <AssessmentCTA navigate={navigate} style={{ alignSelf: "flex-start", marginTop: "auto" }} />
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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {pages.map((p) => (
                <Reveal key={p.label}>
                  <a
                    href={p.path}
                    onClick={(e) => { e.preventDefault(); navigate(p.path); }}
                    style={{ display: "block", padding: "32px 30px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%", transition: "border-color 240ms ease" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14 }}>
                      <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 400, color: "var(--ivory)" }}>{p.label}</span>
                      <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 18, lineHeight: 1, flexShrink: 0 }}>&rarr;</span>
                    </div>
                    <p className="body-sm" style={{ marginTop: 14, color: "var(--muted)" }}>{p.blurb}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

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
