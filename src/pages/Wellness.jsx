/* AVEN MED — Wellness */

import React from 'react';
import { DividerMark, Eyebrow, Logo, Ph, Reveal, HeroBg, AssessmentCTA } from '../components.jsx';
import Video from '../Video.jsx';
import { getHubEntries } from '../content/registry.jsx';
import { BOOKING_ENABLED } from '../config.js';

// "Soon" teasers for services that don't have a page yet. When one is built and
// registered, delete its line here and it appears automatically as a live card
// (via getHubEntries), ordered by its page's hub.order.
// (No "Soon" wellness teasers at present. Add one here only for a service AVEN
// genuinely plans to offer — it renders as a non-linking "Soon" card.)
const WELLNESS_SOON = [];

const WellnessPage = ({ navigate }) => {
  // Live service cards derive from the registry; Soon teasers are merged in and
  // everything is ordered by hub.order. New wellness pages appear automatically.
  const services = [...getHubEntries("wellness"), ...WELLNESS_SOON].sort((a, b) => a.order - b.order);

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
      <section style={{ paddingBottom: 56 }}>
        <div className="container">
          <Reveal>
            <Ph label="Patient · healthy · in the wellness suite" meta="natural light · 21:9 · placeholder" aspect="21/9">
              <Video src="/assets/iv-drip-v2.mp4" />
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

          {/* Editorial ruled index (de-boxed) — a thin gold hairline tops each pillar, with
              the mono number, serif title, and body. No border/fill/shadow, matching the
              Aesthetics Guiding Principles treatment. Copy unchanged. Keeps the repeat(4)
              grid string so the existing mobile fold (4→2→1) continues to apply. */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "56px 40px", marginTop: 56, alignItems: "start" }}>
            {[
              { n: "01", k: "Longevity Panels", b: "Quarterly bloodwork tracking inflammation, hormones, metabolic and cardiovascular markers — interpreted, not just delivered." },
              { n: "02", k: "IV Therapy", b: "Custom-formulated infusions for immune support, cognitive performance, recovery, and pre-aesthetic optimization." },
              { n: "03", k: "Medical Weight Loss", b: "A physician-directed, whole-person program for weight and metabolic health — with GLP-1 medication as one option when appropriate." },
              { n: "04", k: "Nutrition & Metabolic Support", b: "Practical, individualized nutrition and metabolic guidance that works alongside the rest of your care." }
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div style={{ borderTop: "1px solid var(--hairline)", paddingTop: 26 }}>
                  <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.24em" }}>{p.n}</div>
                  <h4 className="display" style={{ fontSize: "clamp(22px, 1.7vw, 27px)", margin: "18px 0 12px", fontWeight: 400, letterSpacing: "-0.005em" }}>{p.k}</h4>
                  <p className="body-sm" style={{ margin: 0 }}>{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WELLNESS SERVICES — directory of service pages */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>Wellness Services</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 16px", maxWidth: "20ch", fontWeight: 300 }}>
              Care, service by <em>service.</em>
            </h2>
            <p className="body" style={{ marginBottom: 56, maxWidth: "58ch" }}>
              Each wellness service has its own considered approach — and, like
              everything at AVEN, begins with the AVEN Assessment rather than a
              default protocol.
            </p>
          </Reveal>
          {/* Editorial directory index (de-boxed) — reuses the Aesthetics .tx-grid/.tx-row
              language: thin top hairline, serif service name, restrained gold arrow, and
              description; whole row clickable to the same destination. .tx-row carries the
              gold :focus-visible ring + hover. Distinct from the numbered Four Pillars above.
              Service names/descriptions/links unchanged (copy freeze). */}
          <div className="tx-grid">
            {services.map((s, i) => (
              <Reveal key={s.label} delay={(i % 2) * 90}>
                {s.path && !s.soon ? (
                  <a
                    href={s.path}
                    onClick={(e) => { e.preventDefault(); navigate(s.path); }}
                    className="tx-row"
                  >
                    <span className="tx-head">
                      <span className="tx-name">{s.label}</span>
                      <span aria-hidden="true" className="tx-arrow">&rarr;</span>
                    </span>
                    <span className="tx-desc body-sm">{s.blurb}</span>
                  </a>
                ) : (
                  <div className="tx-row">
                    <span className="tx-head">
                      <span className="tx-name">{s.label}</span>
                      <span className="label" style={{ color: "var(--muted)", flexShrink: 0, letterSpacing: "0.2em" }}>Soon</span>
                    </span>
                    <span className="tx-desc body-sm">{s.blurb}</span>
                  </div>
                )}
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

          {/* De-packaged editorial triptych — no enclosing box, column dividers, or featured
              fill. Each program is a de-boxed entry: thin gold top hairline, the restrained
              Program 0N / tagline label row, serif name, description, and inclusion list.
              Folds 3→2→1 via .programs-grid. Copy unchanged (inclusions verbatim). */}
          <div className="programs-grid">
            {[
              {
                k: "The Foundation",
                p: "An entry point",
                d: "An entry-point wellness program — bloodwork twice a year, a single IV infusion, and a skin assessment.",
                items: ["Baseline & follow-up lab testing", "IV therapy when appropriate", "Skin health assessment"]
              },
              {
                k: "The Compound",
                p: "The full practice",
                d: "The deeper practice. Quarterly labs, monthly IV protocol, and twice-yearly skin assessments — the full AVEN wellness practice in one program.",
                items: ["Ongoing lab monitoring", "Personalized IV therapy", "Ongoing skin health assessments"]
              },
              {
                k: "Weight Loss",
                p: "Practitioner-led",
                d: "A physician-directed medical weight-loss program — evaluation, nutrition, movement, and coaching, with GLP-1 medication as one option when it's clinically appropriate.",
                items: ["Medical evaluation & planning", "Nutrition, movement & coaching", "GLP-1 medication when appropriate"]
              }
            ].map((p, i) => (
              <Reveal key={p.k} delay={i * 120}
                style={{ borderTop: "1px solid var(--hairline)", paddingTop: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                  <div className="label" style={{ color: "var(--gold)" }}>Program 0{i + 1}</div>
                  <div className="label" style={{ color: "var(--muted)" }}>{p.p}</div>
                </div>
                <h3 className="display" style={{ fontSize: "clamp(32px, 3vw, 40px)", margin: "20px 0 18px", fontWeight: 300, letterSpacing: "-0.01em" }}>
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
          <Reveal>
            <p className="body" style={{ marginTop: 40, maxWidth: "62ch", color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 18 }}>
              Each program is shaped around you at your AVEN Assessment — never a
              fixed package. We discuss what a program includes, and what it
              involves, once we understand your health and goals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* IV MENU TEASE */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>IV Infusions</Eyebrow>
            <div className="iv-head">
              <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 0", maxWidth: "20ch" }}>
                IV therapy, considered around your needs.
              </h2>
              <a href="/wellness/iv-therapy" onClick={(e) => { e.preventDefault(); navigate("/wellness/iv-therapy"); }} className="link">
                <span>Explore IV Therapy</span><span className="arrow"></span>
              </a>
            </div>
          </Reveal>

          <div className="iv-grid">
            {[
              ["Hydration", "Supporting fluid replenishment and overall hydration needs."],
              ["Recovery", "Support for recovery, travel, demanding schedules, and periods of increased physical stress."],
              ["Energy", "Individualized support centered on energy and overall wellness goals."],
              ["Antioxidant & Skin Support", "Supportive IV therapy considered alongside AVEN's broader skin and aesthetic plan."],
              ["Immune Support", "Individualized nutritional support considered around seasonal or travel-related wellness needs."],
              ["Pre-Treatment Support", "Supportive planning that may be considered around aesthetic treatment when clinically appropriate."]
            ].map(([k, d], i) => (
              <Reveal key={k} delay={i * 60}
                style={{ borderTop: "1px solid var(--hairline)", paddingTop: 26 }}>
                <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.24em" }}>0{i + 1}</div>
                <h4 className="display" style={{ fontSize: "clamp(24px, 1.9vw, 29px)", margin: "14px 0 10px", fontWeight: 400 }}>{k}</h4>
                <p className="body-sm" style={{ margin: 0 }}>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE AVEN ASSESSMENT — the page's substantive conversion moment. Uses the house
          Assessment shell already established on Aesthetics and Family Medicine (tinted
          band, 1.1fr 1fr grid, solid CTA + "How the Assessment works" link), so the quiet
          closer below can stop competing with it. Copy is wellness-native — a baseline and
          a direction — and deliberately does NOT claim that labs, IV therapy, Aura, or any
          medication is included: the /assessment tiers define what a visit contains. */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 72, alignItems: "center" }}>
          <Reveal>
            <Eyebrow>The AVEN Assessment</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.2vw, 56px)", margin: "18px 0 22px", maxWidth: "18ch", fontWeight: 300 }}>
              Start with a <em>baseline.</em>
            </h2>
            <p className="body" style={{ marginBottom: 22, maxWidth: "48ch" }}>
              Wellness care is easier to get right when it starts from something measured
              rather than assumed. The AVEN Assessment is where we review your history, your
              goals, and how you actually feel day to day — and decide together what's worth
              looking at, and what isn't.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
              <AssessmentCTA navigate={navigate} />
              <a href="/assessment" onClick={(e) => { e.preventDefault(); navigate("/assessment"); }} className="link">
                <span>How the Assessment works</span><span className="arrow"></span>
              </a>
            </div>
            {/* Pre-launch only. Gated on the shared BOOKING_ENABLED switch so it removes
                itself the day booking opens — no launch-day edit needed here. */}
            {!BOOKING_ENABLED && (
              <p className="body-sm" style={{ marginTop: 20, marginBottom: 0, maxWidth: "44ch", color: "var(--muted)" }}>
                AVEN Wellness opens September 15. Share your details now and our team will
                reach out to coordinate your AVEN Assessment.
              </p>
            )}
          </Reveal>
          <Reveal delay={140}>
            <Ph label="The practice · consultation" meta="natural light · 4:5 · placeholder" aspect="4/5">
              <Video src="/assets/alaa-2.mp4" />
            </Ph>
          </Reveal>
        </div>
      </section>

      {/* PATIENT PHOTO PLACEHOLDER */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) 0" }}>
        <div className="container">
          <Reveal>
            <Ph label="Patient · wellness environment" meta="natural light · 16:9 · awaiting final footage" aspect="16/9" />
          </Reveal>
        </div>
      </section>

      {/* FUTURE CONCIERGE */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 96, alignItems: "center" }}>
          <Reveal>
            <Ph aspect="16/9">
              <Video src="/assets/concierge-wellness.mp4" />
            </Ph>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>Arriving 2027</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(26px, 3.2vw, 42px)", margin: "16px 0 20px", maxWidth: "18ch" }}>
              Concierge <em>Wellness,</em><br />in its full form.
            </h2>
            <p className="body">
              We are building a full concierge medical practice within
              AVEN — a small panel, direct practitioner access, and the same
              standard of restraint we bring to aesthetics. Founding
              memberships will open by invitation.
            </p>
            <div style={{ marginTop: 36 }}>
              <a href="/memberships" onClick={(e) => { e.preventDefault(); navigate("/memberships"); }} className="link" data-aven-cta="membership">
                <span>Join the founding list</span><span className="arrow"></span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <DividerMark />

      {/* CLOSER (a quiet editorial sign-off, NOT a second Assessment pitch). The AVEN
          Assessment section above now carries the primary conversion with the solid CTA;
          here the CTA is demoted to the quiet .link treatment — a retained, lower-intensity
          conversion, still tracked (data-aven-cta="assessment" via AssessmentCTA) — so the
          two stop competing. */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={40} style={{ margin: "0 auto 26px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 80px)", margin: "0 auto 40px", maxWidth: "14ch" }}>
              The long <em>view.</em>
            </h2>
            <AssessmentCTA navigate={navigate} className="link" />
          </Reveal>
        </div>
      </section>
      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default WellnessPage;
