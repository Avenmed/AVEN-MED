/* AVEN MED — Home */
import React from 'react';
import { Eyebrow, Logo, Ph, Reveal } from '../components.jsx';
import Video from '../Video.jsx';
import { BOOKING_ENABLED } from '../config.js';

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
              <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
                <span>{BOOKING_ENABLED ? "Book an Assessment" : "Join the Waitlist"}</span>
                <span className="arrow"></span>
              </a>
              <a href="#/about" onClick={(e) => { e.preventDefault(); navigate("/about"); }} className="link">
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
          <span className="band-dot">·</span>
          <span style={{ color: "var(--gold)" }}>Now welcoming founding members</span>
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

      {/* PRACTICE PHOTO — placeholder for real photo */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) 0" }}>
        <div className="container">
          <Reveal>
            <Ph label="The practice · interior wide" meta="warm tungsten · plaster · 16:9" aspect="16/9" />
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

      {/* ASSESSMENT TEASER */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal>
            <Eyebrow>· The Assessment</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "28px auto 18px", maxWidth: "16ch", fontWeight: 300 }}>
              Every plan begins with<br /><em>an assessment.</em>
            </h2>
            <p className="lede" style={{ maxWidth: "40ch", margin: "0 auto 40px" }}>
              Time with Alaa. Credited toward your treatment.
            </p>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
              <span>{BOOKING_ENABLED ? "Book an Assessment" : "Join the Waitlist"}</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section" style={{ textAlign: "center", background: "var(--bg-1)" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <Reveal>
            <Eyebrow>· The Practice</Eyebrow>
            <h2 className="display italic" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "28px auto 36px", maxWidth: "18ch", fontWeight: 300, color: "var(--ivory)" }}>
              A practice built on trust.
            </h2>
            <a href="#/about" onClick={(e) => { e.preventDefault(); navigate("/about"); }} className="link">
              <span>About AVEN</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* FIVE SERVICE BOXES — cinematic treatment videos */}
      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>· Considered treatments</Eyebrow>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { label: "Lip Filler", meta: "filler · balancing · proportion", photo: "Lip filler · in-room · medium format", video: "assets/lip-filler.mp4" },
              { label: "Botox", meta: "neuromodulators · expression kept", photo: "Botox injection · gloved hand · 35mm", video: "assets/botox.mp4" },
              { label: "Microneedling", meta: "collagen induction · seasonal", photo: "Microneedling · skin · macro", video: "assets/microneedling.mp4" },
              { label: "Sculptra", meta: "biostimulator · collagen-led", photo: "Sculptra · in-room · medium format", video: "assets/sculptra.mp4" },
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

      {/* GALLERY STRIP — three squares, no copy */}
      <section style={{ padding: "0 0 clamp(80px, 8vw, 120px)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
            <Reveal style={{ aspectRatio: "1/1" }}>
              <Ph label="Interior · wide" meta="plaster · warm tungsten · 16mm" aspect="1/1" style={{ width: "100%", height: "100%" }} />
            </Reveal>
            <Reveal delay={100} style={{ aspectRatio: "1/1" }}>
              <Ph label="Hand detail" meta="brass instrument · ivory tile" aspect="1/1" style={{ width: "100%", height: "100%" }} />
            </Reveal>
          </div>
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
