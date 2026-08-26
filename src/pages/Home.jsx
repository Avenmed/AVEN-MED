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
          <Video src="assets/home-hero-bg-v2.mp4" />
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
                <Logo size={18} style={{ opacity: 0.55 }} />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      {/* PRACTICE VIDEO — Roman clay wall */}
      <section style={{ padding: "clamp(40px, 5vw, 64px) 0 clamp(24px, 3vw, 40px)" }}>
        <div className="container">
          <Reveal>
            <Ph label="The practice · interior wide" meta="warm tungsten · plaster · 16:9" aspect="16/9">
              <Video src="assets/home-hero.mp4" />
            </Ph>
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
            <Ph label="Aura · multispectral scan" meta="skin map · 16:9" aspect="16/9">
              <Video src="assets/aura-scan.mp4" />
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

      {/* FIVE SERVICE BOXES — cinematic treatment videos */}
      <section className="section" style={{ padding: "clamp(32px, 5vw, 56px) 0 clamp(40px, 6vw, 72px)" }}>
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: 44 }}>
            <Eyebrow>· Considered treatments</Eyebrow>
          </Reveal>
          <div className="treatments">
            {[
              { label: "Lip Filler", meta: "filler · balancing · proportion", photo: "Lip filler · in-room · medium format", video: "assets/lip-filler.mp4" },
              { label: "Botox", meta: "neuromodulators · expression kept", photo: "Botox injection · gloved hand · 35mm", video: "assets/botox-v2.mp4" },
              { label: "Microneedling", meta: "collagen induction · seasonal", photo: "Microneedling · skin · macro", video: "assets/microneedling.mp4" },
              { label: "Sculptra", meta: "biostimulator · collagen-led", photo: "Sculptra · in-room · medium format", video: "assets/sculptra-v2.mp4" },
              { label: "Advanced Rejuvenation", meta: "laser · energy · forthcoming", photo: "Advanced rejuvenation · editorial", video: "assets/skin-rejuvenation.mp4" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <Ph label={s.photo} meta="ivory · natural light · placeholder" aspect="4/5">
                    {s.video && <Video src={s.video} />}
                  </Ph>
                  <div>
                    <div className="display" style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 400, color: "var(--ivory)", letterSpacing: "-0.005em" }}>
                      {s.label}
                    </div>
                    <div className="label" style={{ marginTop: 6, color: "var(--muted)" }}>{s.meta}</div>
                  </div>
                </div>
              </Reveal>
            ))}
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
