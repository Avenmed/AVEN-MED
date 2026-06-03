/* AVEN MED — Home */
import React from 'react';
import { DividerMark, Eyebrow, Logo, Ph, Reveal } from '../components.jsx';

const Home = ({ navigate }) => {
  return (
    <main className="page">
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <Ph
          className="bg"
          label=""
          meta=""
          style={{ position: "absolute", inset: 0, border: 0 }}
        />
        <div className="container hero-inner">
          <div>
            <Eyebrow>The AVEN Clinic · Est. 2026</Eyebrow>
            <h1 style={{ marginTop: 26 }}>
              The quiet art<br />
              of <em>looking</em><br />
              like yourself.
            </h1>
            <p className="lede" style={{ marginTop: 28, maxWidth: "38ch" }}>
              A private practice built around restraint,
              anatomy, and the long relationship between a face and its years.
            </p>
            <div style={{ display: "flex", gap: 18, marginTop: 38, flexWrap: "wrap" }}>
              <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
                <span>Begin a Reading</span>
                <span className="arrow"></span>
              </a>
              <a href="#/reading" onClick={(e) => { e.preventDefault(); navigate("/reading"); }} className="btn">
                <span>Discover AURA · Our Philosophy</span>
                <span className="arrow"></span>
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 40, alignItems: "flex-end", justifyContent: "space-between" }}>
            <div className="face-line-wrap" aria-hidden="true">
              <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
                <path className="face-line" d="M 260,80 C 220,50 165,55 145,90 C 110,180 110,210 145,222 C 180,228 230,224 252,242 C 272,262 275,290 268,310 C 260,325 244,330 252,346 C 258,362 248,378 240,392 C 200,412 165,418 150,442 C 140,468 138,492 145,500" />
                <path className="face-line detail" d="M 188,202 Q 215,192 240,210" />
                <path className="face-line accent" d="M 240,338 Q 256,344 270,340" />
              </svg>
            </div>
            <div className="meta">
              <span>Orland Park · By Appointment</span>
              <span>Aesthetics · Wellness · Aura</span>
              <span style={{ color: "var(--gold)" }}>Now welcoming founding members</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <div className="ribbon">
        {[0, 1].map((i) => (
          <div key={i} className="row" aria-hidden={i === 1}>
            {[
              "Quiet luxury", "Anatomy-led artistry", "Educational Reading",
              "Membership care", "Aura skin analysis", "Concierge wellness",
              "Natural refinement", "Restraint as a practice"
            ].map((w, idx) => (
              <React.Fragment key={idx}>
                <span>{w}</span>
                <Logo size={18} style={{ opacity: 0.55 }} />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      {/* ---------- INTRO STATEMENT ---------- */}
      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
          <Reveal>
            <Eyebrow>A New Philosophy</Eyebrow>
            <div className="label" style={{ marginTop: 22, color: "var(--muted)" }}>01 — Clinic Notes</div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 64px)", margin: 0, maxWidth: "22ch" }}>
              We treat the face as a quiet, continuous practice — not a transaction.
              At AVEN, every visit is a <em style={{ fontStyle: "italic" }}>conversation</em>
              {" "}before it is a treatment.
            </h2>
            <p className="body" style={{ marginTop: 32 }}>
              The clinic was built for patients who want to age beautifully without
              looking treated. We work slowly, in millimeters, with anatomy as our
              first language and education as our second. There are no upsells here,
              no rotating providers, and no waiting rooms full of other faces.
            </p>
            <div style={{ marginTop: 36 }}>
              <a href="#/about" onClick={(e) => { e.preventDefault(); navigate("/about"); }} className="link">
                <span>Read the philosophy</span><span className="arrow"></span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- EDITORIAL TRIPTYCH ---------- */}
      <section style={{ padding: "0 0 clamp(80px, 10vw, 140px)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr 1fr", gap: 18, alignItems: "stretch" }}>
            <Reveal style={{ aspectRatio: "3/4" }}>
              <Ph label="Editorial · soft profile" meta="warm key light · 35mm" aspect="3/4" style={{ width: "100%", height: "100%" }} />
            </Reveal>
            <Reveal delay={140} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "24px 12px" }}>
              <div>
                <Eyebrow>Aesthetics · Wellness · Aura</Eyebrow>
                <h3 className="display" style={{ fontSize: 38, marginTop: 22, lineHeight: 1.1 }}>
                  Three practices,<br />one long <em>relationship.</em>
                </h3>
              </div>
              <p className="body-sm">
                Treatment plans are written across years, not appointments. We map
                your face, your wellness, and your goals into a single quiet pathway.
              </p>
              <a href="#/aesthetics" onClick={(e) => { e.preventDefault(); navigate("/aesthetics"); }} className="link" style={{ alignSelf: "flex-start" }}>
                <span>The Practices</span><span className="arrow"></span>
              </a>
            </Reveal>
            <Reveal delay={260} style={{ aspectRatio: "3/4" }}>
              <Ph label="Aura scan · skin map overlay" meta="hi-res derm imaging" aspect="3/4" style={{ width: "100%", height: "100%" }} />
            </Reveal>
          </div>
        </div>
      </section>

      <DividerMark />

      {/* ---------- PRACTICES (3 cards) ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <Eyebrow>02 — Practices</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "20px 0 0", maxWidth: "16ch" }}>
              A practice for every <em>quiet</em> chapter of the face.
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 80 }}>
            {[
              {
                k: "Aesthetics", path: "/aesthetics",
                tag: "Anatomy · Restraint",
                copy: "Neuromodulators, facial balancing, skin biostimulators — performed by a single injector, in millimeters, with patience.",
                ph: "Lip · profile · soft focus"
              },
              {
                k: "Wellness", path: "/wellness",
                tag: "Prevention · Vitality",
                copy: "Concierge primary care, IV therapy, hormone and longevity panels. Wellness as the architecture beneath the skin.",
                ph: "Botanical · ivory linen still"
              },
              {
                k: "Aura", path: "/reading",
                tag: "Education · Analysis",
                copy: "A skin analysis and Reading system that maps your face, plans your pathway, and explains rather than sells.",
                ph: "Aura console · soft halo light"
              }
            ].map((p, i) => (
              <Reveal key={p.k} delay={i * 120}>
                <a href={"#" + p.path} onClick={(e) => { e.preventDefault(); navigate(p.path); }} className="tile" style={{ display: "block" }}>
                  <Ph label={p.ph} className="tile-media" />
                  <div className="tile-body">
                    <div className="label" style={{ color: "var(--gold)" }}>{p.tag}</div>
                    <h4>{p.k}</h4>
                    <p className="body-sm">{p.copy}</p>
                    <div style={{ marginTop: 8 }}>
                      <span className="link" style={{ borderBottom: 0, padding: 0 }}>
                        <span>Enter</span><span className="arrow"></span>
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INJECTOR / FEATURE ---------- */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center" }}>
          <Reveal>
            <Ph label="Injector · portrait" meta="natural window light · medium format" aspect="4/5" />
          </Reveal>
          <Reveal delay={160}>
            <Eyebrow>03 — Meet your Injector</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 24px", maxWidth: "18ch" }}>
              Alaa <em>Mashal,</em><br />FNP-BC
            </h2>
            <p className="lede" style={{ marginBottom: 22 }}>
              "I read a face the way one reads a long letter — slowly, in
              context, and never out loud."
            </p>
            <p className="body">
              Board-certified as a Family Nurse Practitioner, Alaa Mashal, FNP-BC is the
              sole injector at AVEN. She does not believe in rotating providers,
              package upsells, or treatments that announce themselves. Her
              Readings are educational and her hand is famously restrained.
            </p>
            <div style={{ marginTop: 38, display: "flex", gap: 22, flexWrap: "wrap" }}>
              <a href="#/about" onClick={(e) => { e.preventDefault(); navigate("/about"); }} className="btn">
                <span>Read her Philosophy</span><span className="arrow"></span>
              </a>
              <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="link">
                <span>Book with Alaa Mashal</span><span className="arrow"></span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="section tight">
        <div className="container">
          <div className="stat-row">
            {[
              { n: "12+", l: "Years in practice" },
              { n: "1", l: "Injector, every visit" },
              { n: "98%", l: "Returning patients" },
              { n: "0", l: "Upsells, ever" }
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100} className="stat">
                <div className="num">{s.n}</div>
                <div className="lbl">{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- AURA TEASE ---------- */}
      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <Logo size={520} style={{ position: "absolute", right: "-120px", top: "10%", opacity: 0.06 }} />
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center" }}>
          <Reveal>
            <div className="aura-orb">
              <div className="ring"><span className="pip"></span></div>
              <div className="ring r2"><span className="pip"></span></div>
              <div className="ring r3"><span className="pip"></span></div>
              <div className="ring r4"><span className="pip"></span></div>
              <div className="core"></div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <Eyebrow>04 — The Reading</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 24px", maxWidth: "16ch" }}>
              Your face,<br />mapped in <em>light.</em>
            </h2>
            <p className="body">
              Aura is our proprietary skin-reading system — a high-resolution
              skin analysis that maps pigmentation, vascular tone, collagen
              density, and surface texture, then translates the data into a
              calm, year-long care pathway. It does not prescribe. It explains.
            </p>
            <div style={{ marginTop: 32 }}>
              <a href="#/reading" onClick={(e) => { e.preventDefault(); navigate("/reading"); }} className="btn">
                <span>Enter AURA</span><span className="arrow"></span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- TESTIMONIAL ---------- */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <Reveal>
            <div className="quote">
              <span className="mark">"</span>
              I have been to many clinics. AVEN is the first that asked me
              what I wanted to keep — before asking what I wanted to change.
            </div>
            <div style={{ marginTop: 38, display: "flex", alignItems: "center", gap: 16 }}>
              <Ph label="Patient · M." style={{ width: 56, height: 56, borderRadius: "50%" }} />
              <div>
                <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 18 }}>Maren, 42</div>
                <div className="label" style={{ marginTop: 4, color: "var(--muted)" }}>Member · Two years</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
              {[
                ["On restraint", "She does less than I ask for, every time. And every time, I'm grateful."],
                ["On the Reading", "We spent the first appointment doing nothing but looking. It changed how I see my own face."],
                ["On the room", "It is the quietest medical room I have ever been in. Like a small museum."]
              ].map(([t, q], i) => (
                <div key={t} style={{ padding: "24px 0", borderTop: "1px solid var(--hairline)" }}>
                  <div className="label" style={{ color: "var(--gold)" }}>{t}</div>
                  <div style={{ marginTop: 12, fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 20, lineHeight: 1.5, color: "var(--ivory)" }}>
                    "{q}"
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- BREATH MOMENT ---------- */}
      <section style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px",
        background: "var(--bg)",
      }}>
        <Reveal>
          <Logo size={32} style={{ opacity: 0.9, margin: "0 auto 40px" }} />
          <p className="display italic" style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "var(--ivory)",
            margin: 0,
            maxWidth: "18ch",
            lineHeight: 1.2,
            fontWeight: 300,
          }}>
            Look before you touch.
          </p>
        </Reveal>
      </section>

      {/* ---------- MEMBERSHIP TEASE ---------- */}
      <section className="section">
        <div className="container">
          <Reveal style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 40 }}>
            <div>
              <Eyebrow>05 — Memberships</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "20px 0 0", maxWidth: "16ch" }}>
                Care that compounds <em>quietly,</em> over years.
              </h2>
            </div>
            <a href="#/memberships" onClick={(e) => { e.preventDefault(); navigate("/memberships"); }} className="link">
              <span>Compare Memberships</span><span className="arrow"></span>
            </a>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 60 }}>
            {[
              { tier: "AVEN Essential", price: "Monthly contribution", per: "Determined at your Reading", desc: "Foundational continuity care. Monthly treatment banking, personalized pathway, priority booking." },
              { tier: "AVEN Elevate", price: "By application", per: "Structured to your plan", desc: "Concierge access. VIP Saturday hours, two annual Aura readings, first access to new treatments.", feat: true }
            ].map((p, i) => (
              <Reveal key={p.tier} delay={i * 140} className={"plan" + (p.feat ? " feat" : "")}>
                <div className="tier">{p.tier}{p.feat && <span style={{ color: "var(--ivory-soft)", marginLeft: 14 }}>· Founding</span>}</div>
                <h3>{p.tier.replace("AVEN ", "")}</h3>
                <p className="body-sm" style={{ margin: 0, maxWidth: "44ch" }}>{p.desc}</p>
                <div className="price"><span className="amt" style={{ fontSize: "0.42em", fontStyle: "italic", letterSpacing: "0.02em" }}>{p.price}</span></div>
                <div className="label" style={{ color: "var(--muted)", marginTop: -8 }}>{p.per}</div>
                <a href="#/memberships" onClick={(e) => { e.preventDefault(); navigate("/memberships"); }} className="link" style={{ alignSelf: "flex-start" }}>
                  <span>Inquire</span><span className="arrow"></span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- JOURNAL TEASE ---------- */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 40 }}>
            <Reveal>
              <Eyebrow>06 — Journal</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 56px)", margin: "20px 0 0", maxWidth: "18ch" }}>
                Slow notes from the <em>clinic.</em>
              </h2>
            </Reveal>
            <a href="#" className="link"><span>All journal</span><span className="arrow"></span></a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 60 }}>
            {[
              ["Field Notes 04", "On the architecture of a balanced face.", "Six minute read"],
              ["Field Notes 03", "Why we map collagen before we map a treatment.", "Eight minute read"],
              ["Field Notes 02", "A practice for the face in its forties.", "Five minute read"]
            ].map(([k, t, m], i) => (
              <Reveal key={k} delay={i * 120}>
                <Ph label="Editorial still" aspect="4/3" />
                <div className="label" style={{ marginTop: 22, color: "var(--gold)" }}>{k}</div>
                <h4 className="display" style={{ fontSize: 26, margin: "12px 0 14px", lineHeight: 1.2 }}>{t}</h4>
                <div className="body-sm" style={{ color: "var(--muted)" }}>{m}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section" style={{ textAlign: "center", padding: "clamp(100px, 12vw, 180px) 0" }}>
        <div className="container">
          <Reveal>
            <Logo size={48} style={{ margin: "0 auto 38px" }} />
            <Eyebrow>Begin Quietly</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 88px)", margin: "26px auto 28px", maxWidth: "14ch" }}>
              Step into the <em>clinic.</em>
            </h2>
            <p className="body" style={{ margin: "0 auto 44px" }}>
              First Readings are 90 minutes, by appointment, and include
              an Aura skin analysis. There is no pressure, and nothing is
              prescribed on the first visit.
            </p>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
              <span>Begin a Reading</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------- GALLERY STRIP (3 squares, no captions) ---------- */}
      <section style={{ padding: "0 0 clamp(80px, 8vw, 120px)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            <Reveal style={{ aspectRatio: "1/1" }}>
              <Ph label="Interior · wide" meta="plaster · warm tungsten · 16mm" aspect="1/1" style={{ width: "100%", height: "100%" }} />
            </Reveal>
            <Reveal delay={100} style={{ aspectRatio: "1/1" }}>
              <Ph label="Hand detail" meta="brass instrument · ivory tile" aspect="1/1" style={{ width: "100%", height: "100%" }} />
            </Reveal>
            <Reveal delay={200} style={{ aspectRatio: "1/1" }}>
              <Ph label="Still life · sprig · stone" meta="natural light · 50mm" aspect="1/1" style={{ width: "100%", height: "100%" }} />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default Home;
