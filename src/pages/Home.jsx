/* AVEN MED — Home */
import React from 'react';
import { Eyebrow, Logo, Ph, Reveal } from '../components.jsx';

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
            <Eyebrow>· The AVEN Clinic · Est. 2026</Eyebrow>
            <h1 style={{ marginTop: 26 }}>
              The quiet art<br />
              of <em>looking</em><br />
              <em>like yourself.</em>
            </h1>
            <p className="lede" style={{ marginTop: 28, maxWidth: "44ch" }}>
              Aesthetics, wellness, and family medicine.<br />
              Built around restraint.
            </p>
            <div style={{ display: "flex", gap: 24, marginTop: 38, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
                <span>Book an Assessment</span>
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
            <p className="lede" style={{ maxWidth: "36ch", margin: "0 auto 40px" }}>
              Complimentary. Considered. Yours to keep.
            </p>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
              <span>Book an Assessment</span><span className="arrow"></span>
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

      {/* GALLERY STRIP — three squares, no copy */}
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
