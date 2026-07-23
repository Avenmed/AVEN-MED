/* AVEN MED — Patient Concerns hub.
 *
 * The entry point to the concern pages: it bridges a symptom to individualized
 * treatment planning through the AVEN Assessment. Hand-built category landing in
 * the same convention as Aesthetics / Wellness (routed from app.jsx). The concern
 * pages themselves are data-driven through the content registry. */
import React from 'react';
import { Eyebrow, Reveal, HeroBg, AssessmentCTA, DividerMark, Logo } from '../components.jsx';

const GROUPS = [
  {
    k: "Lines, Volume & Laxity",
    lede: "The structural and surface changes of aging — approached by cause, not by a single default treatment.",
    items: [
      { n: "Fine Lines & Wrinkles", d: "Dynamic and static lines, and what actually drives each.", path: "/concerns/fine-lines-and-wrinkles" },
      { n: "Facial Volume Loss", d: "The deflation and flattening that come with collagen and fat change.", path: "/concerns/facial-volume-loss" },
      { n: "Skin Laxity", d: "Early looseness and mild sagging — and where treatment can and can't help.", path: "/concerns/skin-laxity" },
    ],
  },
  {
    k: "Tone, Texture & Clarity",
    lede: "Skin-quality concerns that respond best to a sequenced plan rather than one aggressive treatment.",
    items: [
      { n: "Uneven Skin Tone", d: "Redness, blotchiness, and discoloration with several possible causes.", path: "/concerns/uneven-skin-tone" },
      { n: "Sun Damage", d: "The pigment, texture, and vessel changes that accumulate over years.", path: "/concerns/sun-damage" },
      { n: "Skin Texture", d: "Rough, dull, or uneven surface texture — and what's beneath it.", path: "/concerns/skin-texture" },
      { n: "Large Pores", d: "Why pores look larger, and what genuinely refines them.", path: "/concerns/large-pores" },
    ],
  },
  {
    k: "Blemishes & Scarring",
    lede: "Active breakouts and the marks they leave — treated in the right order, never at once.",
    items: [
      { n: "Acne", d: "A medical concern with several drivers, calmed with an individualized plan.", path: "/concerns/acne" },
      { n: "Acne Scars", d: "The texture left behind — softened realistically once acne is controlled.", path: "/concerns/acne-scars" },
    ],
  },
  {
    k: "Medical Concerns",
    lede: "Concerns that are medical first — evaluated and treated as such.",
    items: [
      { n: "Excessive Sweating", d: "Hyperhidrosis — a common, treatable medical condition.", path: "/concerns/excessive-sweating" },
    ],
  },
];

const ConcernsPage = ({ navigate }) => {
  return (
    <main className="page">
      {/* HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 80 }}>
        <HeroBg />
        <div className="container">
          <Reveal style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <Eyebrow>Patient Concerns</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 132px)", margin: "24px 0 0", lineHeight: 0.96, maxWidth: "13ch" }}>
                Start with the <em>concern.</em>
              </h1>
            </div>
            <p className="lede">
              Most people arrive with a concern, not a treatment in mind. These
              pages explain what may be behind each one — and why the right plan
              is decided through the AVEN Assessment, never assumed in advance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GROUPS */}
      {GROUPS.map((g, gi) => (
        <section key={g.k} className="section" style={gi % 2 === 1 ? { background: "var(--bg-1)" } : undefined}>
          <div className="container">
            <Reveal>
              <Eyebrow>{g.k}</Eyebrow>
              <p className="body" style={{ margin: "18px 0 48px", maxWidth: "60ch" }}>{g.lede}</p>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {g.items.map((it, i) => (
                <Reveal key={it.path} delay={(i % 3) * 80}>
                  <a
                    href={it.path}
                    onClick={(e) => { e.preventDefault(); navigate(it.path); }}
                    style={{ display: "block", padding: "32px 30px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%", transition: "border-color 240ms ease" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14 }}>
                      <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "var(--ivory)" }}>{it.n}</span>
                      <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 18, lineHeight: 1, flexShrink: 0 }}>&rarr;</span>
                    </div>
                    <p className="body-sm" style={{ marginTop: 14, color: "var(--muted)" }}>{it.d}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <DividerMark />

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={40} style={{ margin: "0 auto 26px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(36px, 5.4vw, 72px)", margin: "0 auto 24px", maxWidth: "15ch", fontWeight: 300 }}>
              Name the concern. We'll find the <em>cause.</em>
            </h2>
            <p className="body" style={{ margin: "0 auto 40px", maxWidth: "52ch" }}>
              Every plan at AVEN MED begins with the AVEN Assessment — an expert
              read on what's actually driving your concern, and the options that fit.
            </p>
            <AssessmentCTA navigate={navigate} />
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default ConcernsPage;
