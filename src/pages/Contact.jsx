/* AVEN MED — Contact */

import React from 'react';
import { DividerMark, Eyebrow, Logo, Ph, Reveal } from '../components.jsx';

const ContactPage = ({ navigate }) => {
  const [form, setForm] = React.useState({
    name: "", email: "", phone: "", interest: "Aesthetics", message: ""
  });
  const [sent, setSent] = React.useState(false);
  const [showCeremony, setShowCeremony] = React.useState(() => {
    try { return !localStorage.getItem('aven-booking-seen'); } catch { return false; }
  });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  React.useEffect(() => {
    if (!showCeremony) return;
    const t = setTimeout(() => {
      setShowCeremony(false);
      try { localStorage.setItem('aven-booking-seen', '1'); } catch {}
    }, 7400);
    return () => clearTimeout(t);
  }, [showCeremony]);

  return (
    <main className="page">
      {showCeremony && (
        <div className="booking-ceremony" onClick={() => setShowCeremony(false)}>
          <p className="line">A Reading begins<br />with stillness.</p>
          <svg className="sprig-draw" viewBox="0 0 60 60" aria-hidden="true">
            <path d="M 30,8 L 30,52" />
            <path d="M 30,18 C 22,18 18,24 18,30 C 26,30 30,26 30,20" />
            <path d="M 30,18 C 38,18 42,24 42,30 C 34,30 30,26 30,20" />
            <path d="M 30,30 C 24,30 20,34 20,40 C 27,40 30,36 30,32" />
            <path d="M 30,30 C 36,30 40,34 40,40 C 33,40 30,36 30,32" />
          </svg>
        </div>
      )}
      {/* HERO */}
      <section style={{ paddingTop: 180, paddingBottom: 80 }}>
        <div className="container">
          <Reveal style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <Eyebrow>Contact · By Appointment</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 132px)", margin: "24px 0 0", lineHeight: 0.96, maxWidth: "12ch" }}>
                Begin a <em>quiet</em><br />conversation.
              </h1>
            </div>
            <p className="lede">
              We accept a limited number of new patients each month. Please
              share a few details and our clinic coordinator will be in touch
              within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM + CLINIC */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 96, alignItems: "start" }}>
          <Reveal>
            {!sent ? (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                style={{ display: "grid", gap: 36 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>
                  <div className="field">
                    <label>Full Name</label>
                    <input value={form.name} onChange={set("name")} required placeholder="Maren Ellsworth" />
                  </div>
                  <div className="field">
                    <label>Preferred Pronouns</label>
                    <input placeholder="She / Her" />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" required value={form.email} onChange={set("email")} placeholder="maren@clinic.co" />
                  </div>
                  <div className="field">
                    <label>Phone</label>
                    <input value={form.phone} onChange={set("phone")} placeholder="(704) 488 · 8280" />
                  </div>
                </div>

                <div className="field">
                  <label>I am interested in</label>
                  <select value={form.interest} onChange={set("interest")}>
                    <option>Aesthetics Reading</option>
                    <option>Wellness Reading</option>
                    <option>Aura skin reading</option>
                    <option>AVEN Essential membership</option>
                    <option>AVEN Elevate (founding cohort)</option>
                    <option>Salon · Press · Other</option>
                  </select>
                </div>

                <div className="field">
                  <label>A few words about what you're hoping for</label>
                  <textarea value={form.message} onChange={set("message")} placeholder="Optional. Anything you'd like the clinic to know in advance." />
                </div>

                <div style={{ display: "flex", gap: 32, alignItems: "center", marginTop: 16, flexWrap: "wrap" }}>
                  <button type="submit" className="btn solid"
                    style={{ height: 56 }}>
                    <span>Send</span><span className="arrow"></span>
                  </button>
                  <div className="body-sm" style={{ color: "var(--muted)" }}>
                    We respond personally — not from a queue — within one business day.
                  </div>
                </div>
              </form>
            ) : (
              <div style={{ padding: "80px 0", textAlign: "left" }}>
                <Logo size={48} />
                <div className="label" style={{ marginTop: 32, color: "var(--gold)" }}>Received</div>
                <h2 className="display" style={{ fontSize: 56, margin: "20px 0 24px", fontWeight: 300 }}>
                  Thank you, {form.name.split(" ")[0] || "friend"}.
                </h2>
                <p className="body">
                  We've received your Reading request. We'll be in touch within one business day.
                </p>
                <div style={{ marginTop: 40, display: "flex", gap: 22 }}>
                  <button className="link" onClick={() => setSent(false)}>
                    <span>Send another</span><span className="arrow"></span>
                  </button>
                  <button className="link" onClick={() => navigate("/aura")}>
                    <span>Read AURA</span><span className="arrow"></span>
                  </button>
                </div>
              </div>
            )}
          </Reveal>

          <Reveal delay={140}>
            <Ph label="The Clinic · entry" meta="warm tungsten · brass detail" aspect="4/5" />
            <div style={{ marginTop: 40, display: "grid", gap: 28 }}>
              <div>
                <div className="label" style={{ color: "var(--gold)" }}>Visit</div>
                <div className="display" style={{ fontSize: 22, marginTop: 8, lineHeight: 1.4, fontWeight: 300 }}>
                  Clinic address — to be confirmed<br />Orland Park, IL
                </div>
              </div>
              <div>
                <div className="label" style={{ color: "var(--gold)" }}>Hours</div>
                <div className="display" style={{ fontSize: 20, marginTop: 8, lineHeight: 1.6, fontWeight: 300 }}>
                  Tuesday – Friday · 10 – 6<br />
                  Saturday · By appointment<br />
                  <span style={{ color: "var(--muted)" }}>Closed Sunday & Monday</span>
                </div>
              </div>
              <div>
                <div className="label" style={{ color: "var(--gold)" }}>Direct</div>
                <div className="display" style={{ fontSize: 20, marginTop: 8, lineHeight: 1.6, fontWeight: 300 }}>
                  hello@avenmed.co<br />
                  (704) 488 · 8280
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section style={{ marginTop: 40 }}>
        <div className="container">
          <Reveal>
            <Ph label="Clinic map · Orland Park · hand-rendered" meta="ivory on slate · letterpress" aspect="21/9" />
          </Reveal>
        </div>
      </section>

      <DividerMark />

      {/* CLOSING */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={42} style={{ margin: "0 auto 24px" }} />
            <div className="display italic" style={{ fontSize: "clamp(24px, 3vw, 38px)", maxWidth: "30ch", margin: "0 auto", color: "var(--ivory)" }}>
              "We do not advertise. We are introduced.
              Thank you for finding us."
            </div>
            <div className="label" style={{ marginTop: 32, color: "var(--muted)" }}>— THE AVEN CLINIC</div>
          </Reveal>
        </div>
      </section>
      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default ContactPage;
