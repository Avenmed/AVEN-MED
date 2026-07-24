/* AVEN MED — Meet Your Provider hub.
 *
 * The relationship-centered entry point: introduces the clinician(s) behind AVEN
 * before patients schedule care. Provider cards derive from the registry via
 * getHubEntries('provider'), so additional providers appear here automatically
 * with no redesign. Routed from app.jsx. */
import React from 'react';
import { Eyebrow, Logo, Reveal, HeroBg, AssessmentCTA, DividerMark } from '../components.jsx';
import { getHubEntries } from '../content/registry.jsx';

const ProvidersPage = ({ navigate }) => {
  const providers = getHubEntries("provider");

  return (
    <main className="page">
      {/* HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 80 }}>
        <HeroBg />
        <div className="container">
          <Reveal style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <Eyebrow>Meet Your Provider</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(52px, 8vw, 128px)", margin: "24px 0 0", lineHeight: 0.96, maxWidth: "13ch" }}>
                Know who you'll <em>meet.</em>
              </h1>
            </div>
            <p className="lede">
              Before you schedule anything, get to know the clinician behind AVEN.
              Care here is personal and continuous — the person who assesses you is
              the person who cares for you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROVIDERS — registry-derived */}
      {providers.length > 0 && (
        <section className="section">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: providers.length === 1 ? "1fr" : "repeat(2, 1fr)", gap: 20, maxWidth: providers.length === 1 ? 720 : "none" }}>
              {providers.map((p) => (
                <Reveal key={p.label}>
                  <a
                    href={p.path}
                    onClick={(e) => { e.preventDefault(); navigate(p.path); }}
                    style={{ display: "block", padding: "40px 40px", border: "1px solid var(--gold-soft)", background: "var(--surface)", height: "100%", transition: "border-color 240ms ease" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
                      <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 30, fontWeight: 400, color: "var(--ivory)" }}>{p.label}</span>
                      <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 20, lineHeight: 1, flexShrink: 0 }}>&rarr;</span>
                    </div>
                    <p className="body" style={{ marginTop: 16, color: "var(--muted)", maxWidth: "48ch" }}>{p.blurb}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <DividerMark />

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={40} style={{ margin: "0 auto 26px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(36px, 5.4vw, 72px)", margin: "0 auto 24px", maxWidth: "15ch", fontWeight: 300 }}>
              Care begins with a <em>conversation.</em>
            </h2>
            <p className="body" style={{ margin: "0 auto 40px", maxWidth: "52ch" }}>
              Every relationship at AVEN begins with the AVEN Assessment — an honest,
              no-pressure first visit with the practitioner who will care for you.
            </p>
            <AssessmentCTA navigate={navigate} />
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default ProvidersPage;
