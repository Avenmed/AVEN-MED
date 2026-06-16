/* AVEN MED — The AVEN Assessment */
import React from 'react';
import { Eyebrow, Logo, Reveal } from '../components.jsx';

const AssessmentPage = ({ navigate }) => {
  return (
    <main className="page">
      {/* HERO */}
      <section style={{ paddingTop: 200, paddingBottom: 120 }}>
        <div className="container" style={{ maxWidth: 880, textAlign: "center" }}>
          <Reveal>
            <Logo size={48} style={{ margin: "0 auto 32px", opacity: 0.9 }} />
            <Eyebrow>· Inside the Process</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(48px, 7vw, 110px)", margin: "32px auto 24px", lineHeight: 1.02, maxWidth: "18ch", fontWeight: 300 }}>
              The <em>AVEN Assessment.</em>
            </h1>
            <p className="lede" style={{ maxWidth: "48ch", margin: "0 auto 24px" }}>
              Every plan at AVEN begins with an assessment.
            </p>
            <p className="body" style={{ maxWidth: "52ch", margin: "0 auto 56px", color: "var(--ivory-soft)" }}>
              The AVEN Assessment is not complimentary. It is a considered, paid
              consultation — the foundation of every relationship with the practice.
            </p>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
              <span>Book an Assessment</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default AssessmentPage;
