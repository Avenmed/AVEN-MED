/* AVEN MED — Patient Concerns hub.
 *
 * The entry point to the concern pages: it bridges a symptom to individualized
 * treatment planning through the AVEN Assessment. Routed from app.jsx. The
 * concern CARDS are derived from the content registry via getHubEntries('concern')
 * — each concern page carries its own hub card (group, blurb, order) — so newly
 * registered concerns appear here automatically. Only the group headers, their
 * ledes, and group order are editorial and kept here. */
import React from 'react';
import { Eyebrow, Reveal, HeroBg, AssessmentCTA, DividerMark, Logo, Ph } from '../components.jsx';
import Video from '../Video.jsx';
import { getHubEntries } from '../content/registry.jsx';

// Editorial group headers, ledes, and order. Concern cards are matched into a
// group by each page's `hub.group`. A concern whose group isn't listed here
// still appears, under a trailing "More Concerns" group — never silently dropped.
const GROUP_META = [
  { k: "Lines, Volume & Laxity", lede: "The structural and surface changes of aging — approached by cause, not by a single default treatment." },
  { k: "Tone, Texture & Clarity", lede: "Skin-quality concerns that respond best to a sequenced plan rather than one aggressive treatment." },
  { k: "Blemishes & Scarring", lede: "Active breakouts and the marks they leave — treated in the right order, never at once." },
  { k: "Medical Concerns", lede: "Concerns that are medical first — evaluated and treated as such." },
];

// Guiding principles — how AVEN approaches a concern, before naming treatments.
const PRINCIPLES = [
  { n: "01", k: "Cause Before Treatment", b: "We identify what's actually driving a concern before choosing how to treat it. The diagnosis shapes the plan, not the other way around." },
  { n: "02", k: "No Single Default", b: "The same concern can have different causes in different people. There's no one-size treatment — only the one that fits you." },
  { n: "03", k: "Individualized Plans", b: "Every plan is mapped to your skin, history, and goals, and sequenced sensibly over time." },
  { n: "04", k: "Honest Expectations", b: "We're clear about what's realistically achievable — meaningful improvement, never a guarantee." },
  { n: "05", k: "Assessment-First", b: "Nothing is recommended before the AVEN Assessment. The plan follows the conversation." },
  { n: "06", k: "The Long View", b: "Sustainable, sequenced care over quick fixes — the changes that last." },
];

// Where concerns lead — the parts of the practice a plan may open into.
const LEADS = [
  { n: "Aesthetics", d: "Considered, natural-looking treatments for the face and skin.", path: "/aesthetics" },
  { n: "Wellness", d: "Prevention-first wellness, skin health, and metabolic care.", path: "/wellness" },
  { n: "Family Medicine", d: "Relationship-based primary care for the medical concerns.", path: "/family-medicine" },
];

