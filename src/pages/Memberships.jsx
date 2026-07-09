/* AVEN MED — Memberships */

import React from 'react';
import { DividerMark, Eyebrow, Logo, Reveal, HeroBg } from '../components.jsx';

const MembershipsPage = ({ navigate }) => {
  return (
    <main className="page">
      {/* HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 80 }}>
        <HeroBg />
        <div className="container">
          <Reveal style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <Eyebrow>Memberships</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 132px)", margin: "24px 0 0", lineHeight: 0.96, maxWidth: "12ch" }}>
                Care that<br /><em>compounds</em><br />over time.
              </h1>
            </div>
            <p className="lede">
              An AVEN membership is a way of investing in your care steadily —
              banking toward treatments and unlocking ongoing access to the
              practice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TWO PLANS */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

            {/* MAINTENANCE — $100/month */}
            <Reveal className="plan">
              <div className="tier">AVEN Maintenance</div>
              <h3 style={{ marginBottom: 10 }}>Maintenance</h3>
              <p className="body-sm" style={{ margin: 0, maxWidth: "44ch" }}>
                The foundational membership. A monthly contribution that
                banks toward treatments and keeps your pathway moving.
              </p>
              <div className="price">
                <span className="amt">$100</span>
                <span className="per">/ month</span>
              </div>
              <ul style={{ marginTop: 12 }}>
                {[
                  "$100 banked monthly toward treatments",
                  "Skin assessment — we review your pathway 1–2x a year",
                  "Saturday clinic access",
                  "Priority booking · 48-hour advance access",
                  "Banked credit retained if you pause"
                ].map((s) => (
                  <li key={s}><span>{s}</span></li>
                ))}
              </ul>
              <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="link" style={{ alignSelf: "flex-start", marginTop: 8 }}>
                <span>Inquire about Maintenance</span><span className="arrow"></span>
              </a>
            </Reveal>

            {/* SIGNATURE — $200/month */}
            <Reveal delay={140} className="plan feat">
              <div className="tier">AVEN Signature</div>
              <h3 style={{ marginBottom: 10 }}>Signature</h3>
              <p className="body-sm" style={{ margin: 0, maxWidth: "44ch" }}>
                The deeper practice. A larger monthly contribution that
                banks toward treatments, with expanded access.
              </p>
              <div className="price">
                <span className="amt">$200</span>
                <span className="per">/ month</span>
              </div>
              <div className="label" style={{ color: "var(--gold)", marginTop: 20, letterSpacing: "0.28em" }}>
                Everything in Maintenance, plus —
              </div>
              <ul style={{ marginTop: 12 }}>
                {[
                  "$200 banked monthly toward treatments",
                  {
                    primary: "One annual AVEN Assessment (up to 60 min), included with your Signature membership.",
                    descriptor: "A full review at the end of your pathway comparing your baseline to your progress and planning your next chapter."
                  },
                  "Saturday clinic access",
                  "Direct line to your clinical lead, Alaa Mashal, FNP-BC",
                  "Early access to new treatments and clinic technology"
                ].map((s, i) => (
                  typeof s === "string" ? (
                    <li key={i}><span>{s}</span></li>
                  ) : (
                    <li key={i}>
                      <span>{s.primary}</span>
                      <div style={{ gridColumn: 2, fontSize: 12, lineHeight: 1.5, color: "var(--muted)", marginTop: 4, fontWeight: 300, fontStyle: "italic" }}>
                        {s.descriptor}
                      </div>
                    </li>
                  )
                ))}
              </ul>
              <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid" style={{ alignSelf: "flex-start" }}>
                <span>Inquire about Signature</span><span className="arrow"></span>
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
              A simple banking <em>system</em> for the face.
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 48 }}>
            {[
              { n: "01", k: "Bank Monthly", b: "Your membership contribution accrues toward treatments. Nothing expires while active." },
              { n: "02", k: "Plan Quarterly", b: "We review your pathway with you four times a year — adjusting for season, life, and progress." },
              { n: "03", k: "Treat When Ready", b: "Visit when your pathway calls for it. There is no pressure to spend down." },
              { n: "04", k: "Stay, or Pause", b: "Memberships pause without penalty. Banked credit stays usable for twelve months." }
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
              Side by side.
            </h2>
          </Reveal>

          <div style={{ border: "1px solid var(--hairline)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", padding: "20px 32px", borderBottom: "1px solid var(--hairline)" }}>
              <div className="label" style={{ color: "var(--muted)" }}>Benefit</div>
              <div className="label" style={{ color: "var(--ivory-soft)" }}>Maintenance</div>
              <div className="label" style={{ color: "var(--gold)" }}>Signature</div>
            </div>
            {[
              ["Monthly contribution", "$100", "$200"],
              ["Banked toward treatments", "$100 / month", "$200 / month"],
              ["Skin assessment review", "1–2x / year", "1–2x / year"],
              ["Annual AVEN Assessment (up to 60 min)", "—", "Included"],
              ["Saturday clinic access", "Included", "Included"],
              ["Priority booking", "48 hours", "Concierge line"],
              ["Pathway review", "Quarterly", "Quarterly + on-demand"],
              ["Early access · new technology", "—", "First access"]
            ].map(([k, e, el], i, arr) => (
              <div key={k}
                style={{
                  display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr",
                  padding: "22px 32px", borderBottom: i === arr.length - 1 ? "none" : "1px solid var(--hairline)",
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
              An investment in <em>yourself.</em>
            </h2>
            <p className="body" style={{ margin: "0 auto", maxWidth: "60ch" }}>
              A face does not change on a coupon cycle. It changes over years,
              with the steady attention of a single practitioner. The
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
              Common ones.
            </h2>
          </Reveal>
          {[
            ["What does my monthly contribution actually pay for?", "Your full monthly contribution is banked toward treatments at AVEN. Banked credit applies to treatments only — not to wellness packages or retail products. The benefits above (priority booking, Saturday access, skin assessment review) are included on top."],
            ["What happens if I pause?", "Membership can be paused at any time. Your banked credit remains usable for twelve months from the pause date — applied to any service when you're ready to return."],
            ["Can I gift membership?", "Yes. Memberships can be gifted in three-, six-, or twelve-month increments."],
            ["What's included in the skin assessment review?", "Once or twice a year, we sit down to look at your pathway together — what's working, what's next, what to adjust. The skin is read; the plan is updated."],
            ["Can I switch between Maintenance and Signature?", "Yes. You can move between the two tiers at any time. Banked credit carries over."]
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
              Begin a <em>membership.</em>
            </h2>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
              <span>Apply for Membership</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>
      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default MembershipsPage;
