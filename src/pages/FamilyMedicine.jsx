/* AVEN MED — Family Medicine hub.
 *
 * A philosophy-first healthcare destination, not a service directory: it answers
 * "why AVEN for primary care?" before "what services?", then guides patients into
 * the existing Primary Care landing page (the detailed educational destination).
 * The service directory derives from the registry (getHubEntries), so new Family
 * Medicine pages appear automatically. The hub introduces; the landing pages teach. */
import React from 'react';
import { DividerMark, Eyebrow, Logo, Ph, Reveal, HeroBg, AssessmentCTA, PreOpeningNote } from '../components.jsx';
import Video from '../Video.jsx';
import { getHubEntries } from '../content/registry.jsx';

// Guiding principles — the philosophy of primary care at AVEN.
const PRINCIPLES = [
  { n: "01", k: "Relationship-Based", b: "One provider who knows you — your history, your goals, your file — rather than a rotating cast of faces." },
  { n: "02", k: "Prevention First", b: "The most valuable medicine is often the quiet, steady kind: staying ahead of problems rather than only reacting to them." },
  { n: "03", k: "Continuity of Care", b: "Care that builds over time. Every visit picks up where the last one left off — nothing starts from zero." },
  { n: "04", k: "Whole-Person Care", b: "You're a person with a life and a history, not a symptom or a chart. We treat it that way." },
  { n: "05", k: "Evidence-Based", b: "Modern, guideline-informed medicine, applied honestly — including knowing when the answer is to wait or to refer." },
  { n: "06", k: "Every Stage of Life", b: "Primary care for adults and families that evolves as your health and your life change." },
];

// What primary care covers — editorial context (breadth), not the landing page's detail.
const COVERS = [
  { k: "Preventive Care", b: "Age- and risk-appropriate screening conversations, and the habits that protect your long-term health." },
  { k: "Chronic-Condition Support", b: "Steady, coordinated management of stable conditions within an outpatient scope." },
  { k: "Acute Concerns", b: "Outpatient evaluation of common, non-emergency illnesses and new symptoms." },
  { k: "Medication Management", b: "A careful look at what you take, why, and whether it still fits — reviewed and coordinated safely." },
  { k: "Labs & Interpretation", b: "Relevant labs ordered when clinically appropriate, and read in the context of your life." },
  { k: "Referrals & Coordination", b: "Connecting you with specialists when needed, and helping keep the whole picture together." },
];

// Related care at AVEN — the wellness services that genuinely complement primary care.
const RELATED = [
  { n: "Preventive Wellness", d: "Proactive guidance to understand your risks and build sustainable routines.", path: "/wellness/preventive-wellness" },
  { n: "Longevity & Lab Testing", d: "Clinician-guided lab evaluation, coordinated with your primary care.", path: "/wellness/longevity-lab-testing" },
  { n: "Nutrition & Metabolic Support", d: "Practical, sustainable nutrition guidance alongside your medical care.", path: "/wellness/nutrition-metabolic-support" },
  { n: "Medical Weight Loss", d: "A clinician-guided program for weight and metabolic health.", path: "/wellness/medical-weight-loss" },
];

