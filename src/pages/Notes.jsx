/* AVEN MED — Field Notes (editorial column) */
import React from 'react';
import { Eyebrow, Logo, Ph, Reveal } from '../components.jsx';

const NOTES = [
  {
    slug: "on-lip-filler",
    title: <>On Lip <em>Filler.</em></>,
    image: "Lip · macro · still",
    body: [
      "The conversation about lip filler has been bent for years toward addition — more, fuller, bigger. We have come to associate the word with shape that announces itself.",
      "But a lip, like every other piece of the face, is structure first. Border, vermilion, philtrum, eversion. Texture across the wet line. The way a lip moves when its owner is thinking.",
      "Filler that works does not change a face — it returns one. A border softened back to its natural definition. A philtrum read for what it is. An upper-to-lower ratio that honors the face it sits on.",
      "The right lip treatment, when restraint is the discipline, is rarely identifiable as filler. It looks instead like a softer version of the same mouth. Half a syringe, sometimes less. Once a year, sometimes longer.",
      "A treatment that ages with the face rather than fighting it.",
    ],
  },
  {
    slug: "long-arc-of-a-face",
    title: <>On the Long Arc<br /><em>of a Face.</em></>,
    image: "Profile · soft light · 35mm",
    body: [
      "A face is not a project. It is a long, continuous letter the body writes to itself — about the years, the climate, the laughter, the worry, the sleep.",
      "We have learned to call most of what it says \"decline.\" But aging is not decline. It is information. The architecture changes — bone reabsorbs from the medial cheek, fat pads slide, collagen thins through the dermis. None of this is failure. All of it is structure.",
      "The work of aesthetic medicine, when done with restraint, is to read these changes carefully and to support what is already happening — never to interrupt the letter.",
      "A face well-cared-for across years does not look untouched. It looks like itself, only a softer version of itself.",
      "The patient and the practice are not adversaries to time. They are in conversation with it.",
    ],
  },
  {
    slug: "what-an-assessment-reveals",
    title: <>What an Assessment <em>Reveals.</em></>,
    image: "Assessment room · brass detail",
    body: [
      "Most consultations begin with a question: \"What do you want done?\" The Assessment begins with a different one — what do you see?",
      "For ninety minutes, we do not prescribe. We map. The face under warm light, in soft focus. Pigment, vascular, collagen, texture, volume — five layered conversations that most patients have never had the words for.",
      "What we usually find is not a list of problems. It is a shape. A pattern. A way the face is asking to be supported, not changed.",
      "Patients leave the Assessment not with a treatment plan, but with understanding — of their own face, of where time has done its work, of what restraint can offer and what it cannot.",
      "The plan, when it comes, comes second. And it is usually subtler than the patient expected.",
    ],
  },
];

const NotesPage = ({ navigate }) => {
  return (
    <main className="page">
      {/* HERO */}
      <section style={{ paddingTop: 180, paddingBottom: 80, textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal>
            <Logo size={36} style={{ margin: "0 auto 24px", opacity: 0.85 }} />
            <Eyebrow>Field Notes</Eyebrow>
            <h1 className="display italic" style={{ fontSize: "clamp(48px, 6.4vw, 96px)", margin: "28px auto 24px", lineHeight: 1.04, maxWidth: "14ch", fontWeight: 300 }}>
              The editorial cousin<br />to The Assessment.
            </h1>
            <p className="body" style={{ margin: "24px auto 0", maxWidth: "52ch" }}>
              Considered writing on restraint and the long practice of looking like yourself. A magazine column, not a blog.
            </p>
          </Reveal>
        </div>
      </section>

      {/* NOTES STACK */}
      {NOTES.map((note, idx) => (
        <section key={note.slug} id={note.slug} className="section" style={{ paddingTop: idx === 0 ? 0 : 80, paddingBottom: 120, borderTop: idx === 0 ? "none" : "1px solid var(--hairline)" }}>
          <div className="container" style={{ maxWidth: 820 }}>
            <Reveal>
              <Ph label={note.image} meta="ivory · medium format · natural light" aspect="16/9" />
            </Reveal>
            <Reveal delay={100} style={{ marginTop: 56, textAlign: "center" }}>
              <Eyebrow>Field Note · 0{idx + 1}</Eyebrow>
              <h2 className="display italic" style={{ fontSize: "clamp(40px, 5.4vw, 72px)", margin: "24px auto 12px", lineHeight: 1.05, maxWidth: "14ch", fontWeight: 300 }}>
                {note.title}
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <div style={{ maxWidth: "62ch", margin: "48px auto 0" }}>
                {note.body.map((p, i) => (
                  <p key={i} className="body" style={{ fontSize: 17, lineHeight: 1.9, marginBottom: 24, fontFamily: "var(--serif)", fontWeight: 300, color: "var(--ivory)" }}>
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={260} style={{ textAlign: "center", marginTop: 56 }}>
              <div className="label" style={{ color: "var(--gold)" }}>— Alaa Mashal, FNP-BC</div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* CLOSING */}
      <section className="section" style={{ textAlign: "center", paddingTop: 60, paddingBottom: 120 }}>
        <div className="container">
          <Reveal>
            <Logo size={28} style={{ margin: "0 auto 24px", opacity: 0.85 }} />
            <p className="display italic" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", color: "var(--muted)", maxWidth: "26ch", margin: "0 auto 36px" }}>
              The next note arrives soon.
            </p>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="link">
              <span>Begin an Assessment</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default NotesPage;
