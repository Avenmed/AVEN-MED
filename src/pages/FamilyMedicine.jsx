/* AVEN MED — Family Medicine */

import React from 'react';
import { DividerMark, Eyebrow, Logo, Ph, Reveal, HeroBg, AssessmentCTA } from '../components.jsx';
import Video from '../Video.jsx';
import { getHubEntries } from '../content/registry.jsx';

const FamilyMedicinePage = ({ navigate }) => {
  // Service cards derive from the registry; new Family Medicine pages appear here
  // automatically. The "AVEN Concierge Family Medicine" section below is the
  // section's editorial "Soon" teaser for a genuinely planned service.
  const services = getHubEntries("familyMedicine");

  return (
    <main className="page">
      {/* HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 80 }}>
        <HeroBg />
        <div className="container">
          <Reveal style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <Eyebrow>· Family Medicine</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 132px)", margin: "24px 0 0", lineHeight: 0.96, maxWidth: "14ch" }}>
                Care for every<br /><em>season.</em>
              </h1>
            </div>
            <p className="lede">
              Family medicine at AVEN includes sick visits, preventive care,
              chronic condition management, and the everyday medicine a
              family relies on. Self-pay.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CLINIC PHOTO */}
      <section style={{ paddingBottom: 44 }}>
        <div className="container">
          <Reveal>
            <Ph label="Family medicine room · interior · 16:9" meta="warm tungsten · placeholder" aspect="16/9">
              <Video src="assets/family-med.mp4" />
            </Ph>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE TREAT */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <Eyebrow>· What we treat</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "20px 0 0", maxWidth: "20ch" }}>
              Everyday medicine, <em>practiced carefully.</em>
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 48 }}>
            {[
              { n: "01", k: "Sick Visits", b: "Same-day care for acute illness — colds, flu, infections, and seasonal viruses. We see patients quickly and discreetly." },
              { n: "02", k: "Preventive Care", b: "Annual physicals, screenings, vaccinations, and lifestyle guidance. The slow, steady work of staying well." },
              { n: "03", k: "Chronic Conditions", b: "Continuous management of conditions like hypertension, thyroid, and metabolic health — with a single practitioner who knows your file." }
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div style={{ padding: "36px 28px", border: "1px solid var(--hairline)", height: "100%", background: "var(--surface)" }}>
                  <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.2em" }}>{s.n}</div>
                  <h4 className="display" style={{ fontSize: 30, margin: "22px 0 16px", fontWeight: 300 }}>{s.k}</h4>
                  <p className="body-sm" style={{ margin: 0 }}>{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY MEDICINE SERVICES — registry-derived directory */}
      {services.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal>
              <Eyebrow>· Family Medicine Services</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 16px", maxWidth: "20ch", fontWeight: 300 }}>
                Where to <em>begin.</em>
              </h2>
              <p className="body" style={{ marginBottom: 56, maxWidth: "58ch" }}>
                Relationship-based primary care, with more of the family-medicine
                practice arriving over time.
              </p>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {services.map((s) => (
                <Reveal key={s.label}>
                  {s.path && !s.soon ? (
                    <a
                      href={s.path}
                      onClick={(e) => { e.preventDefault(); navigate(s.path); }}
                      style={{ display: "block", padding: "32px 30px", border: "1px solid var(--gold-soft)", background: "var(--surface)", height: "100%", transition: "border-color 240ms ease" }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14 }}>
                        <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "var(--ivory)" }}>{s.label}</span>
                        <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 18, lineHeight: 1, flexShrink: 0 }}>&rarr;</span>
                      </div>
                      <p className="body-sm" style={{ marginTop: 14, color: "var(--muted)" }}>{s.blurb}</p>
                    </a>
                  ) : (
                    <div style={{ padding: "32px 30px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14 }}>
                        <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "var(--ivory)" }}>{s.label}</span>
                        <span className="label" style={{ color: "var(--muted)", flexShrink: 0, letterSpacing: "0.2em" }}>Soon</span>
                      </div>
                      <p className="body-sm" style={{ marginTop: 14, color: "var(--muted)" }}>{s.blurb}</p>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PAYMENT */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
          <Reveal>
            <Eyebrow>· How it works</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="display" style={{ fontSize: "clamp(28px, 3vw, 44px)", margin: "0 0 32px", maxWidth: "26ch" }}>
              <em>Self-pay</em>, made simple.
            </h3>
            <p className="body" style={{ marginBottom: 22 }}>
              AVEN family medicine is self-pay — no claims, no billing
              surprises. Patients pay directly for the simplicity and
              transparency of it. The practice is built around continuity —
              the same practitioner, the same room, every visit.
            </p>
            <p className="body" style={{ color: "var(--ivory-soft)" }}>
              Pricing is shared clearly before your first visit, so you always
              know what a visit costs — no surprises.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONCIERGE — coming soon */}
      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 96, alignItems: "center" }}>
          <Reveal>
            <Ph aspect="16/9">
              <Video src="assets/concierge-family-med.mp4" />
            </Ph>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>· Coming Soon</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(26px, 3.2vw, 42px)", margin: "16px 0 20px", maxWidth: "18ch" }}>
              AVEN <em>Concierge</em><br />Family Medicine.
            </h2>
            <p className="body">
              A small-panel concierge practice is in development at AVEN — direct
              practitioner access, longer visits, and care held by one provider
              who knows your file. Founding memberships will open by invitation.
            </p>
            <div style={{ marginTop: 36 }}>
              <a href="/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="link">
                <span>Join the founding list</span><span className="arrow"></span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <DividerMark />

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={42} style={{ margin: "0 auto 28px" }} />
            <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 80px)", margin: "0 auto 28px", maxWidth: "14ch" }}>
              Care, <em>continued.</em>
            </h2>
            <AssessmentCTA navigate={navigate} />
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default FamilyMedicinePage;
