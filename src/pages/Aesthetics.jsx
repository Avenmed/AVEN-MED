/* AVEN MED — Aesthetics hub.
 *
 * An editorial destination, not a service directory: it answers "why AVEN?"
 * before "which treatment?", then guides patients into the existing treatment
 * landing pages (which remain the detailed destinations). Category groupings are
 * a light editorial presentation over the registry's treatment pages — the hub
 * introduces; the landing pages teach. */
import React from 'react';
import { Eyebrow, Logo, Ph, Reveal, HeroBg, AssessmentCTA, DividerMark } from '../components.jsx';
import Video from '../Video.jsx';

// Guiding principles — the philosophy, before the treatments.
const PRINCIPLES = [
  { n: "01", k: "Natural Results", b: "The aim is you, rested — never treated or overdone. Restraint is the point, not the compromise." },
  { n: "02", k: "Facial Harmony", b: "We read the whole face, not one line or one syringe. Balance and proportion come before volume." },
  { n: "03", k: "Conservative Enhancement", b: "We do the least that achieves the result. You can always add — undoing is harder." },
  { n: "04", k: "Assessment-Driven", b: "Nothing is recommended before the AVEN Assessment. The plan follows the conversation, not a menu." },
  { n: "05", k: "Personalized Planning", b: "Every plan is mapped to your anatomy and sequenced over time — never a one-size protocol." },
  { n: "06", k: "One Practitioner", b: "You're cared for by Alaa Mashal, MSN, APRN, FNP-BC, visit after visit. Continuity is the quiet advantage behind good results." },
];

// Light editorial grouping over the existing registry treatment pages.
// Every path resolves to an approved landing page — the hub links, never duplicates.
const CATEGORIES = [
  {
    eyebrow: "Neuromodulators",
    headline: <>Softening what <em>movement</em> creates.</>,
    lede: "For lines and tension driven by muscle activity, small, well-placed doses relax the movement while preserving expression. Used conservatively, they're preventive as much as corrective — and they're medical, not cosmetic, when it comes to jaw tension and sweating.",
    treatments: [
      { n: "Botox", d: "Softening expressive lines.", path: "/botox-orland-park" },
      { n: "Lip Flip", d: "A subtle lip eversion — no filler.", path: "/lip-flip-orland-park" },
      { n: "Masseter Botox", d: "Jaw slimming & clench relief.", path: "/masseter-botox-orland-park" },
      { n: "TMJ Botox", d: "Muscle-related jaw tension.", path: "/tmj-botox-orland-park" },
      { n: "Hyperhidrosis", d: "Treatment for excessive sweating.", path: "/hyperhidrosis-treatment-orland-park" },
    ],
  },
  {
    eyebrow: "Filler & Facial Balancing",
    headline: <>Structure and <em>proportion</em>, placed with care.</>,
    lede: "Filler at AVEN is about balance, not volume for its own sake. Sub-millimeter refinement to the lips, cheeks, chin, and jaw restores proportion and support — a considered, whole-face approach rather than a single area chased in isolation.",
    treatments: [
      { n: "Lip Filler", d: "Soft, natural lip refinement.", path: "/lip-fillers-orland-park" },
      { n: "Cheek Filler", d: "Mid-face lift & support.", path: "/cheek-fillers-orland-park" },
      { n: "Jawline Filler", d: "Definition and structure.", path: "/jawline-fillers-orland-park" },
      { n: "Chin Filler", d: "Projection and profile balance.", path: "/chin-fillers-orland-park" },
    ],
  },
  {
    eyebrow: "Collagen & Biostimulators",
    headline: <>Building the architecture <em>beneath</em> the skin.</>,
    lede: "Some of the most natural results come from supporting your own collagen rather than adding volume. These treatments work gradually, over weeks and a considered series — rebuilding structure and firmness so that, over time, less is ever needed.",
    treatments: [
      { n: "Sculptra", d: "Collagen-stimulating structural support.", path: "/sculptra-orland-park" },
      { n: "SkinPen Microneedling", d: "Collagen induction for texture.", path: "/skinpen-microneedling-orland-park" },
      { n: "Skin Tightening", d: "Radiofrequency remodeling (forthcoming).", path: "/skin-tightening-orland-park" },
    ],
  },
  {
    eyebrow: "Skin & Resurfacing",
    headline: <>Healthier skin, planned as a <em>pathway.</em></>,
    lede: "Tone, texture, and clarity respond best to a sequenced plan and daily care — not a single aggressive treatment. From peels and skin rejuvenation to acne care and medical-grade skincare, this is the long, steady work of skin health.",
    treatments: [
      { n: "Chemical Peels", d: "Medical-grade resurfacing.", path: "/chemical-peels-orland-park" },
      { n: "Skin Rejuvenation", d: "A personalized skin-quality plan.", path: "/skin-rejuvenation-orland-park" },
      { n: "Acne Treatment", d: "Individualized, medical acne care.", path: "/acne-treatment-orland-park" },
      { n: "Acne Scar Treatment", d: "Softening acne-scar texture.", path: "/acne-scar-treatment-orland-park" },
      { n: "Medical-Grade Skincare", d: "The daily foundation of results.", path: "/medical-grade-skincare-orland-park" },
      { n: "Facials", d: "Results-focused skin treatments.", path: "/facials-orland-park" },
    ],
  },
];

