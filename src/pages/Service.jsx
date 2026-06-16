/* AVEN MED — Service pages (template + 5 services) */
import React from 'react';
import { Eyebrow, Logo, Ph, Reveal } from '../components.jsx';

const SERVICES = {
  'lip-filler': {
    eyebrow: "Aesthetics · Lip",
    headline: <>Definition,<br /><em>not addition.</em></>,
    philosophy: "A lip is anatomy first — border, vermilion, philtrum, eversion. Filler placed at AVEN respects what's already there. We add restraint, not volume. The aim is a softer, more defined version of your own mouth.",
    reveals: [
      "Border integrity and the natural eversion of the lip.",
      "Asymmetry, philtrum quality, and lip-to-face proportion.",
      "Texture and quality of the perioral skin, including fine lines.",
    ],
    possible: "Subtle hydration and softening of the border. Refined eversion. Balanced upper-to-lower ratio. Most lips need one syringe at most — often less. Results last six to nine months and age gracefully without re-treatment urgency.",
    detailPh: "Lip · profile · soft focus",
  },
  'neuromodulators': {
    eyebrow: "Aesthetics · 01",
    headline: <>Expression,<br /><em>kept.</em></>,
    philosophy: "Neuromodulators at AVEN are placed in micro-doses, mapped to your specific expression patterns — not a chart, not a template. The goal is a softer version of your face. Never frozen, never visibly treated. Anatomy first, restraint always.",
    reveals: [
      "Resting tone and the way your face moves in conversation.",
      "Asymmetry between sides and across the brow-eye-mid-face axis.",
      "Muscle hierarchy across forehead, glabella, orbicularis, and jaw.",
    ],
    possible: "A softer brow at rest. Fewer expressive lines through the upper face. Subtle re-balancing of jaw or chin tension when indicated. Effects emerge across ten to fourteen days and last roughly three to four months.",
    detailPh: "Glabella · soft tone · 35mm",
  },
  'microneedling': {
    eyebrow: "Skin · 03",
    headline: <>Considered,<br /><em>repeated work.</em></>,
    philosophy: "Microneedling is the slow architecture of the skin — collagen induction across visits, never in one. We pair it with PRP or topicals based on what the skin is telling us, not a fixed protocol. Seasonal pathways, not packages.",
    reveals: [
      "Pore quality, surface texture, and dermal architecture.",
      "Pigment distribution and the laxity beneath it.",
      "Hydration, barrier strength, and how the skin recovers from a single session.",
    ],
    possible: "Refined pore size, smoother texture, brighter tone over a considered series of three to four visits. Best results are cumulative — no single treatment is the answer. Downtime is minimal; recovery is private.",
    detailPh: "Cheek · macro · natural light",
  },
  'sculptra': {
    eyebrow: "Biostimulators · 04",
    headline: <>Architecture,<br /><em>not filler.</em></>,
    philosophy: "Sculptra rebuilds collagen architecture beneath the skin. It is not filler — it asks the body to do its own steady work across months. Strategic placement matters more than volume. Less, repeated, across a year, is the practice.",
    reveals: [
      "Where structural support has thinned — temple, cheek, lateral jawline.",
      "Skin quality and how the face has changed across the last five years.",
      "Whether biostimulation is the right tool, or whether something subtler would serve.",
    ],
    possible: "Gradual restoration of structure across three sessions, spaced six to eight weeks apart. Results emerge across three to six months and last eighteen to twenty-four. Faces look refreshed without anyone knowing why.",
    detailPh: "Cheek · profile · ivory linen",
  },
  'iv-therapy': {
    eyebrow: "Wellness · 05",
    headline: <>What the body<br /><em>is asking for.</em></>,
    philosophy: "IV therapy at AVEN is not a menu of drips. It is a practitioner-led infusion built around what your body and bloodwork say is needed. We do not offer hangover packages. We offer considered infusions — sometimes restoration, sometimes just hydration.",
    reveals: [
      "What's actually depleted (via labs and conversation).",
      "Hydration status, micronutrient gaps, the state of recovery.",
      "Whether IV is the right delivery — or whether oral and lifestyle would serve better.",
    ],
    possible: "Targeted infusions of magnesium, B complex, glutathione, NAD+, or simple hydration — chosen for what your file is asking for, not what's on a sign. Sessions last thirty to sixty minutes in a private room.",
    detailPh: "IV room · brass detail · still",
  },
};

const ServicePage = ({ navigate }) => {
  const slug = (window.location.hash.match(/#\/service\/([^/?]+)/) || [, 'lip-filler'])[1];
  const data = SERVICES[slug] || SERVICES['lip-filler'];

  return (
    <main className="page">
      {/* HERO */}
      <section style={{ paddingTop: 180, paddingBottom: 60 }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <Reveal>
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(48px, 7vw, 110px)", margin: "28px 0 0", lineHeight: 1.0, maxWidth: "12ch" }}>
              {data.headline}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ paddingTop: 24, paddingBottom: 60 }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <Reveal delay={120}>
            <p className="body" style={{ fontSize: 17, lineHeight: 1.85, maxWidth: "58ch" }}>
              {data.philosophy}
            </p>
          </Reveal>
        </div>
      </section>

      {/* OPTIONAL DETAIL VISUAL */}
      <section style={{ paddingBottom: 100 }}>
        <div className="container" style={{ maxWidth: 1080 }}>
          <Reveal>
            <Ph label={data.detailPh} meta="ivory · brass · medium format" aspect="16/9" />
          </Reveal>
        </div>
      </section>

      {/* WHAT A READING REVEALS */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ maxWidth: 920, display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
          <Reveal>
            <Eyebrow>The Assessment</Eyebrow>
            <h2 className="display italic" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", margin: "20px 0 0", maxWidth: "14ch", fontWeight: 300 }}>
              What an Assessment reveals.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div style={{ display: "grid", gap: 0 }}>
              {data.reveals.map((r, i) => (
                <div key={i} style={{ padding: "26px 0", borderTop: "1px solid var(--hairline)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 22, alignItems: "start" }}>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.22em", paddingTop: 6 }}>
                      0{i + 1}
                    </div>
                    <p className="body" style={{ margin: 0, maxWidth: "52ch" }}>{r}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT'S POSSIBLE */}
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal>
            <Eyebrow>What's possible</Eyebrow>
            <p className="lede" style={{ marginTop: 24, fontSize: "clamp(20px, 2vw, 26px)", lineHeight: 1.55 }}>
              {data.possible}
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRICING + CTA */}
      <section className="section" style={{ textAlign: "center", paddingTop: 40 }}>
        <div className="container">
          <Reveal>
            <Logo size={28} style={{ margin: "0 auto 24px", opacity: 0.85 }} />
            <p className="display italic" style={{ fontSize: "clamp(20px, 2.2vw, 28px)", color: "var(--muted)", margin: "0 auto 36px", maxWidth: "26ch" }}>
              Pricing shared at your Assessment.
            </p>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
              <span>Book an Assessment</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* BRAND SIGNATURE */}
      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default ServicePage;