const ConcernsPage = ({ navigate }) => {
  const entries = getHubEntries("concern");
  const known = new Set(GROUP_META.map((g) => g.k));
  const groups = GROUP_META.map((g) => ({ ...g, items: entries.filter((e) => e.group === g.k) }));
  const leftover = entries.filter((e) => !e.group || !known.has(e.group));
  if (leftover.length) groups.push({ k: "More Concerns", lede: "Further concerns we evaluate and treat.", items: leftover });
  const shown = groups.filter((g) => g.items.length > 0);

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

      {/* WHY AVEN (philosophy before the concern directory) */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "center", maxWidth: 1120 }}>
          <Reveal>
            <Eyebrow>Why AVEN</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "0 0 26px", maxWidth: "20ch", fontWeight: 300 }}>
              The <em>cause</em> comes before the treatment.
            </h2>
            <p className="body" style={{ marginBottom: 20, fontSize: 17, lineHeight: 1.85 }}>
              A concern is what you notice; the cause is what actually needs treating —
              and the two aren't always the same. Fine lines, uneven tone, or breakouts
              can each have several different drivers, and the right plan depends entirely
              on which one is yours.
            </p>
            <p className="body" style={{ marginBottom: 20, fontSize: 17, lineHeight: 1.85 }}>
              So we start by understanding, not by reaching for a default treatment. These
              pages explain what may be behind each concern; the AVEN Assessment then turns
              that into an honest, individualized plan — one built around your skin, your
              history, and your goals.
            </p>
            <p className="body" style={{ color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 19 }}>
              Name what you've noticed. We'll help you understand why — and what genuinely fits.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>Guiding Principles</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 68px)", margin: "20px 0 0", maxWidth: "18ch", fontWeight: 300 }}>
              How we approach a <em>concern.</em>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 56 }}>
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.n} delay={(i % 3) * 90}>
                <div style={{ padding: "36px 28px", border: "1px solid var(--hairline)", height: "100%", background: "var(--surface)" }}>
                  <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.2em" }}>{p.n}</div>
                  <h3 className="display" style={{ fontSize: 26, margin: "20px 0 14px", fontWeight: 400 }}>{p.k}</h3>
                  <p className="body-sm" style={{ margin: 0 }}>{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONCERN DIRECTORY — intro */}
      <section className="section" style={{ background: "var(--bg-1)", paddingBottom: 24 }}>
        <div className="container">
          <Reveal>
            <Eyebrow>Explore by Concern</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 68px)", margin: "20px 0 16px", maxWidth: "20ch", fontWeight: 300 }}>
              Start with what you've <em>noticed.</em>
            </h2>
            <p className="body" style={{ maxWidth: "60ch" }}>
              Grouped by what they have in common — each page explains the likely causes,
              then points toward the options worth considering.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GROUPS (cards derived from the registry) */}
      {shown.map((g, gi) => (
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
                      <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "var(--ivory)" }}>{it.label}</span>
                      <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 18, lineHeight: 1, flexShrink: 0 }}>&rarr;</span>
                    </div>
                    <p className="body-sm" style={{ marginTop: 14, color: "var(--muted)" }}>{it.blurb}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* WHERE CONCERNS LEAD */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>Where Concerns Lead</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 60px)", margin: "20px 0 16px", maxWidth: "22ch", fontWeight: 300 }}>
              From concern to <em>care.</em>
            </h2>
            <p className="body" style={{ marginBottom: 48, maxWidth: "60ch" }}>
              A concern rarely stays a concern for long — it becomes a plan. Depending on
              the cause, that plan may open into any part of the practice.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {LEADS.map((l, i) => (
              <Reveal key={l.path} delay={(i % 3) * 80}>
                <a
                  href={l.path}
                  onClick={(e) => { e.preventDefault(); navigate(l.path); }}
                  style={{ display: "block", padding: "30px 30px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%", transition: "border-color 240ms ease" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14 }}>
                    <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "var(--ivory)" }}>{l.n}</span>
                    <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 18, lineHeight: 1, flexShrink: 0 }}>&rarr;</span>
                  </div>
                  <p className="body-sm" style={{ marginTop: 14, color: "var(--muted)" }}>{l.d}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE AVEN ASSESSMENT */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 72, alignItems: "center" }}>
          <Reveal>
            <Eyebrow>The AVEN Assessment</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.2vw, 56px)", margin: "18px 0 22px", maxWidth: "18ch", fontWeight: 300 }}>
              An expert read on the <em>cause.</em>
            </h2>
            <p className="body" style={{ marginBottom: 22, maxWidth: "48ch" }}>
              Understanding a concern is the first step; the AVEN Assessment turns it into a
              plan. It's an honest read on what's actually driving what you've noticed — and
              the options that genuinely fit, with no pressure to proceed.
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
              <Video src="assets/skin-rejuvenation.mp4" />
            </Ph>
          </Reveal>
        </div>
      </section>

      {/* MEET YOUR PROVIDER */}
      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 72, alignItems: "center" }}>
          <Reveal>
            <Ph label="Alaa Mashal, MSN, APRN, FNP-BC · portrait" meta="natural light · 4:5 · placeholder" aspect="4/5">
              <Video src="assets/alaa-2.mp4" />
            </Ph>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>Meet Your Provider</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.2vw, 56px)", margin: "18px 0 22px", maxWidth: "18ch", fontWeight: 300 }}>
              One practitioner, <em>always.</em>
            </h2>
            <p className="body" style={{ marginBottom: 22, maxWidth: "48ch" }}>
              You'll be cared for by Alaa Mashal, MSN, APRN, FNP-BC — founder and clinical director of
              AVEN MED. The person who reads your concern is the person who plans and
              delivers your care.
            </p>
            <a href="/providers/alaa-mashal" onClick={(e) => { e.preventDefault(); navigate("/providers/alaa-mashal"); }} className="link">
              <span>Meet Alaa</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>

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
