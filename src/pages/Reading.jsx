/* AVEN MED — The Reading (centerpiece consultation) */

import React from 'react';
import { Eyebrow, Logo, Ph, Reveal } from '../components.jsx';

const AuraVideo = () => {
  const videoRef = React.useRef(null);
  const [muted, setMuted] = React.useState(true);
  const [videoOk, setVideoOk] = React.useState(true);
  const POSTER = "https://play.vidyard.com/nqovcCJZB992mgCwwqD9gm.jpg";

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    if (!next) v.play().catch(() => {});
  };

  return (
    <>
      <div className="aura-video-frame">
        {videoOk ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={POSTER}
            onError={() => setVideoOk(false)}
          >
            <source src="assets/aura-consultation.mp4" type="video/mp4" />
          </video>
        ) : (
          <img className="video-poster" src={POSTER} alt="Aura consultation poster" />
        )}
        <div className="video-play-overlay"><span className="ring"></span></div>
        <button className="video-sound-toggle" onClick={toggleSound} aria-label="Toggle sound">
          {muted ? "🔊" : "🔇"}
        </button>
      </div>
      <p className="aura-video-caption">
        Inside an AVEN MED consultation — the Aura system in use.
      </p>
    </>
  );
};

const ReadingPage = ({ navigate }) => {
  const [activePin, setActivePin] = React.useState(2);
  const pins = [
    { x: 38, y: 22, k: "Pigment", v: "0.42", l: "Mild sun mapping along the upper cheek." },
    { x: 56, y: 28, k: "Vascular", v: "0.18", l: "Surface vessel density within normal range." },
    { x: 50, y: 50, k: "Collagen", v: "0.71", l: "Strong dermal density · ideal for biostimulators." },
    { x: 36, y: 62, k: "Texture", v: "0.33", l: "Fine pore architecture · light micro-needling indicated." },
    { x: 62, y: 70, k: "Volume", v: "0.55", l: "Subtle anterior cheek descent · monitor at 12 months." }
  ];

  const [stage, setStage] = React.useState(0);
  const stages = ["Capture", "Map", "Analyse", "Plan"];

  return (
    <main className="page">
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 120 }}>
        <Ph
          label="Aura console · soft halo film"
          meta="ambient · cinematic · 1.5x slow-mo"
          style={{ position: "absolute", inset: 0, border: 0 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(243,236,220,0.4), rgba(243,236,220,0.2) 30%, rgba(243,236,220,0.9))" }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <Eyebrow>The Reading</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(56px, 9vw, 140px)", margin: "24px 0 24px", lineHeight: 0.94, maxWidth: "12ch" }}>
              Every plan begins<br />with a <em>reading.</em>
            </h1>
            <p className="lede" style={{ maxWidth: "48ch" }}>
              A considered consultation — built to read what's there, plan
              what's next, and protect the long arc of your care. The reading
              is complimentary. The plan is yours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY BAR */}
      <section style={{ padding: "32px 0", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 40, alignItems: "center" }}>
          <div className="label" style={{ color: "var(--gold)" }}>AURA · A FOUNDING PRINCIPLE</div>
          <div className="display italic" style={{ fontSize: "clamp(20px, 1.8vw, 26px)", color: "var(--ivory)" }}>
            "We built the reading to slow the consultation down — to look before we touch."
          </div>
          <div className="label" style={{ color: "var(--muted)" }}>— Alaa Mashal, FNP-BC</div>
        </div>
      </section>

      {/* CONSULTATION FRAMEWORK — video + Today/Next/Maintenance */}
      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <Logo size={520} style={{ position: "absolute", right: "-120px", top: "10%", opacity: 0.06 }} />
        <div className="container" style={{ position: "relative" }}>
          <Reveal style={{ textAlign: "center" }}>
            <Eyebrow>Inside The Reading</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "20px auto 0", maxWidth: "20ch" }}>
              A considered <em>consultation,</em><br />not a sales pitch.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <AuraVideo />
          </Reveal>

          <Reveal delay={200} style={{ maxWidth: 720, margin: "0 auto 64px", textAlign: "center" }}>
            <p className="body" style={{ margin: 0, fontSize: 17 }}>
              Every visit at AVEN begins with an Aura skin reading and a
              three-part framework — designed to educate, visualize, and plan.
              Never to pressure. Your face is read across three quiet
              horizons.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { n: "01", k: "Today", b: "What can safely and beautifully improve the face right now — within anatomy, within restraint." },
              { n: "02", k: "Next", b: "Treatments that build on today's plan, sequenced across the coming months and seasons." },
              { n: "03", k: "Maintenance", b: "How we preserve and protect results long-term — quietly, gently, in millimeters." }
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div style={{ padding: "40px 32px", border: "1px solid var(--hairline)", height: "100%", background: "var(--bg)" }}>
                  <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.22em" }}>{s.n}</div>
                  <h4 className="display" style={{ fontSize: 36, margin: "20px 0 16px", fontWeight: 300 }}>{s.k}</h4>
                  <p className="body-sm" style={{ margin: 0 }}>{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} style={{ marginTop: 72, textAlign: "center" }}>
            <div className="display italic" style={{ fontSize: "clamp(22px, 2.4vw, 32px)", color: "var(--olive)", maxWidth: "30ch", margin: "0 auto" }}>
              "We guide patients. We do not pressure them."
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE SEE — Aura 3D Imaging device's role */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>The Instrument</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "20px auto 0", maxWidth: "22ch" }}>
              What we see,<br /><em>how we see it.</em>
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, maxWidth: 1080, margin: "0 auto" }}>
            <Reveal>
              <p className="body" style={{ margin: 0 }}>
                The reading is anchored by the <em>Aura 3D Imaging System</em> —
                a high-resolution skin analysis device that maps the face across
                five layered dimensions: pigment, vascular, collagen, texture,
                and volume.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="body" style={{ margin: 0 }}>
                In twelve quiet seconds, Aura captures a three-dimensional
                portrait of your skin in light. The image becomes the
                conversation — every recommendation grounded in what's
                actually there, not what could be sold.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="body" style={{ margin: 0 }}>
                The device informs. It does not decide. Every plan that
                follows is built by Alaa Mashal, FNP-BC, in conversation with
                you — slowly, carefully, across the long arc of your care.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 4 stages */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>01 — The Sequence</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "20px 0 0", maxWidth: "16ch" }}>
              Four quiet steps,<br />ninety <em>minutes.</em>
            </h2>
          </Reveal>

          <div style={{ marginTop: 80, display: "grid", gridTemplateColumns: "320px 1fr", gap: 80, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 120 }}>
              <div className="label" style={{ color: "var(--muted)" }}>Stage</div>
              {stages.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setStage(i)}
                  style={{
                    display: "flex", alignItems: "baseline", gap: 18,
                    padding: "20px 0",
                    width: "100%", textAlign: "left",
                    borderBottom: "1px solid var(--hairline)",
                    color: stage === i ? "var(--ivory)" : "var(--ivory-soft)",
                    transition: "color 240ms ease"
                  }}
                >
                  <span style={{
                    fontFamily: "var(--mono)", fontSize: 11, color: stage === i ? "var(--gold)" : "var(--muted)",
                    letterSpacing: "0.18em"
                  }}>0{i + 1}</span>
                  <span className="display" style={{ fontSize: 32, fontWeight: 300 }}>{s}</span>
                  {stage === i && (
                    <span style={{ marginLeft: "auto", width: 32, height: 1, background: "var(--gold)", alignSelf: "center" }}></span>
                  )}
                </button>
              ))}
            </div>

            <div>
              {stage === 0 && (
                <Reveal key="0">
                  <Ph label="Aura capture · still" meta="3D multispectral imaging" aspect="16/10" />
                  <h3 className="display" style={{ fontSize: 44, margin: "32px 0 18px" }}>
                    <em>Capture.</em>
                  </h3>
                  <p className="body">
                    You sit. The room is dim. Aura takes a three-dimensional,
                    multispectral image of your face in under twelve seconds —
                    capturing surface, sub-surface, vascular and pigment layers
                    in a single frame. There is no contact, no light flash, and
                    no makeup removal beyond gentle cleansing.
                  </p>
                  <ul style={{ marginTop: 36, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                    {[
                      "Multispectral capture across 7 wavelengths",
                      "Sub-millimeter surface resolution",
                      "Photographic baseline saved to your file",
                      "No contact · no flash · no markup"
                    ].map((s) => (
                      <li key={s} style={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: 8, color: "var(--ivory-soft)", fontSize: 14 }}>
                        <span style={{ width: 14, height: 1, background: "var(--gold)", marginTop: 12 }}></span><span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
              {stage === 1 && (
                <Reveal key="1">
                  <Ph label="Skin map overlay · false-color analysis" meta="vascular · pigment · texture" aspect="16/10" />
                  <h3 className="display" style={{ fontSize: 44, margin: "32px 0 18px" }}><em>Map.</em></h3>
                  <p className="body">
                    Aura translates the capture into five layered maps: pigment,
                    vascular tone, collagen density, surface texture, and volume.
                    You see your own face overlaid in soft false-colour — a quiet,
                    revealing portrait.
                  </p>
                  <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}>
                    {pins.map((p) => (
                      <div key={p.k} style={{ padding: "18px 14px", border: "1px solid var(--hairline)", background: "var(--surface)" }}>
                        <div className="label" style={{ color: "var(--gold)" }}>{p.k}</div>
                        <div style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 32, marginTop: 8, color: "var(--ivory)", letterSpacing: "-0.02em" }}>
                          {p.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}
              {stage === 2 && (
                <Reveal key="2">
                  <Ph label="Consult footage · whiteboard reading" meta="quiet dialogue · 4K" aspect="16/10" />
                  <h3 className="display" style={{ fontSize: 44, margin: "32px 0 18px" }}><em>Analyse.</em></h3>
                  <p className="body">
                    Alaa Mashal, FNP-BC walks you through every layer of the map at her
                    own pace. She explains what she sees, what she doesn't see,
                    and what is not worth treating. Questions are encouraged.
                    Nothing is prescribed on this visit.
                  </p>
                  <div style={{ marginTop: 32, padding: 28, background: "var(--surface)", border: "1px solid var(--hairline)" }}>
                    <div className="label" style={{ color: "var(--gold)" }}>What you'll hear</div>
                    <div className="display italic" style={{ fontSize: 26, marginTop: 16, lineHeight: 1.4 }}>
                      "Your collagen density is excellent here. We do not need
                      to do anything in this region for another year."
                    </div>
                  </div>
                </Reveal>
              )}
              {stage === 3 && (
                <Reveal key="3">
                  <Ph label="Pathway document · letterpress" meta="printed in clinic" aspect="16/10" />
                  <h3 className="display" style={{ fontSize: 44, margin: "32px 0 18px" }}><em>Plan.</em></h3>
                  <p className="body">
                    You leave with a written pathway — a year of quiet,
                    sequenced care designed to compound over time. The plan is
                    yours to keep, with no obligation. If we never see you again,
                    you have still received something of value.
                  </p>
                  <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
                    {["Q1 · Skin Foundation", "Q2 · Light Refinement", "Q3 · Collagen Support", "Q4 · Maintain & Map"].map((q, i) => (
                      <div key={q} style={{ padding: 22, border: "1px solid var(--hairline)" }}>
                        <div className="label" style={{ color: "var(--gold)" }}>{q.split(" · ")[0]}</div>
                        <div className="display" style={{ fontSize: 20, marginTop: 10, fontWeight: 300 }}>{q.split(" · ")[1]}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE MAP DEMO */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>02 — Inside an Aura Reading</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 0", maxWidth: "18ch" }}>
              Hover the map. Listen to what your face is <em>quietly</em> saying.
            </h2>
          </Reveal>

          <div style={{ marginTop: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <Reveal>
              <div className="face-map">
                <Ph label="Aura false-color · sample" meta="vascular + pigment + collagen" style={{ position: "absolute", inset: 0 }} aspect="4/5" />
                {pins.map((p, i) => (
                  <div
                    key={p.k}
                    className={"pin" + (activePin === i ? " active" : "")}
                    style={{ left: p.x + "%", top: p.y + "%" }}
                    onMouseEnter={() => setActivePin(i)}
                    onClick={() => setActivePin(i)}
                  >
                    {activePin === i && <span className="pulse"></span>}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="label" style={{ color: "var(--muted)" }}>Layer {String(activePin + 1).padStart(2, "0")} / 05</div>
              <h3 className="display" style={{ fontSize: 56, margin: "14px 0 24px", letterSpacing: "-0.01em" }}>
                {pins[activePin].k}
              </h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: 72, fontWeight: 300, color: "var(--gold)", letterSpacing: "-0.02em" }}>
                  {pins[activePin].v}
                </div>
                <div className="label" style={{ color: "var(--ivory-soft)" }}>Index · 0.00 – 1.00</div>
              </div>
              <p className="body" style={{ marginTop: 28, fontSize: 17 }}>{pins[activePin].l}</p>

              <div style={{ marginTop: 32, display: "flex", gap: 6 }}>
                {pins.map((_, i) => (
                  <button key={i} onClick={() => setActivePin(i)}
                    style={{
                      width: 28, height: 2, background: activePin === i ? "var(--gold)" : "var(--hairline)",
                      transition: "background 240ms ease"
                    }} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SCIENCE / WHAT IT MEASURES */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>03 — The Science</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 0", maxWidth: "20ch" }}>
              Five dimensions, one <em>quiet</em> portrait.
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 18, marginTop: 80 }}>
            {[
              { k: "Pigment", d: "Melanin distribution mapped across the dermis. Reveals sun history before it surfaces." },
              { k: "Vascular", d: "Sub-surface blood flow and capillary patterning. Predicts erythema and rosacea progression." },
              { k: "Collagen", d: "Dermal density and elasticity. Informs biostimulator timing and depth." },
              { k: "Texture", d: "Surface architecture — pores, fine lines, micro-roughness. Guides resurfacing strategy." },
              { k: "Volume", d: "Three-dimensional shape and structural support. Maps subtle descent over years." }
            ].map((x, i) => (
              <Reveal key={x.k} delay={i * 80}>
                <div style={{ padding: "32px 24px", border: "1px solid var(--hairline)", height: "100%", background: "var(--bg)" }}>
                  <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.2em" }}>0{i + 1}</div>
                  <h4 className="display" style={{ fontSize: 28, margin: "20px 0 14px" }}>{x.k}</h4>
                  <p className="body-sm" style={{ margin: 0 }}>{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON: AURA vs typical */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>04 — A different kind of consultation</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 60px", maxWidth: "18ch" }}>
              Aura is an education system — <em>not</em> a sales machine.
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid var(--hairline)" }}>
            <div style={{ padding: 56, borderRight: "1px solid var(--hairline)" }}>
              <div className="label" style={{ color: "var(--gold)" }}>The Aura Way</div>
              <h3 className="display" style={{ fontSize: 36, margin: "18px 0 32px" }}>What we do</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  "Map the face before recommending anything",
                  "Spend 90 minutes on the first visit",
                  "Write a year-long pathway, not a treatment menu",
                  "Explain — and explain again",
                  "Send patients home with no obligation"
                ].map((s) => (
                  <li key={s} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 14, color: "var(--ivory)" }}>
                    <span style={{ width: 12, height: 12, border: "1px solid var(--gold)", borderRadius: 2, marginTop: 5, position: "relative" }}>
                      <span style={{ position: "absolute", inset: 2, background: "var(--gold)" }}></span>
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: 56, background: "var(--bg)" }}>
              <div className="label" style={{ color: "var(--muted)" }}>The Industry Way</div>
              <h3 className="display" style={{ fontSize: 36, margin: "18px 0 32px", color: "var(--muted-2)" }}>What we don't</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  "Recommend treatments before seeing the skin",
                  "Run 15-minute consult-to-procedure visits",
                  "Sell packaged units at the door",
                  "Rotate providers between visits",
                  "Pressure patients with limited-time offers"
                ].map((s) => (
                  <li key={s} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 14, color: "var(--muted)" }}>
                    <span style={{ width: 12, height: 12, border: "1px solid var(--muted-2)", borderRadius: 2, marginTop: 5, position: "relative" }}>
                      <span style={{ position: "absolute", top: 4, left: 2, right: 2, height: 1, background: "var(--muted)" }}></span>
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center", padding: "clamp(80px, 12vw, 160px) 0", position: "relative", overflow: "hidden" }}>
        <Logo size={520} style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", opacity: 0.04 }} />
        <div className="container" style={{ position: "relative" }}>
          <Reveal>
            <Eyebrow>Begin with a Reading</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 88px)", margin: "26px auto 28px", maxWidth: "14ch" }}>
              Your first <em>Aura,</em><br />included.
            </h2>
            <p className="body" style={{ margin: "0 auto 44px" }}>
              The Aura consultation is included with every first visit at AVEN
              MED, and complimentary twice annually for Elevate members.
            </p>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
              <span>Book The Reading</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default ReadingPage;
