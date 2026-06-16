/* AVEN MED — Aesthetics */

import React from 'react';
import { DividerMark, Eyebrow, Ph, Reveal } from '../components.jsx';

const AestheticsPage = ({ navigate }) => {
  const [cat, setCat] = React.useState(0);
  const categories = [
    {
      k: "Neuromodulators",
      tag: "Botox · Dysport · Xeomin",
      lede: "Subtle softening of expressive lines — placed with care, in conservative, well-distributed micro-doses.",
      photo: "Botox injection · gloved hand · 35mm",
      treatments: [
        { n: "Forehead & Glabella", d: "Soft, mobile expression with no frozen quality. Re-evaluated every four months." },
        { n: "Orbicularis · Crow's Feet", d: "Subtle, targeted relaxation around the eye to soften lateral lines." },
        { n: "Lip Flip", d: "Two to four micro-units along the lip border for a soft eversion — no filler." },
        { n: "Masseter · Jawline", d: "Slimming and clenching relief. Mapped carefully on each visit." }
      ]
    },
    {
      k: "Filler & Balancing",
      tag: "Always about balance",
      lede: "Sub-millimeter facial balancing — never about volume for its own sake, always about balanced proportion.",
      treatments: [
        { n: "Lip Filler", d: "Soft hyaluronic refinement — preserving border, philtrum and natural eversion." },
        { n: "Jawline Filler", d: "Definition along the lateral jaw — proportion, structure, and subtle support." },
        { n: "Chin Projection", d: "Restores anterior projection and rebalances the profile in one or two sessions." },
        { n: "Cheek Architecture", d: "Lift and structural support through the lateral and anterior cheek." },
        { n: "Facial Balancing", d: "A holistic, mapped session addressing chin, cheek, jaw, and temple together." }
      ]
    },
    {
      k: "Biostimulators",
      tag: "Sculptra · Radiesse · Skin Boosters",
      lede: "Collagen-led treatments. We build the architecture beneath the skin so that less filler is ever needed.",
      treatments: [
        { n: "Sculptra · Full Face", d: "Poly-L-lactic acid for long-term collagen support. Three-visit protocol." },
        { n: "Radiesse · Diluted", d: "Calcium hydroxylapatite to restore skin density along the jawline and neck." },
        { n: "Skinvive by Juvederm", d: "Microdroplet hyaluronic for hydration and surface quality — placed superficially." },
        { n: "VAMP", d: "Autologous plasma protocol for under-eye renewal." }
      ]
    },
    {
      k: "Skin & Resurfacing",
      tag: "Microneedling · PRP · Peels",
      lede: "Texture, tone, and pigment — addressed in seasonal pathways rather than aggressive one-off treatments.",
      treatments: [
        { n: "Microneedling + PRP", d: "Collagen induction with autologous plasma. Three to four sessions, seasonally." },
        { n: "Chemical Peels", d: "Medical-grade peels tailored to your pigment and texture maps." }
      ]
    },
    {
      k: "Advanced Rejuvenation",
      tag: "Laser · Energy · Coming soon",
      lede: "Forthcoming technology arriving at AVEN — radiofrequency, fractional laser, and energy-based skin tightening.",
      coming: "Coming soon",
      treatments: [
        { n: "Radiofrequency Skin Tightening", d: "Bipolar radiofrequency for deep collagen remodeling. Comfortable, non-ablative." },
        { n: "Fractional Resurfacing", d: "Selective fractional laser for texture, tone, and surgical-scar refinement." },
        { n: "Vascular Laser", d: "Targeted treatment of redness, telangiectasias, and rosacea-related vessels." },
        { n: "Pigment Laser", d: "Q-switched targeting of solar lentigines and post-inflammatory pigment." }
      ]
    }
  ];

  return (
    <main className="page">
      {/* HERO */}
      <section style={{ paddingTop: 180, paddingBottom: 80 }}>
        <div className="container">
          <Reveal style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <Eyebrow>Aesthetics</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 132px)", margin: "24px 0 0", lineHeight: 0.96, maxWidth: "12ch" }}>
                Treatments,<br /><em>carefully</em><br />placed.
              </h1>
            </div>
            <p className="lede">
              Aesthetic treatments at AVEN are sequenced into considered pathways
              rather than offered as a menu. Each category below is a chapter
              in a longer practice — not a stand-alone purchase.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <section style={{ borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)", padding: "24px 0", position: "sticky", top: 78, zIndex: 50, background: "rgba(243,236,220,0.92)", backdropFilter: "blur(14px)" }}>
        <div className="container" style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          {categories.map((c, i) => (
            <button key={c.k} onClick={() => setCat(i)}
              style={{
                padding: "10px 22px",
                border: "1px solid " + (cat === i ? "var(--gold)" : "var(--hairline)"),
                color: cat === i ? "var(--gold)" : "var(--ivory-soft)",
                background: cat === i ? "rgba(201,169,110,0.06)" : "transparent",
                fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase",
                transition: "all 280ms ease"
              }}>
              0{i + 1} · {c.k}
            </button>
          ))}
        </div>
      </section>

      {/* CATEGORY DETAIL */}
      <section className="section">
        <div className="container">
          <Reveal key={"cat-" + cat}>
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "start" }}>
              <div>
                <div className="label" style={{ color: "var(--gold)" }}>{categories[cat].tag}</div>
                <h2 className="display" style={{ fontSize: "clamp(44px, 5.4vw, 84px)", margin: "20px 0 28px", lineHeight: 1.0 }}>
                  {categories[cat].k.split(" ")[0]}<br />
                  {categories[cat].k.split(" ").slice(1).length > 0 && (
                    <em>{categories[cat].k.split(" ").slice(1).join(" ")}</em>
                  )}
                </h2>
                <p className="lede">{categories[cat].lede}</p>
                {categories[cat].coming && (
                  <div style={{ marginTop: 30, padding: "16px 22px", border: "1px dashed var(--gold-soft)", display: "inline-block" }}>
                    <span className="label" style={{ color: "var(--gold)" }}>{categories[cat].coming}</span>
                  </div>
                )}
              </div>
              <Ph label={categories[cat].photo || ("Editorial · " + categories[cat].k)} meta="warm key · 35mm · placeholder" aspect="4/5" />
            </div>

            <div style={{ marginTop: 100, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--hairline)" }}>
              {categories[cat].treatments.map((t, i) => (
                <div key={t.n}
                  style={{
                    padding: "36px 0",
                    borderBottom: "1px solid var(--hairline)",
                    paddingRight: i % 2 === 0 ? 60 : 0,
                    paddingLeft: i % 2 === 1 ? 60 : 0,
                    borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none"
                  }}>
                  <h4 className="display" style={{ fontSize: 30, margin: 0, fontWeight: 300 }}>{t.n}</h4>
                  <p className="body" style={{ marginTop: 12 }}>{t.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH NOTE */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
          <Reveal>
            <Eyebrow>A Note on Pricing</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="display" style={{ fontSize: "clamp(28px, 3vw, 44px)", margin: "0 0 24px", maxWidth: "26ch" }}>
              We do not publish per-unit prices. Care is sequenced and quoted
              <em> only</em> after an Assessment.
            </h3>
            <p className="body">
              Per-syringe and per-unit pricing encourages overuse. At AVEN, we
              quote the full year of a pathway after we have read your skin
              and understood your goals.
            </p>
            <div style={{ marginTop: 36 }}>
              <a href="#/memberships" onClick={(e) => { e.preventDefault(); navigate("/memberships"); }} className="link">
                <span>See memberships</span><span className="arrow"></span>
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
            <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 80px)", margin: "0 auto 28px", maxWidth: "14ch" }}>
              A pathway, not a <em>menu.</em>
            </h2>
            <p className="body" style={{ margin: "0 auto 44px" }}>
              Every aesthetics journey at AVEN begins with the AVEN Assessment.
            </p>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
              <span>Begin Your Pathway</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>
      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default AestheticsPage;
