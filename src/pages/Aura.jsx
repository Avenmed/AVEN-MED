/* AVEN MED — AURA (the manifesto / philosophy page) */
import React from 'react';
import { Eyebrow, Logo, Reveal } from '../components.jsx';

const AuraPage = ({ navigate }) => {
  const principles = [
    {
      n: "01",
      k: "Anatomy first.",
      b: "Before a treatment is named, the face is read. Bones, fat, skin, expression — in that order. Anything offered begins as a question about anatomy, never as a product on a menu.",
    },
    {
      n: "02",
      k: "Restraint as a discipline.",
      b: "The most experienced practitioners are the most willing to do less. We treat in millimeters, sequence across seasons, and decline as often as we proceed. Restraint is not caution. It is the practice.",
    },
    {
      n: "03",
      k: "The face is not a project.",
      b: "It is a long, continuous relationship between the body and time. We do not optimize. We do not finish. We attend to it.",
    },
    {
      n: "04",
      k: "Time is the patient's, not ours.",
      b: "A Reading is unhurried. Decisions are taken slowly, sometimes across weeks. We never ask for a yes in the room. The pathway forward should age well — and aging well takes time to plan.",
    },
    {
      n: "05",
      k: "A Reading before a plan.",
      b: "Every relationship begins with the same quiet thing — looking. We do not prescribe on a first visit. We map, we explain, we listen. The plan only exists once we have read the face it serves.",
    },
    {
      n: "06",
      k: "Less, done well.",
      b: "We measure success not by what was added, but by what remains unsaid afterward — no one can quite tell. The goal is not more. The goal is more like you.",
    },
  ];

  return (
    <main className="page">
      {/* HERO */}
      <section style={{ paddingTop: 200, paddingBottom: 120, position: "relative" }}>
        <div className="container" style={{ maxWidth: 880, textAlign: "center" }}>
          <Reveal>
            <Logo size={56} style={{ margin: "0 auto 36px" }} />
            <Eyebrow>The Philosophy</Eyebrow>
            <h1 className="display italic" style={{ fontSize: "clamp(48px, 7vw, 110px)", margin: "32px auto 0", lineHeight: 1.04, maxWidth: "16ch", fontWeight: 300, letterSpacing: "-0.01em" }}>
              AURA is how we<br />see a face.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section" style={{ paddingTop: 40, paddingBottom: 120 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: 40,
                padding: "56px 0",
                borderTop: i === 0 ? "1px solid var(--hairline)" : "none",
                borderBottom: "1px solid var(--hairline)",
              }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.22em", paddingTop: 14 }}>
                  {p.n}
                </div>
                <div>
                  <h3 className="display italic" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", margin: 0, fontWeight: 300, letterSpacing: "-0.005em", lineHeight: 1.15 }}>
                    {p.k}
                  </h3>
                  <p className="body" style={{ marginTop: 22, maxWidth: "56ch", fontSize: 16, lineHeight: 1.75 }}>
                    {p.b}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLOSING — sprig + quiet CTA */}
      <section className="section" style={{ textAlign: "center", paddingTop: 80, paddingBottom: 140 }}>
        <div className="container">
          <Reveal>
            <Logo size={32} style={{ margin: "0 auto 40px", opacity: 0.85 }} />
            <p className="display italic" style={{ fontSize: "clamp(22px, 2.6vw, 32px)", color: "var(--ivory)", maxWidth: "26ch", margin: "0 auto 48px", lineHeight: 1.45 }}>
              The goal is not more.<br />The goal is more like you.
            </p>
            <a href="#/reading" onClick={(e) => { e.preventDefault(); navigate("/reading"); }} className="btn">
              <span>Begin with a Reading</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default AuraPage;
