/* AVEN MED — Wellness */

import React from 'react';
import { Eyebrow, Logo, Ph, Reveal, HeroBg } from '../components.jsx';
import Video from '../Video.jsx';

const WellnessPage = ({ navigate }) => {
  return (
    <main className="page">
      {/* HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 80, position: "relative" }}>
        <HeroBg />
        <div className="container">
          <Reveal style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <Eyebrow>Wellness · Concierge</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 132px)", margin: "24px 0 0", lineHeight: 0.96, maxWidth: "12ch" }}>
                The architecture<br /><em>beneath</em> the skin.
              </h1>
            </div>
            <p className="lede">
              AVEN Wellness is a concierge practice for patients who want their
              skin, their bloodwork, and their sleep treated as one continuous
              conversation. Prevention first. Vitality always.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HERO IMAGE — placeholder for real photo of healthy patient */}
      <section style={{ paddingBottom: 120 }}>
        <div className="container">
          <Reveal>
            <Ph label="Patient · healthy · in the wellness suite" meta="natural light · 21:9 · placeholder" aspect="21/9">
              <Video src="assets/iv-drip-v2.mp4" />
            </Ph>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <Eyebrow>Four Pillars</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "20px 0 0", maxWidth: "18ch" }}>
              We work below the surface, where <em>change</em> compounds slowly.
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 80 }}>
            {[
              { n: "01", k: "Longevity Panels", b: "Quarterly bloodwork tracking inflammation, hormones, metabolic and cardiovascular markers — interpreted, not just delivered." },
              { n: "02", k: "IV Therapy", b: "Custom-formulated infusions for immune support, cognitive performance, recovery, and pre-aesthetic optimization." },
              { n: "03", k: "Hormone Optimization", b: "Bio-identical hormone replacement and peptide therapies, prescribed conservatively and reviewed annually." },
              { n: "04", k: "Concierge Primary Care", b: "Same-day access, unhurried visits, and a single practitioner who actually knows your file." }
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div style={{ padding: "36px 28px", border: "1px solid var(--hairline)", height: "100%", background: "var(--surface)" }}>
                  <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.2em" }}>{p.n}</div>
                  <h4 className="display" style={{ fontSize: 30, margin: "22px 0 16px", fontWeight: 300 }}>{p.k}</h4>
                  <p className="body-sm" style={{ margin: 0 }}>{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>Wellness Programs</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "20px 0 60px", maxWidth: "18ch" }}>
              Signature <em>protocols.</em>
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid var(--hairline)" }}>
            {[
              {
                k: "The Foundation",
                p: "$500 / year",
                d: "An entry-point wellness program — bloodwork twice a year, a single IV infusion, and a skin assessment.",
                items: ["2 bloodwork panels per year", "1 IV infusion", "1 skin assessment"]
              },
              {
                k: "The Compound",
                p: "$2,500 / year",
                d: "The deeper practice. Quarterly labs, monthly IV protocol, and twice-yearly skin assessments — the full AVEN wellness practice in one program.",
                items: ["Quarterly bloodwork", "12 monthly IV infusions", "2 skin assessments"],
                feat: true
              },
              {
                k: "Hormone",
                p: "Practitioner-prescribed",
                d: "Bio-identical hormone protocol with quarterly review — conservative, monitored, and continuously adjusted.",
                items: ["Hormone protocol", "Quarterly review", "Lab-informed adjustments"]
              },
              {
                k: "Weight Loss",
                p: "Monthly",
                d: "A practitioner-led program built around GLP-1 medications. Semaglutide and Tirzepatide, prescribed when appropriate.",
                items: ["Semaglutide · $300 / month", "Tirzepatide · $400 / month", "Practitioner check-ins included"]
              }
            ].map((p, i) => (
              <Reveal key={p.k} delay={i * 120}
                style={{
                  padding: 48,
                  borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none",
                  borderTop: i > 1 ? "1px solid var(--hairline)" : "none",
                  background: p.feat ? "var(--surface)" : "transparent"
                }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div className="label" style={{ color: "var(--gold)" }}>Program 0{i + 1}</div>
                  <div className="label" style={{ color: "var(--muted)" }}>{p.p}</div>
                </div>
                <h3 className="display" style={{ fontSize: 40, margin: "20px 0 18px", fontWeight: 300, letterSpacing: "-0.01em" }}>
                  {p.k}
                </h3>
                <p className="body" style={{ marginBottom: 24, fontSize: 15 }}>{p.d}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, paddingTop: 20, borderTop: "1px solid var(--hairline)" }}>
                  {p.items.map((it) => (
                    <li key={it} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, color: "var(--ivory)", fontSize: 14 }}>
                      <span style={{ width: 12, height: 1, background: "var(--gold)", marginTop: 11 }}></span><span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IV MENU TEASE */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>IV Infusions</Eyebrow>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 40 }}>
              <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 0", maxWidth: "20ch" }}>
                IV infusions — <em>types</em><br />and what each one does.
              </h2>
              <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="link">
                <span>The full menu</span><span className="arrow"></span>
              </a>
            </div>
          </Reveal>

          <div style={{ marginTop: 80, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--hairline)" }}>
            {[
              ["The Restore", "Hydration · Magnesium · B-Complex", "Recovery and nervous-system support."],
              ["The Glow", "Glutathione · Biotin · Vitamin C", "Skin-luminance support paired with aesthetics."],
              ["The Architect", "NAD+ · Methylated B12 · Taurine", "Cellular energy and longevity foundation."],
              ["The Rest", "Magnesium · Glycine · L-Theanine", "Sleep architecture and stress recovery."],
              ["The Immune", "Zinc · C · Selenium", "Seasonal immune support pre-travel."],
              ["The Pre-Treatment", "Arnica · C · Bromelain", "Bruise prevention before facial balancing."]
            ].map(([k, ing, d], i) => (
              <Reveal key={k} delay={i * 60}
                style={{
                  padding: "36px 32px",
                  borderRight: (i + 1) % 3 !== 0 ? "1px solid var(--hairline)" : "none",
                  borderBottom: "1px solid var(--hairline)"
                }}>
                <div className="label" style={{ color: "var(--gold)" }}>Infusion · 0{i + 1}</div>
                <h4 className="display" style={{ fontSize: 32, margin: "16px 0 8px", fontWeight: 300 }}>{k}</h4>
                <div className="body-sm" style={{ color: "var(--muted)", marginBottom: 14, fontStyle: "italic" }}>{ing}</div>
                <p className="body-sm" style={{ margin: 0 }}>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT PHOTO PLACEHOLDER */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) 0" }}>
        <div className="container">
          <Reveal>
            <Ph label="Patient · post-infusion · healthy" meta="natural light · 16:9 · placeholder" aspect="16/9" />
          </Reveal>
        </div>
      </section>

      {/* FUTURE CONCIERGE */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 96, alignItems: "center" }}>
          <Reveal>
            <Ph note="Design in development" aspect="4/5" />
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>Arriving 2027</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 24px", maxWidth: "18ch" }}>
              Concierge <em>Wellness,</em><br />in its full form.
            </h2>
            <p className="body">
              We are building a full concierge medical practice within
              AVEN — a small panel, direct practitioner access, and the same
              standard of restraint we bring to aesthetics. Founding
              memberships will open by invitation.
            </p>
            <div style={{ marginTop: 36 }}>
              <a href="#/memberships" onClick={(e) => { e.preventDefault(); navigate("/memberships"); }} className="link">
                <span>Join the founding list</span><span className="arrow"></span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={42} style={{ margin: "0 auto 28px" }} />
            <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 80px)", margin: "16px auto 28px", maxWidth: "14ch" }}>
              Begin <em>beneath</em><br />the surface.
            </h2>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
              <span>Request a Wellness Assessment</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>
      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default WellnessPage;
