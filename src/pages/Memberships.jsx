/* AVEN MED — Memberships */

import React from 'react';
import { DividerMark, Eyebrow, Logo, Reveal } from '../components.jsx';

const MembershipsPage = ({ navigate }) => {
  return (
    <main className="page">
      {/* HERO */}
      <section style={{ paddingTop: 180, paddingBottom: 80 }}>
        <div className="container">
          <Reveal style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <Eyebrow>Memberships</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 132px)", margin: "24px 0 0", lineHeight: 0.96, maxWidth: "12ch" }}>
                Care that<br /><em>compounds</em><br />quietly.
              </h1>
            </div>
            <p className="lede">
              An AVEN membership is not a discount. It is a treatment-banking
              and continuity system — a way of investing in the long, slow
              practice of looking like yourself.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TWO PLANS */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* Essential */}
            <Reveal className="plan">
              <div className="tier">AVEN Essential</div>
              <h3 style={{ marginBottom: 10 }}>Essential</h3>
              <p className="body-sm" style={{ margin: 0, maxWidth: "44ch" }}>
                The foundational practice. A monthly investment that banks
                toward your aesthetics pathway and unlocks priority access to
                the clinic.
              </p>
              <div className="price">
                <span className="amt" style={{ fontSize: "0.5em", fontStyle: "italic", letterSpacing: "0.02em" }}>Monthly contribution</span>
              </div>
              <div className="label" style={{ color: "var(--muted)", marginTop: -12 }}>
                Determined in consultation
              </div>
              <ul style={{ marginTop: 12 }}>
                {[
                  "Monthly contribution banked toward any treatment, no expiry",
                  "Personalized 12-month pathway, reviewed quarterly",
                  "Priority booking · 48-hour advance access",
                  "Annual Aura skin reading included",
                  "Pause membership at any time — banked credit retained"
                ].map((s) => (
                  <li key={s}><span>{s}</span></li>
                ))}
              </ul>
              <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="link" style={{ alignSelf: "flex-start", marginTop: 8 }}>
                <span>Inquire about Essential</span><span className="arrow"></span>
              </a>
            </Reveal>

            {/* Elevate */}
            <Reveal delay={140} className="plan feat">
              <div style={{ position: "absolute", top: 24, right: 24, padding: "6px 14px", border: "1px solid var(--gold)", color: "var(--gold)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase" }}>
                Founding · Limited
              </div>
              <div className="tier">AVEN Elevate</div>
              <h3 style={{ marginBottom: 10 }}>Elevate</h3>
              <p className="body-sm" style={{ margin: 0, maxWidth: "44ch" }}>
                Concierge access to the clinic and its full ecosystem. For
                patients who want priority, privacy, and first access to every
                technology AVEN introduces.
              </p>
              <div className="price">
                <span className="amt" style={{ fontSize: "0.5em", fontStyle: "italic", letterSpacing: "0.02em" }}>By application</span>
              </div>
              <div className="label" style={{ color: "var(--muted)", marginTop: -12 }}>
                Contribution structured to your plan
              </div>
              <div className="label" style={{ color: "var(--gold)", marginTop: 20, letterSpacing: "0.28em" }}>
                Everything in Essential, plus —
              </div>
              <ul style={{ marginTop: 12 }}>
                {[
                  "Monthly contribution banked toward any aesthetics or wellness service",
                  "VIP Saturday clinic hours by appointment",
                  "Two complimentary Aura consultations annually",
                  "Early access to new treatments and clinic technology",
                  "Direct line to your clinical lead, Alaa Mashal, FNP-BC",
                  "Priority overflow into Wellness concierge (2027)",
                  "Member-only seasonal previews"
                ].map((s) => (
                  <li key={s}><span>{s}</span></li>
                ))}
              </ul>
              <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid" style={{ alignSelf: "flex-start" }}>
                <span>Apply for Elevate</span><span className="arrow"></span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>How Membership Works</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 0", maxWidth: "20ch" }}>
              A quiet banking system <em>for</em> the face.
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 80 }}>
            {[
              { n: "01", k: "Bank Monthly", b: "Your membership fee accrues toward any aesthetic or wellness service. Nothing expires." },
              { n: "02", k: "Plan Quarterly", b: "We review your pathway with you four times a year — adjusting for season, life, and progress." },
              { n: "03", k: "Treat Calmly", b: "Visit when your pathway calls for it, not when a promotion does. There is no pressure to spend down." },
              { n: "04", k: "Stay, or Pause", b: "Memberships pause without penalty. Your banked balance remains yours, indefinitely." }
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div style={{ padding: "36px 28px", border: "1px solid var(--hairline)", height: "100%", background: "var(--bg)" }}>
                  <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.2em" }}>{s.n}</div>
                  <h4 className="display" style={{ fontSize: 28, margin: "22px 0 14px", fontWeight: 300 }}>{s.k}</h4>
                  <p className="body-sm" style={{ margin: 0 }}>{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>Compare</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 60px", maxWidth: "18ch" }}>
              A side-by-side, <em>quietly.</em>
            </h2>
          </Reveal>

          <div style={{ border: "1px solid var(--hairline)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", padding: "20px 32px", borderBottom: "1px solid var(--hairline)" }}>
              <div className="label" style={{ color: "var(--muted)" }}>Benefit</div>
              <div className="label" style={{ color: "var(--ivory-soft)" }}>Essential</div>
              <div className="label" style={{ color: "var(--gold)" }}>Elevate</div>
            </div>
            {[
              ["Monthly contribution", "Determined in consultation", "By application"],
              ["Aura skin reading", "Annual", "Twice annually"],
              ["Pathway review", "Quarterly", "Quarterly + on-demand"],
              ["Priority booking", "48 hours", "Concierge line"],
              ["Saturday clinic access", "—", "Included"],
              ["Early access · new technology", "—", "First access"],
              ["Member-only seasonal previews", "—", "Invitation"],
              ["Concierge Wellness (2027)", "Waitlist", "Priority"]
            ].map(([k, e, el], i) => (
              <div key={k}
                style={{
                  display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr",
                  padding: "22px 32px", borderBottom: i === 6 ? "none" : "1px solid var(--hairline)",
                  alignItems: "center", fontSize: 14
                }}>
                <div style={{ color: "var(--ivory)" }}>{k}</div>
                <div style={{ color: "var(--ivory-soft)" }}>{e}</div>
                <div style={{ color: el === "—" ? "var(--muted)" : "var(--gold)", fontFamily: "var(--serif)", fontStyle: el === "—" ? "normal" : "italic", fontSize: 16 }}>{el}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PSYCHOLOGY */}
      <section className="section" style={{ background: "var(--bg-1)", textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={42} style={{ margin: "0 auto 28px" }} />
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 72px)", margin: "0 auto 36px", maxWidth: "20ch" }}>
              An investment in <em>yourself</em> —<br />not a discount on units.
            </h2>
            <p className="body" style={{ margin: "0 auto", maxWidth: "60ch" }}>
              A face does not change on a coupon cycle. It changes over years,
              with the steady, quiet attention of a single practitioner. The
              membership exists so that the practice can.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 56px)", margin: "20px 0 60px" }}>
              Common <em>quiet</em> ones.
            </h2>
          </Reveal>
          {[
            ["What does my monthly contribution actually pay for?", "Your full monthly contribution is banked toward any treatment or wellness service at AVEN — nothing is held as an administrative fee. The benefits above (priority booking, Aura readings, seasonal previews) are included on top."],
            ["What happens if I pause?", "Membership can be paused for up to twelve months without penalty. Your banked credit remains in your file and continues to be available for any service."],
            ["Can I gift membership?", "Yes. Memberships can be gifted in three-, six-, or twelve-month increments and include a complimentary Aura reading for the recipient."],
            ["Is there a contract or commitment?", "There is no contract. We ask for a soft three-month minimum so that we can begin a meaningful pathway together — beyond that, you are free to continue, pause, or close at any time."],
            ["Will Elevate continue after the founding cohort closes?", "The Elevate tier will remain, but pricing and seat count will adjust once the founding cohort fills. Founding members are price-locked for the life of their membership."]
          ].map(([q, a], i) => (
            <Reveal key={q} delay={i * 60}>
              <details style={{
                borderTop: "1px solid var(--hairline)", padding: "28px 0", cursor: "pointer"
              }}>
                <summary style={{
                  listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center",
                  fontFamily: "var(--serif)", fontSize: 24, fontWeight: 300, letterSpacing: "-0.005em"
                }}>
                  <span>{q}</span>
                  <span style={{ color: "var(--gold)", fontSize: 20 }}>+</span>
                </summary>
                <p className="body" style={{ marginTop: 18 }}>{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <DividerMark />

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 80px)", margin: "0 auto 28px", maxWidth: "16ch" }}>
              Begin a <em>quiet</em><br />membership.
            </h2>
            <p className="body" style={{ margin: "0 auto 44px" }}>
              The Elevate founding cohort is limited to 80 patients.
              Twenty-three seats remain.
            </p>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
              <span>Apply for Membership</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default MembershipsPage;
