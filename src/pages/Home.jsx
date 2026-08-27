/* AVEN MED — Home */
import React from 'react';
import { Eyebrow, Logo, Ph, Reveal, AssessmentCTA } from '../components.jsx';
import Video from '../Video.jsx';

const SERVICES = [
  "Neuromodulators", "Facial Filler", "Sculptra", "Radiesse",
  "Skin Boosters", "VAMP Under-Eye", "PRP",
  "Facials", "Chemical Peels", "Microneedling",
  "Family Medicine", "IV Therapy", "Vitamin Injections", "Weight Loss",
];

const Home = ({ navigate }) => {
  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <Video src="/assets/home-hero-bg-v2.mp4" />
        </div>
        <div className="container hero-inner">
          <div>
            <Eyebrow>· AVEN MED · Est. 2026</Eyebrow>
            <h1 style={{ marginTop: 26 }}>
              The art<br />
              of <em>looking</em><br />
              <em>like yourself.</em>
            </h1>
            <p className="lede" style={{ marginTop: 28, maxWidth: "44ch" }}>
              Every plan begins with the AVEN Assessment.<br />
              Aesthetics, wellness, and family medicine.
            </p>
            <div style={{ display: "flex", gap: 24, marginTop: 38, flexWrap: "wrap", alignItems: "center" }}>
              <AssessmentCTA navigate={navigate} />
              <a href="/about" onClick={(e) => { e.preventDefault(); navigate("/about"); }} className="link">
                <span>About AVEN</span>
                <span className="arrow"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-band">
          <span>Orland Park</span>
          <span className="band-dot">·</span>
          <span>By appointment</span>
        </div>
      </section>

      {/* MARQUEE — services in italic Cormorant Garamond */}
      <div className="ribbon">
        {[0, 1].map((i) => (
          <div key={i} className="row" aria-hidden={i === 1}>
            {SERVICES.map((w, idx) => (
              <React.Fragment key={idx}>
                <span>{w}</span>
                {/* Decorative separator only — alt="" so the visible row doesn't announce
                    "AVEN MED" between every service name. The service words stay readable
                    to assistive tech; only the duplicated row 2 is aria-hidden. */}
                <Logo size={18} alt="" style={{ opacity: 0.55 }} />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      {/* CLINICAL LEADERSHIP — repurposes the slot that held a silent olive-branch/clay
          video, which repeated the hero background's own motif 115px after the hero ended.
          Home named its practitioner once, 44% down the page, with no credentials and no
          route to her. The 21:9 ratio is deliberate: a 4:5 portrait would be ~446px tall
          at 393 and undo the tablet/mobile height work. Copy is condensed from the
          provider page's approved philosophy/welcome language and is framed across all
          three disciplines — this is clinical leadership, not an injector profile. */}
      <section style={{ padding: "clamp(40px, 5vw, 64px) 0 clamp(24px, 3vw, 40px)" }}>
        <div className="container">
          <Reveal>
            <Ph label="Alaa Mashal · in consultation" meta="natural light · 21:9" aspect="21/9">
              <Video src="/assets/alaa-loop-2.mp4" />
            </Ph>
          </Reveal>
          <Reveal delay={120} style={{ textAlign: "center", maxWidth: 660, margin: "32px auto 0" }}>
            <Eyebrow>· Clinical Leadership</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 3.6vw, 48px)", margin: "16px auto 14px", maxWidth: "18ch", fontWeight: 300 }}>
              Care with <em>continuity.</em>
            </h2>
            <div className="display" style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 400, color: "var(--ivory)", letterSpacing: "-0.005em" }}>
              Alaa Mashal, MSN, APRN, FNP-BC
            </div>
            <div className="label" style={{ marginTop: 6, color: "var(--gold)" }}>Founder &amp; Clinical Director</div>
            {/* Home's register is short — no other body here runs past ~16 words. Two
                sentences: the cross-discipline framing, then continuity. */}
            <p className="body" style={{ margin: "18px auto 0", maxWidth: "54ch" }}>
              Restraint and the long view — conservative planning in aesthetics, honest,
              evidence-based guidance in wellness and family medicine. The person who
              assesses you is the person who cares for you.
            </p>
            <div style={{ marginTop: 22 }}>
              <a href="/providers/alaa-mashal" onClick={(e) => { e.preventDefault(); navigate("/providers/alaa-mashal"); }} className="link">
                <span>Meet Alaa</span><span className="arrow"></span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BREATH MOMENT — full screen */}
      <section className="breath-moment">
        <Reveal>
          <Logo size={32} style={{ opacity: 0.9, margin: "0 auto 40px" }} />
          <p className="display italic breath-line">
            Look before you touch.
          </p>
        </Reveal>
      </section>

      {/* AURA SCAN — cinematic video */}
      <section style={{ padding: "clamp(16px, 3vw, 32px) 0 clamp(20px, 3vw, 36px)" }}>
        <div className="container">
          <Reveal>
            <Ph label="Aura · skin imaging" meta="skin map · 16:9" aspect="16/9">
              <Video src="/assets/aura-scan.mp4" />
            </Ph>
          </Reveal>
        </div>
      </section>

      {/* ASSESSMENT TEASER */}
      <section className="section" style={{ textAlign: "center", padding: "clamp(32px, 5vw, 64px) 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal>
            <Eyebrow>· The Assessment</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "28px auto 18px", maxWidth: "16ch", fontWeight: 300 }}>
              Every plan begins with<br /><em>an assessment.</em>
            </h2>
            <p className="lede" style={{ maxWidth: "40ch", margin: "0 auto 40px" }}>
              Time with Alaa. Credited toward your treatment.
            </p>
            <AssessmentCTA navigate={navigate} />
          </Reveal>
        </div>
      </section>

      {/* THE DISCIPLINES — the hero promises "aesthetics, wellness, and family medicine";
          this is where Home proves it. Placed straight after the Assessment teaser so the
          Assessment reads as the entry point and these are what it opens into. Reuses the
          approved .tx-grid/.tx-row editorial index (whole-row link, hairline, serif name,
          gold arrow, existing focus-visible) — no new CSS. repeat(3, 1fr) gives all three
          identical width: no featured state, no highlight, no recommended discipline. */}
      <section className="section" style={{ padding: "clamp(32px, 5vw, 64px) 0" }}>
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow>· The Disciplines</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4.2vw, 56px)", margin: "22px auto 0", maxWidth: "18ch", fontWeight: 300 }}>
              Where the Assessment <em>leads.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="tx-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {[
                { n: "Aesthetics", d: "Injectables and skin health, sequenced into a plan rather than a menu.", path: "/aesthetics" },
                { n: "Wellness", d: "Prevention, labs, and IV therapy, treated as one continuous conversation.", path: "/wellness" },
                { n: "Family Medicine", d: "Primary care for adults and families, with one provider who knows your file.", path: "/family-medicine" },
              ].map((t) => (
                <a key={t.path} href={t.path} onClick={(e) => { e.preventDefault(); navigate(t.path); }} className="tx-row">
                  <span className="tx-head">
                    <span className="tx-name">{t.n}</span>
                    <span aria-hidden="true" className="tx-arrow">&rarr;</span>
                  </span>
                  <span className="tx-desc body-sm">{t.d}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section" style={{ textAlign: "center", background: "var(--bg-1)", padding: "clamp(48px, 7vw, 88px) 0" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <Reveal>
            <Eyebrow>· The Practice</Eyebrow>
            <h2 className="display italic" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "28px auto 36px", maxWidth: "18ch", fontWeight: 300, color: "var(--ivory)" }}>
              A practice built on trust.
            </h2>
            <a href="/about" onClick={(e) => { e.preventDefault(); navigate("/about"); }} className="link">
              <span>About AVEN</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* CONSIDERED TREATMENTS — cinematic treatment videos, each tile a link to its
          existing landing page. `path: null` keeps a tile deliberately non-interactive
          when no honest destination exists yet (see Advanced Rejuvenation below). */}
      <section className="section" style={{ padding: "clamp(32px, 5vw, 56px) 0 clamp(40px, 6vw, 72px)" }}>
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: 44 }}>
            <Eyebrow>· Considered treatments</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4.2vw, 56px)", margin: "22px auto 0", maxWidth: "16ch", fontWeight: 300 }}>
              The work <em>itself.</em>
            </h2>
          </Reveal>
          <div className="treatments">
            {[
              { label: "Lip Filler", meta: "filler · balancing · proportion", photo: "Lip filler · in-room · medium format", video: "/assets/lip-filler.mp4", path: "/lip-fillers-orland-park" },
              { label: "Botox", meta: "neuromodulators · expression kept", photo: "Botox injection · gloved hand · 35mm", video: "/assets/botox-v2.mp4", path: "/botox-orland-park" },
              { label: "Microneedling", meta: "collagen induction · seasonal", photo: "Microneedling · skin · macro", video: "/assets/microneedling.mp4", path: "/skinpen-microneedling-orland-park" },
              { label: "Sculptra", meta: "biostimulator · collagen-led", photo: "Sculptra · in-room · medium format", video: "/assets/sculptra-v2.mp4", path: "/sculptra-orland-park" },
              // Advanced Rejuvenation: no honest destination yet. The tile reads
              // "laser · energy · forthcoming", which matches /skin-tightening-orland-park
              // (forthcoming, RF) — but the name matches /skin-rejuvenation-orland-park,
              // which is a LIVE service. Linking to either would contradict the tile or
              // mislabel a live page, so it stays non-interactive pending an owner call.
              { label: "Advanced Rejuvenation", meta: "laser · energy · forthcoming", photo: "Advanced rejuvenation · editorial", video: "/assets/skin-rejuvenation.mp4", path: null },
            ].map((s, i) => {
              const inner = (
                <>
                  <Ph label={s.photo} meta="ivory · natural light · placeholder" aspect="4/5">
                    {s.video && <Video src={s.video} />}
                  </Ph>
                  <div>
                    <div className="display" style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 400, color: "var(--ivory)", letterSpacing: "-0.005em" }}>
                      {s.label}
                    </div>
                    <div className="label" style={{ marginTop: 6, color: "var(--muted)" }}>{s.meta}</div>
                  </div>
                </>
              );
              const style = { display: "flex", flexDirection: "column", gap: 18 };
              return (
                <Reveal key={s.label} delay={i * 100}>
                  {s.path ? (
                    <a href={s.path} onClick={(e) => { e.preventDefault(); navigate(s.path); }} style={style}>
                      {inner}
                    </a>
                  ) : (
                    <div style={style}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SIGNATURE EXPERIENCE — The AVEN Bridal Journey */}
      <section className="section" style={{ textAlign: "center", background: "var(--bg-1)", padding: "clamp(48px, 7vw, 88px) 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal>
            <Eyebrow>· A Signature Experience</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "28px auto 18px", maxWidth: "16ch", fontWeight: 300 }}>
              The AVEN <em>Bridal Journey.</em>
            </h2>
            <p className="lede" style={{ maxWidth: "44ch", margin: "0 auto 40px" }}>
              A considered path to your wedding day — aesthetics, skin, and wellness,
              planned around your date.
            </p>
            <a href="/bridal-journey" onClick={(e) => { e.preventDefault(); navigate("/bridal-journey"); }} className="link">
              <span>Explore the Bridal Journey</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* CLOSING BAND */}
      <section className="closing-band">
        <Reveal>
          <Logo size={28} style={{ margin: "0 auto 20px", opacity: 0.9 }} />
          <div className="closing-band-line">
            AVEN MED. Orland Park · By appointment.
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Home;