// Related patient concerns — for visitors who arrive with a concern, not a treatment.
const CONCERNS = [
  { n: "Fine Lines & Wrinkles", path: "/concerns/fine-lines-and-wrinkles" },
  { n: "Facial Volume Loss", path: "/concerns/facial-volume-loss" },
  { n: "Skin Laxity", path: "/concerns/skin-laxity" },
  { n: "Uneven Skin Tone", path: "/concerns/uneven-skin-tone" },
  { n: "Acne Scars", path: "/concerns/acne-scars" },
  { n: "Large Pores", path: "/concerns/large-pores" },
];

// Editorial treatment row — de-boxed (styles in .tx-row): a thin top hairline, the
// serif name + a restrained gold arrow, and the existing short description beneath.
// The whole row stays a single clickable link to the same landing page.
const TreatmentCard = ({ t, navigate }) => (
  <a
    href={t.path}
    onClick={(e) => { e.preventDefault(); navigate(t.path); }}
    className="tx-row"
  >
    <span className="tx-head">
      <span className="tx-name">{t.n}</span>
      <span aria-hidden="true" className="tx-arrow">&rarr;</span>
    </span>
    <span className="tx-desc body-sm">{t.d}</span>
  </a>
);

const AestheticsPage = ({ navigate }) => {
  return (
    <main className="page">
      {/* 1 — HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 80 }}>
        <HeroBg />
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
              rather than offered as a menu. What follows is the philosophy first —
              then the treatments, and where each one fits.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2 — PHILOSOPHY (why AVEN, before what) */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "center", maxWidth: 1120 }}>
          {/* Cinematic editorial imagery (left) — atmospheric moving imagery via the same
              Ph + Video pattern used elsewhere on the site: muted, looping, playsInline,
              preload="none" + IntersectionObserver, no controls/UI, and a static poster
              shown under prefers-reduced-motion. object-fit: cover keeps the face centered.
              The Ph aspect-ratio reserves the space, so there is no layout shift. */}
          <Reveal>
            <Ph label="AVEN · editorial imagery" meta="natural light · 4:5" aspect="4/5" className="aesthetics-philosophy-media">
              <Video src="/assets/aesthetics-philosophy.mp4" poster="/assets/aesthetics-philosophy.jpg" />
            </Ph>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Why AVEN</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "28px 0 28px", maxWidth: "20ch", fontWeight: 300 }}>
              Aesthetics as <em>medicine</em>, practiced with restraint.
            </h2>
            <p className="body" style={{ marginBottom: 20, fontSize: 17, lineHeight: 1.85 }}>
              A treatment is easy to sell and easy to overdo. AVEN is built the other
              way — around restraint, proportion, and the long view. The goal is never
              a dramatic change; it's that you look like yourself, rested, and no one
              can quite say why.
            </p>
            <p className="body" style={{ marginBottom: 20, fontSize: 17, lineHeight: 1.85 }}>
              That's why we read the whole face rather than chasing one line, why we
              favor the least intervention that achieves the result, and why every plan
              begins with a conversation instead of a syringe. Good aesthetic work is
              quiet, considered, and honest about what will and won't help.
            </p>
            <p className="body" style={{ color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 19 }}>
              Treatments are chapters in a longer relationship — not stand-alone purchases.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3 — GUIDING PRINCIPLES */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>Guiding Principles</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 68px)", margin: "20px 0 0", maxWidth: "18ch", fontWeight: 300 }}>
              Six ideas behind every <em>plan.</em>
            </h2>
          </Reveal>
          {/* Editorial ruled index — not boxed feature cards. A thin gold hairline tops
              each principle (no borders/fills/shadows), on the plain beige, with the
              number, serif title, and body. Keeps the 3-col grid string so the existing
              mobile stack rule still collapses it to a clean single-column ruled list. */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "64px 56px", marginTop: 64, alignItems: "start" }}>
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.n} delay={(i % 3) * 90}>
                <div style={{ borderTop: "1px solid var(--hairline)", paddingTop: 26 }}>
                  <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.24em" }}>{p.n}</div>
                  <h3 className="display" style={{ fontSize: "clamp(23px, 1.9vw, 28px)", margin: "18px 0 12px", fontWeight: 400, letterSpacing: "-0.005em" }}>{p.k}</h3>
                  <p className="body-sm" style={{ margin: 0 }}>{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — TREATMENT CATEGORIES (editorial context → existing landing pages) */}
      <section className="section" style={{ background: "var(--bg-1)", paddingBottom: 24 }}>
        <div className="container">
          <Reveal>
            <Eyebrow>Treatment Categories</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 68px)", margin: "20px 0 16px", maxWidth: "20ch", fontWeight: 300 }}>
              Where each treatment <em>fits.</em>
            </h2>
            <p className="body" style={{ maxWidth: "60ch" }}>
              Four ways we work — each with its own purpose and philosophy. Explore a
              category, then step into the detailed page for anything that fits you.
            </p>
          </Reveal>
        </div>
      </section>

      {CATEGORIES.map((c, ci) => (
        <section key={c.eyebrow} className="section" style={ci % 2 === 1 ? { background: "var(--bg-1)" } : undefined}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 64, alignItems: "start" }}>
            <Reveal>
              {/* Quiet wayfinding: number the four pathways 01–04 in the gold eyebrow. */}
              <Eyebrow>{`${String(ci + 1).padStart(2, "0")} · ${c.eyebrow}`}</Eyebrow>
              <h3 className="display" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", margin: "18px 0 20px", maxWidth: "16ch", fontWeight: 300 }}>{c.headline}</h3>
              <p className="body" style={{ maxWidth: "42ch" }}>{c.lede}</p>
            </Reveal>
            <Reveal delay={120}>
              <div className="tx-grid">
                {c.treatments.map((t) => (
                  <TreatmentCard key={t.path} t={t} navigate={navigate} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* 5 — RELATED CONCERNS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>Related Concerns</Eyebrow>
            <div className="cx-head" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 40 }}>
              <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 60px)", margin: "20px 0 0", maxWidth: "20ch", fontWeight: 300 }}>
                Arrived with a concern, not a <em>treatment?</em>
              </h2>
              <a href="/concerns" onClick={(e) => { e.preventDefault(); navigate("/concerns"); }} className="link">
                <span>All patient concerns</span><span className="arrow"></span>
              </a>
            </div>
            <p className="body" style={{ margin: "22px 0 48px", maxWidth: "58ch" }}>
              Many patients start from what they've noticed, not a procedure. These pages
              explain the causes — then point to the right options.
            </p>
          </Reveal>
          {/* Editorial concern index — de-boxed rows (styles in .cx-row): a thin top
              hairline, the serif concern name, and a restrained gold arrow. Terser and
              3-up so it reads as a quick concern directory, distinct from the treatment
              index above. The whole row stays one clickable link to the same page. */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "44px 48px", alignItems: "start" }}>
            {CONCERNS.map((c, i) => (
              <Reveal key={c.path} delay={(i % 3) * 80}>
                <a
                  href={c.path}
                  onClick={(e) => { e.preventDefault(); navigate(c.path); }}
                  className="cx-row"
                >
                  <span className="cx-name">{c.n}</span>
                  <span aria-hidden="true" className="cx-arrow">&rarr;</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — THE AVEN ASSESSMENT (before treatment selection) */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 72, alignItems: "center" }}>
          <Reveal>
            <Eyebrow>The AVEN Assessment</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.2vw, 56px)", margin: "18px 0 22px", maxWidth: "18ch", fontWeight: 300 }}>
              Every plan begins <em>here.</em>
            </h2>
            <p className="body" style={{ marginBottom: 22, maxWidth: "48ch" }}>
              Before any treatment is chosen, there's a conversation. The AVEN
              Assessment reviews your history, goals, and options — and turns them
              into an honest, individualized plan, with no pressure to proceed.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
              <AssessmentCTA navigate={navigate} />
              <a href="/assessment" onClick={(e) => { e.preventDefault(); navigate("/assessment"); }} className="link">
                <span>How the Assessment works</span><span className="arrow"></span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Ph label="The practice · consultation" meta="natural light · 4:5 · placeholder" aspect="4/5">
              <Video src="/assets/sculptra-v2.mp4" />
            </Ph>
          </Reveal>
        </div>
      </section>

      {/* 6b — THE AVEN BRIDAL JOURNEY (featured) */}
      <section className="section">
        <div className="container">
          <Reveal>
            {/* Editorial feature — de-boxed. A single top hairline marks this as a
                signature moment (no surrounding border, no clay fill, no shadow). Left
                carries the information + CTA; right carries the romantic line as a
                deliberate enlarged epigraph rather than a logo floating in empty space. */}
            <div className="bridal-feature" style={{ borderTop: "1px solid var(--hairline)", paddingTop: "clamp(40px, 5vw, 64px)", display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "clamp(48px, 6vw, 96px)", alignItems: "center" }}>
              <div>
                <Eyebrow>A Signature Experience</Eyebrow>
                <h2 className="display" style={{ fontSize: "clamp(32px, 4.2vw, 56px)", margin: "18px 0 20px", maxWidth: "16ch", fontWeight: 300 }}>
                  The AVEN <em>Bridal Journey.</em>
                </h2>
                <p className="body" style={{ marginBottom: 26, maxWidth: "48ch" }}>
                  For brides, a personalized path to your wedding day — aesthetics, skin health,
                  and wellness, planned around your date and shaped by your AVEN Assessment.
                </p>
                <a href="/bridal-journey" onClick={(e) => { e.preventDefault(); navigate("/bridal-journey"); }} className="link">
                  <span>Explore the Bridal Journey</span><span className="arrow"></span>
                </a>
              </div>
              <div className="bridal-epigraph" style={{ textAlign: "right" }}>
                <Logo size={40} style={{ opacity: 0.8, marginLeft: "auto" }} />
                <div className="display italic" style={{ fontSize: "clamp(24px, 2.8vw, 34px)", color: "var(--ivory-soft)", marginTop: 24, maxWidth: "14ch", marginLeft: "auto", fontWeight: 300, lineHeight: 1.35 }}>
                  Begin early. Arrive as yourself.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7 — MEET YOUR PROVIDER */}
      <section className="section">
        <div className="container provider-grid" style={{ display: "grid", gridTemplateColumns: "0.6fr 1fr", gap: 64, alignItems: "center", maxWidth: 1120 }}>
          <Reveal>
            <Ph label="Alaa Mashal, MSN, APRN, FNP-BC · portrait" meta="natural light · 4:5 · placeholder" aspect="4/5">
              <Video src="/assets/alaa-2.mp4" />
            </Ph>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>Meet Your Provider</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.2vw, 56px)", margin: "18px 0 22px", maxWidth: "18ch", fontWeight: 300 }}>
              One practitioner, <em>always.</em>
            </h2>
            <p className="body" style={{ marginBottom: 22, maxWidth: "48ch" }}>
              Every treatment at AVEN is performed by Alaa Mashal, MSN, APRN, FNP-BC — founder,
              clinical director, and the only injector at the practice. The person who
              assesses you is the person who cares for you.
            </p>
            <a href="/providers/alaa-mashal" onClick={(e) => { e.preventDefault(); navigate("/providers/alaa-mashal"); }} className="link">
              <span>Meet Alaa</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>

      <DividerMark />

      {/* 8 — CLOSER (a quiet final invitation, NOT a second Assessment pitch).
          The AVEN Assessment section above is the substantive conversion moment with the
          primary solid CTA. Here the pitch prose is dropped and the CTA is demoted to the
          quiet .link treatment — a retained, lower-intensity conversion, still tracked
          (data-aven-cta="assessment" via AssessmentCTA) — so the two stop competing. */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={40} style={{ margin: "0 auto 26px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 80px)", margin: "0 auto 40px", maxWidth: "14ch", fontWeight: 300 }}>
              Begin with a <em>conversation.</em>
            </h2>
            <AssessmentCTA navigate={navigate} className="link" />
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default AestheticsPage;