const FamilyMedicinePage = ({ navigate }) => {
  // Service cards derive from the registry; new Family Medicine pages appear here
  // automatically. The "AVEN Concierge Family Medicine" section below is the
  // section's editorial "Soon" teaser for a genuinely planned service.
  const services = getHubEntries("familyMedicine");

  return (
    <main className="page">
      {/* 1 — HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 80 }}>
        <HeroBg />
        <div className="container">
          <Reveal style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <Eyebrow>· Family Medicine</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 132px)", margin: "24px 0 0", lineHeight: 0.96, maxWidth: "14ch" }}>
                Care for every<br /><em>season.</em>
              </h1>
            </div>
            <p className="lede">
              Primary care built on relationships, not appointments — a steady
              medical home where you're known, your history is remembered, and
              prevention comes first.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2 — WHY AVEN FAMILY MEDICINE (philosophy before services) */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "center", maxWidth: 1120 }}>
          <Reveal>
            <Ph label="Family medicine · the practice" meta="warm tungsten · 4:5 · placeholder" aspect="4/5">
              <Video src="/assets/family-med.mp4" />
            </Ph>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Why AVEN Family Medicine</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "18px 0 26px", maxWidth: "20ch", fontWeight: 300 }}>
              Primary care is a <em>relationship,</em> not a transaction.
            </h2>
            <p className="body" style={{ marginBottom: 20, fontSize: 17, lineHeight: 1.85 }}>
              The best medicine happens over time, with someone who knows you. Primary
              care is the through-line of your health — the provider who remembers your
              history, helps you stay well, treats the everyday things, and helps you
              navigate the rest of the system.
            </p>
            <p className="body" style={{ marginBottom: 20, fontSize: 17, lineHeight: 1.85 }}>
              At AVEN it's practiced that way on purpose: unhurried, evidence-based, and
              centered on you rather than a symptom. We listen before we treat, plan for
              prevention as much as problems, and keep your care in one steady pair of
              hands.
            </p>
            <p className="body" style={{ color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 19 }}>
              It's care that's grounded and human — a medical home you return to, not a
              stop you pass through.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3 — GUIDING PRINCIPLES */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>Guiding Principles</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 68px)", margin: "20px 0 0", maxWidth: "18ch", fontWeight: 300 }}>
              How we practice primary <em>care.</em>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 56 }}>
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.n} delay={(i % 3) * 90}>
                <div style={{ padding: "36px 28px", border: "1px solid var(--hairline)", height: "100%", background: "var(--surface)" }}>
                  <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.2em" }}>{p.n}</div>
                  <h3 className="display" style={{ fontSize: 26, margin: "20px 0 14px", fontWeight: 400 }}>{p.k}</h3>
                  <p className="body-sm" style={{ margin: 0 }}>{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — WHAT PRIMARY CARE COVERS (editorial breadth) */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>What Primary Care Covers</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 60px)", margin: "20px 0 16px", maxWidth: "22ch", fontWeight: 300 }}>
              Broad by design, honest about <em>limits.</em>
            </h2>
            <p className="body" style={{ marginBottom: 56, maxWidth: "60ch" }}>
              Primary care is generalist by nature — it covers a wide range within an
              outpatient scope, and coordinates the rest. A closer look at each lives on
              the Primary Care page.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--hairline)" }}>
            {COVERS.map((c, i) => (
              <Reveal key={c.k} delay={(i % 2) * 80}>
                <div className="split-list-item" style={{ padding: "28px 0", borderBottom: "1px solid var(--hairline)", paddingRight: i % 2 === 0 ? 48 : 0, paddingLeft: i % 2 === 1 ? 48 : 0, borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none" }}>
                  <h3 className="display" style={{ fontSize: 23, margin: 0, fontWeight: 400 }}>{c.k}</h3>
                  <p className="body-sm" style={{ marginTop: 8, color: "var(--muted)" }}>{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="body-sm" style={{ marginTop: 28, maxWidth: "64ch", color: "var(--muted)", fontStyle: "italic" }}>
              Primary care is not a promise that every condition can be managed at AVEN. Some
              concerns are better served by a specialist or a different level of care, and
              we'll tell you honestly when that's the case.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5 — FAMILY MEDICINE SERVICES — registry-derived directory (the landing pages) */}
      {services.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal>
              <Eyebrow>· Family Medicine Services</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 60px)", margin: "20px 0 16px", maxWidth: "20ch", fontWeight: 300 }}>
                Where to <em>begin.</em>
              </h2>
              <p className="body" style={{ marginBottom: 56, maxWidth: "58ch" }}>
                Relationship-based primary care — evidence-based, continuous, and
                coordinated. Step into the detailed page to learn how it works.
              </p>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {services.map((s) => (
                <Reveal key={s.label}>
                  {s.path && !s.soon ? (
                    <a
                      href={s.path}
                      onClick={(e) => { e.preventDefault(); navigate(s.path); }}
                      style={{ display: "block", padding: "32px 30px", border: "1px solid var(--gold-soft)", background: "var(--surface)", height: "100%", transition: "border-color 240ms ease" }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14 }}>
                        <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "var(--ivory)" }}>{s.label}</span>
                        <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 18, lineHeight: 1, flexShrink: 0 }}>&rarr;</span>
                      </div>
                      <p className="body-sm" style={{ marginTop: 14, color: "var(--muted)" }}>{s.blurb}</p>
                    </a>
                  ) : (
                    <div style={{ padding: "32px 30px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14 }}>
                        <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "var(--ivory)" }}>{s.label}</span>
                        <span className="label" style={{ color: "var(--muted)", flexShrink: 0, letterSpacing: "0.2em" }}>Soon</span>
                      </div>
                      <p className="body-sm" style={{ marginTop: 14, color: "var(--muted)" }}>{s.blurb}</p>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6 — CONCIERGE. Describes the direction of the practice, never availability.
          No status eyebrow, no waitlist, no founding list, no enrolment path. */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 96, alignItems: "center" }}>
          <Reveal>
            <Ph aspect="16/9">
              <Video src="/assets/concierge-family-med.mp4" />
            </Ph>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>· The Wider Practice</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(26px, 3.2vw, 42px)", margin: "16px 0 20px", maxWidth: "18ch" }}>
              AVEN <em>Concierge</em><br />Family Medicine.
            </h2>
            <p className="body">
              The same primary care, held closer still — a small panel, direct
              practitioner access, and longer visits with the provider who already
              knows your file. That describes where AVEN Family Medicine is
              heading rather than something you can join today. Primary care
              itself is open now.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7 — HOW IT WORKS. Insurance participation is being established for Family
          Medicine; the previous categorical "cash-pay, no insurance billing" claim is
          retired. Do NOT state network status, name a payer, or promise coverage,
          reimbursement, a copay or a deductible — none of that is established. */}
      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start", maxWidth: 1080 }}>
          <Reveal>
            <Eyebrow>· How It Works</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="display" style={{ fontSize: "clamp(28px, 3vw, 44px)", margin: "0 0 24px", maxWidth: "26ch", fontWeight: 300 }}>
              Payment and <em>insurance.</em>
            </h3>
            <p className="body" style={{ marginBottom: 22 }}>
              Insurance participation is being established for AVEN Family
              Medicine. Coverage and network participation vary by plan, so
              please contact us to confirm what applies to you before your
              visit. Self-pay remains available either way.
            </p>
            <p className="body" style={{ color: "var(--ivory-soft)" }}>
              Contact AVEN MED for current visit pricing and scheduling.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8 — RELATED CARE (wellness services that complement primary care) */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>Alongside Your Care</Eyebrow>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 40 }}>
              <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 60px)", margin: "20px 0 0", maxWidth: "22ch", fontWeight: 300 }}>
                Care that <em>connects.</em>
              </h2>
              <a href="/wellness" onClick={(e) => { e.preventDefault(); navigate("/wellness"); }} className="link">
                <span>All wellness services</span><span className="arrow"></span>
              </a>
            </div>
            <p className="body" style={{ margin: "22px 0 48px", maxWidth: "60ch" }}>
              Primary care coordinates naturally with AVEN Wellness. Where it's clinically
              useful, we connect the two.
            </p>
          </Reveal>
          <div className="fm-related-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {RELATED.map((r, i) => (
              <Reveal key={r.path} delay={(i % 2) * 80}>
                <a
                  href={r.path}
                  onClick={(e) => { e.preventDefault(); navigate(r.path); }}
                  style={{ display: "block", padding: "28px 30px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%", transition: "border-color 240ms ease" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14 }}>
                    <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 400, color: "var(--ivory)" }}>{r.n}</span>
                    <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 17, lineHeight: 1, flexShrink: 0 }}>&rarr;</span>
                  </div>
                  <p className="body-sm" style={{ marginTop: 12, color: "var(--muted)" }}>{r.d}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — THE AVEN ASSESSMENT */}
      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 72, alignItems: "center" }}>
          <Reveal>
            <Eyebrow>The AVEN Assessment</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.2vw, 56px)", margin: "18px 0 22px", maxWidth: "18ch", fontWeight: 300 }}>
              Care begins with <em>understanding.</em>
            </h2>
            <p className="body" style={{ marginBottom: 22, maxWidth: "48ch" }}>
              New relationships at AVEN begin with a conversation — your history, your
              goals, and what matters to you — before any plan is made. It's how care
              here starts with the person, not the symptom.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
              <AssessmentCTA navigate={navigate} />
              <a href="/assessment" onClick={(e) => { e.preventDefault(); navigate("/assessment"); }} className="link">
                <span>How the Assessment works</span><span className="arrow"></span>
              </a>
            </div>
            {/* Pre-launch only. Renders while BOOKING_ENABLED is false and removes itself
                the day booking opens — same gated line and placement as the other hubs. */}
            <PreOpeningNote subject="AVEN Family Medicine" nextStep="your next step" />
          </Reveal>
          <Reveal delay={140}>
            <Ph label="The practice · consultation" meta="natural light · 4:5 · placeholder" aspect="4/5">
              <Video src="/assets/family-med.mp4" />
            </Ph>
          </Reveal>
        </div>
      </section>

      {/* 10 — MEET YOUR PROVIDER */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 72, alignItems: "center" }}>
          <Reveal>
            <Ph label="Alaa Mashal, MSN, APRN, FNP-BC · portrait" meta="natural light · 4:5 · placeholder" aspect="4/5">
              <Video src="/assets/alaa-2.mp4" />
            </Ph>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>Meet Your Provider</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.2vw, 56px)", margin: "18px 0 22px", maxWidth: "18ch", fontWeight: 300 }}>
              One provider, who knows <em>you.</em>
            </h2>
            <p className="body" style={{ marginBottom: 22, maxWidth: "48ch" }}>
              Your care is led by Alaa Mashal, MSN, APRN, FNP-BC — founder and clinical director of
              AVEN MED, and a board-certified Family Nurse Practitioner. The person who
              assesses you is the person who cares for you.
            </p>
            <a href="/providers/alaa-mashal" onClick={(e) => { e.preventDefault(); navigate("/providers/alaa-mashal"); }} className="link">
              <span>Meet Alaa</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>

      <DividerMark />

      {/* 11 — CONTACT / SCHEDULING */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={42} style={{ margin: "0 auto 28px" }} />
            <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 80px)", margin: "0 auto 24px", maxWidth: "14ch", fontWeight: 300 }}>
              A medical home you can <em>return to.</em>
            </h2>
            <p className="body" style={{ margin: "0 auto 40px", maxWidth: "52ch" }}>
              Start with a conversation — your history, your goals, and what matters
              to you — with the practitioner who will care for you.
            </p>
            {/* The page's primary conversion point is a Family Medicine action, not the
                aesthetic Assessment. Same shared component, same /contact destination and
                the same data-aven-cta tracking; only the label is discipline-appropriate,
                matching the Primary Care page. /contact now carries a Family Medicine
                interest option, so the lead reaches Podium correctly labelled. */}
            <AssessmentCTA navigate={navigate} label="Schedule a Family Medicine Consult" />
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default FamilyMedicinePage;
