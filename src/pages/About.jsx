/* AVEN MED — About / Philosophy / Injector */

import React from 'react';
import { Eyebrow, Logo, Ph, Reveal, HeroBg, AssessmentCTA } from '../components.jsx';
import Video from '../Video.jsx';

const AboutPage = ({ navigate }) => {
  return (
    <main className="page about-with-bg">
      {/* FOUNDER — Alaa Mashal, MSN, APRN, FNP-BC (FIRST on page) */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 80 }}>
        <HeroBg />
        <div className="container" style={{ maxWidth: 1120 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "center" }}>
            <Reveal>
              <Ph label="Alaa Mashal, MSN, APRN, FNP-BC · environmental portrait" meta="natural light · medium format · 4:5" aspect="4/5">
                <Video src="assets/alaa-2.mp4" />
              </Ph>
            </Reveal>
            <Reveal delay={140}>
              <Eyebrow>· The Practitioner</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(40px, 5.4vw, 78px)", margin: "24px 0 24px", lineHeight: 1.05, maxWidth: "16ch", letterSpacing: "-0.012em" }}>
                <em>Alaa Mashal,</em><br />MSN, APRN, FNP-BC.
              </h1>
              <div className="label" style={{ color: "var(--gold)", marginBottom: 28 }}>Founder · Clinical Director</div>
              <p className="body" style={{ fontSize: 17, lineHeight: 1.85, maxWidth: "56ch" }}>
                AVEN MED is founded and led by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified
                Family Nurse Practitioner whose practice is built around restraint
                and the long view of patient care. She is the only injector
                at AVEN MED; you will only ever be treated by her.
              </p>
              {/* About = the practice, story & philosophy; the provider page = Alaa's
                  credentials, approach & clinical journey. Make that relationship clear. */}
              <div style={{ marginTop: 28 }}>
                <a href="/providers/alaa-mashal" onClick={(e) => { e.preventDefault(); navigate("/providers/alaa-mashal"); }} className="link">
                  <span>Meet Alaa Mashal</span><span className="arrow"></span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ALAA IN ACTION — video below the portrait */}
      <section style={{ paddingBottom: 44 }}>
        <div className="container">
          <Reveal>
            <Ph label="The practice · interior wide" meta="warm tungsten · plaster · 21:9" aspect="21/9">
              <Video src="assets/alaa-loop-2.mp4" />
            </Ph>
          </Reveal>
        </div>
      </section>

      {/* HERO — AVEN MED story (centered logo + editorial essay) */}
      <section style={{ paddingTop: 44, paddingBottom: 44, position: "relative" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <Reveal style={{ textAlign: "center" }}>
            <Logo size={84} style={{ margin: "0 auto 36px" }} />
            <Eyebrow>The AVEN Story</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(48px, 6.4vw, 96px)", margin: "28px auto 12px", lineHeight: 1.02, maxWidth: "16ch", letterSpacing: "-0.012em" }}>
              A name that became its own <em>meaning.</em>
            </h2>
            <div className="label" style={{ color: "var(--muted)", marginTop: 22 }}>Founded · Orland Park · 2026</div>
          </Reveal>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 28 }}>
            <Reveal>
              <p className="lede" style={{ fontSize: "clamp(20px, 1.7vw, 24px)", textAlign: "center", maxWidth: "44ch", margin: "0 auto" }}>
                AVEN MED was created around the idea that aesthetics and wellness
                are a journey — not a one-time treatment.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <p className="body" style={{ fontSize: 17, lineHeight: 1.85, margin: "32px auto 0", maxWidth: "62ch" }}>
                The name <em style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>AVEN</em> comes
                from the inspiration of an avenue — a path, a direction, a
                progression forward. Every patient walks into AVEN at a
                different stage in life, and our goal is to guide them through
                that journey with intention, education, honesty, and
                personalized care.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="body" style={{ fontSize: 17, lineHeight: 1.85, margin: "0 auto", maxWidth: "62ch" }}>
                AVEN is not a word you'll find in the dictionary, and that was
                intentional. We wanted to create something original — a name
                that could become its own meaning over time. A name that feels
                calm, refined, timeless, and elevated. To us, AVEN represents
                growth, confidence, wellness, natural beauty, and long-term
                refinement.
              </p>
            </Reveal>

            {/* Botanical pause */}
            <Reveal delay={180} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, padding: "44px 0 32px" }}>
              <span style={{ flex: 1, maxWidth: 160, height: 1, background: "var(--hairline)" }}></span>
              <Logo size={28} />
              <span style={{ flex: 1, maxWidth: 160, height: 1, background: "var(--hairline)" }}></span>
            </Reveal>

            <Reveal>
              <p className="display italic" style={{ fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: 1.45, textAlign: "center", color: "var(--ivory)", maxWidth: "30ch", margin: "0 auto" }}>
                "The botanical emblem reflects our philosophy: growth, balance,
                renewal — beauty that evolves naturally over time."
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="body" style={{ fontSize: 17, lineHeight: 1.85, margin: "44px auto 0", maxWidth: "62ch" }}>
                We believe aesthetics should support what already exists — not
                change who you are. Our philosophy has always been centered
                around prevention, restraint, skin health, and helping
                patients feel like the best version of themselves.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className="body" style={{ fontSize: 17, lineHeight: 1.85, margin: "0 auto", maxWidth: "62ch" }}>
                At AVEN MED, assessments are not built around selling
                treatments. They are built around education, trust, and
                creating personalized pathways for each patient. Whether it's
                aesthetics, skin health, collagen support, wellness, or
                preventative care, our approach is always thoughtful,
                personalized, and long-term.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="body" style={{ fontSize: 17, lineHeight: 1.85, margin: "0 auto", maxWidth: "62ch" }}>
                AVEN MED was intentionally designed to feel different — slower,
                more personal, more refined. A place where patients feel
                comfortable, understood, educated, and cared for throughout
                every stage of their journey.
              </p>
            </Reveal>

            <Reveal delay={280} style={{ textAlign: "center", marginTop: 24 }}>
              <span className="label" style={{ color: "var(--gold)" }}>— The AVEN MED Philosophy</span>
            </Reveal>

          </div>
        </div>
      </section>

      {/* PHILOSOPHY GRID */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
            <Reveal>
              <Eyebrow>The Philosophy</Eyebrow>
              <div className="label" style={{ marginTop: 22, color: "var(--muted)" }}>Five rules</div>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ display: "grid", gap: 0 }}>
                {[
                  ["01", "You should always look like yourself.", "Care at AVEN supports what already exists. The goal is never to change who you are — only to support the long arc of your face across time."],
                  ["02", "Every assessment starts a relationship.", "We are not in the business of one-off visits. The assessment opens a long, considered relationship between practitioner and patient."],
                  ["03", "Every individual has their own treatment plan.", "No two faces, no two histories, no two goals are the same. Every plan is written by hand, for the patient in front of us."],
                  ["04", "One injector. Always.", "Continuity is the most undervalued ingredient in aesthetics. You will only ever be treated by Alaa Mashal, MSN, APRN, FNP-BC."],
                  ["05", "We educate, then we treat.", "If we have done our work properly, you will leave an Assessment understanding your face better than you did when you arrived."]
                ].map(([n, h, b]) => (
                  <div key={n} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 40, padding: "44px 0", borderTop: "1px solid var(--hairline)" }}>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.2em" }}>{n}</div>
                    <div>
                      <h3 className="display" style={{ fontSize: 34, margin: 0, fontWeight: 300, letterSpacing: "-0.005em" }}>{h}</h3>
                      <p className="body" style={{ marginTop: 14, maxWidth: "56ch" }}>{b}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="section" style={{ background: "var(--bg-1)", padding: "clamp(48px, 7vw, 80px) 0", position: "relative", overflow: "hidden" }}>
        <Logo size={420} style={{ position: "absolute", left: "-80px", top: "20%", opacity: 0.05 }} />
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--serif)", color: "var(--gold)", fontSize: 80, lineHeight: 0.5, marginBottom: 28 }}>"</div>
            <div className="display italic" style={{ fontSize: "clamp(30px, 4vw, 56px)", lineHeight: 1.3, maxWidth: "22ch", margin: "0 auto" }}>
              A face is not a problem to be solved.
              It is a long, slow letter the body
              is writing to itself.
            </div>
            <div className="label" style={{ marginTop: 40, color: "var(--gold)" }}>— ALAA MASHAL, MSN, APRN, FNP-BC</div>
          </Reveal>
        </div>
      </section>


      {/* CONSULTATION JOURNEY */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>What an Assessment Feels Like</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 0", maxWidth: "20ch" }}>
              Unhurried, in a <em>private</em> room.
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 48 }}>
            {[
              { t: "01", k: "Arrival", b: "You'll be greeted by staff." },
              { t: "02", k: "Assessment", b: "You'll meet Aura. A multispectral scan and skin map. One careful portrait of your face in light." },
              { t: "03", k: "Conversation", b: "We walk the map together. You ask. We explain. Nothing is prescribed yet." },
              { t: "04", k: "Pathway", b: "You leave with a year-long, written plan — yours to follow, yours to ignore. No obligation." }
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 100}>
                <div style={{ padding: "32px 24px", border: "1px solid var(--hairline)", height: "100%", background: "var(--bg)" }}>
                  <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.2em" }}>{s.t}</div>
                  <h4 className="display" style={{ fontSize: 28, margin: "20px 0 14px" }}>{s.k}</h4>
                  <p className="body-sm" style={{ margin: 0 }}>{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={42} style={{ margin: "0 auto 28px" }} />
            <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 80px)", margin: "16px auto 28px", maxWidth: "14ch" }}>
              Meet the <em>practice.</em>
            </h2>
            <p className="body" style={{ margin: "0 auto 44px" }}>
              Assessments are by appointment only and limited to a small
              number of new patients each month.
            </p>
            <AssessmentCTA navigate={navigate} to="/assessment" />
          </Reveal>
        </div>
      </section>
      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default AboutPage;
