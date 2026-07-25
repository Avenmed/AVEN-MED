/* AVEN MED — Memberships hub.
 *
 * A philosophy-first introduction to ongoing care, not a pricing page. Answers
 * "why a membership?" before "what does it cost?", then presents the two existing
 * plans exactly as approved. Recurring theme, woven (not repeated verbatim):
 * membership is about more intentional care, not more treatments — a care
 * relationship, not a discount program.
 *
 * All plans, pricing, benefits, the comparison table, and FAQs are the existing,
 * approved membership facts — nothing here is invented. */
import React from 'react';
import { DividerMark, Eyebrow, Logo, Ph, Reveal, HeroBg, AssessmentCTA } from '../components.jsx';
import Video from '../Video.jsx';

// The philosophy behind membership — why, before what.
const PRINCIPLES = [
  { n: "01", k: "Long-Term Partnership", b: "Care that unfolds as a relationship over years, not a series of one-off appointments." },
  { n: "02", k: "Prevention Over Reaction", b: "The steady, unglamorous work of maintaining results and staying ahead — not chasing corrections after the fact." },
  { n: "03", k: "Consistent Care", b: "One practitioner, one continuous plan, refined visit after visit as your goals and your life change." },
  { n: "04", k: "Personalized Planning", b: "Your pathway is reviewed and adjusted through the year — considered, never on a coupon cycle." },
  { n: "05", k: "Flexible by Design", b: "Pause without penalty, keep what you've banked, and move between tiers whenever it suits you." },
  { n: "06", k: "Better Through Continuity", b: "The best outcomes come from steady attention over time — which is exactly what a membership makes possible." },
];

// Conceptual benefits — framed before the plans. Every one maps to a real,
// existing membership feature; none are invented.
const BENEFITS = [
  { k: "A Considered Investment", b: "A steady monthly contribution banks toward your treatments, so care becomes a plan rather than a run of one-off decisions. It isn't a discount — it's your own care, funded intentionally." },
  { k: "Ongoing Guidance", b: "Your pathway is reviewed with you through the year, with a skin assessment that keeps the plan current — attention, not just access." },
  { k: "Priority Access", b: "Priority booking and Saturday clinic access, so care fits your life. Signature adds a direct line to your practitioner." },
  { k: "Continuity of Care", b: "The same practitioner and the same plan, deepening over time. Continuity is the quiet advantage behind lasting results." },
  { k: "Flexibility", b: "Pause without penalty and keep your banked credit; switch tiers whenever it suits you. The membership bends to your life." },
  { k: "Member Moments", b: "Early access to new treatments and technology — and, for Signature, the AVEN Birthday, marked the way it should be." },
];

// Who it's designed for — editorial framing, not invented facts.
const AUDIENCE = [
  "You're on an ongoing pathway, not a single treatment",
  "You value continuity with one practitioner over time",
  "You'd rather maintain results than chase corrections",
  "You want predictable, intentional budgeting for your care",
  "You appreciate priority access that fits a busy life",
  "You're planning skin and aesthetic goals across years, not weeks",
];

const MembershipsPage = ({ navigate }) => {
  return (
    <main className="page">
      {/* 1 — HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 80 }}>
        <HeroBg />
        <div className="container">
          <Reveal style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <Eyebrow>Memberships</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 132px)", margin: "24px 0 0", lineHeight: 0.96, maxWidth: "12ch" }}>
                Care that<br /><em>compounds</em><br />over time.
              </h1>
            </div>
            <p className="lede">
              An AVEN membership isn't a way to buy more treatments — it's a way to
              be cared for more intentionally. A steady, ongoing relationship with
              the practice, built around continuity and the long view.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2 — WHY MEMBERSHIPS EXIST */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 72, alignItems: "center", maxWidth: 1240 }}>
          <Reveal>
            <Ph label="AVEN · Founding Member" meta="cinematic · 4:3" aspect="4/3">
              <Video src="assets/membership.mp4" />
            </Ph>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Why Memberships Exist</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "18px 0 26px", maxWidth: "20ch", fontWeight: 300 }}>
              Not more treatments. More <em>intentional care.</em>
            </h2>
            <p className="body" style={{ marginBottom: 20, fontSize: 17, lineHeight: 1.85 }}>
              A face — and your health — don't change on a coupon cycle. They change
              over years, with the steady attention of one practitioner who knows your
              history and your goals. We created memberships so that kind of care could
              be the default, not the exception.
            </p>
            <p className="body" style={{ marginBottom: 20, fontSize: 17, lineHeight: 1.85 }}>
              A membership makes care continuous and considered: you invest steadily,
              plan ahead, and treat when your pathway calls for it — never because a
              promotion says so. It's a relationship with the practice, not a discount
              on a service.
            </p>
            <p className="body" style={{ color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 19 }}>
              Membership isn't about receiving more treatments — it's about receiving more intentional care.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3 — THE AVEN PHILOSOPHY */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>The AVEN Philosophy</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 68px)", margin: "20px 0 0", maxWidth: "18ch", fontWeight: 300 }}>
              Six ideas behind the <em>membership.</em>
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

      {/* 4 — BENEFITS OF MEMBERSHIP (conceptual, before the plans) */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>Benefits of Membership</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 60px)", margin: "20px 0 16px", maxWidth: "22ch", fontWeight: 300 }}>
              What membership actually <em>gives you.</em>
            </h2>
            <p className="body" style={{ marginBottom: 56, maxWidth: "60ch" }}>
              Before the plans, the point of them — the things a membership makes possible,
              whichever tier you choose.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--hairline)" }}>
            {BENEFITS.map((c, i) => (
              <Reveal key={c.k} delay={(i % 2) * 80}>
                <div style={{ padding: "30px 0", borderBottom: "1px solid var(--hairline)", paddingRight: i % 2 === 0 ? 48 : 0, paddingLeft: i % 2 === 1 ? 48 : 0, borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none" }}>
                  <h3 className="display" style={{ fontSize: 23, margin: 0, fontWeight: 400 }}>{c.k}</h3>
                  <p className="body-sm" style={{ marginTop: 8, color: "var(--muted)" }}>{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — WHO MEMBERSHIPS ARE DESIGNED FOR */}
      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 72, alignItems: "start" }}>
          <Reveal>
            <Eyebrow>Who It's For</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)", margin: "18px 0 20px", maxWidth: "16ch", fontWeight: 300 }}>
              Made for the long <em>relationship.</em>
            </h2>
            <p className="body" style={{ maxWidth: "40ch" }}>
              A membership suits patients who see their care as ongoing — not everyone
              needs one, and that's the honest truth. It tends to fit when:
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {AUDIENCE.map((a) => (
                <li key={a} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 14, color: "var(--ivory)", fontSize: 16, borderBottom: "1px solid var(--hairline)", paddingBottom: 16 }}>
                  <span style={{ width: 10, height: 1, background: "var(--gold)", marginTop: 12 }}></span><span>{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 6 — MEMBERSHIP OPTIONS — how it works + the two plans + comparison */}
      <section className="section" style={{ background: "var(--bg-1)", paddingBottom: 28 }}>
        <div className="container">
          <Reveal>
            <Eyebrow>Membership Options</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 68px)", margin: "20px 0 16px", maxWidth: "20ch", fontWeight: 300 }}>
              Two ways to <em>belong.</em>
            </h2>
            <p className="body" style={{ maxWidth: "60ch" }}>
              Two tiers, one philosophy. Your monthly contribution banks toward your
              treatments — it's your care, funded steadily, never a spend-down or a discount.
            </p>
          </Reveal>

          {/* HOW IT WORKS */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 48 }}>
            {[
              { n: "01", k: "Bank Monthly", b: "Your membership contribution accrues toward treatments. Nothing expires while active." },
              { n: "02", k: "Plan Quarterly", b: "We review your pathway with you four times a year — adjusting for season, life, and progress." },
              { n: "03", k: "Treat When Ready", b: "Visit when your pathway calls for it. There is no pressure to spend down." },
              { n: "04", k: "Stay, or Pause", b: "Memberships pause without penalty. Banked credit stays usable for twelve months." }
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div style={{ padding: "34px 26px", border: "1px solid var(--hairline)", height: "100%", background: "var(--bg)" }}>
                  <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.2em" }}>{s.n}</div>
                  <h4 className="display" style={{ fontSize: 26, margin: "20px 0 12px", fontWeight: 300 }}>{s.k}</h4>
                  <p className="body-sm" style={{ margin: 0 }}>{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TWO PLANS (existing, approved — preserved verbatim) */}
      <section className="section" style={{ background: "var(--bg-1)", paddingTop: 24 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

            {/* MAINTENANCE — $100/month */}
            <Reveal className="plan">
              <div className="tier">AVEN Maintenance</div>
              <h3 style={{ marginBottom: 10 }}>Maintenance</h3>
              <p className="body-sm" style={{ margin: 0, maxWidth: "44ch" }}>
                The foundational membership. A monthly contribution that
                banks toward treatments and keeps your pathway moving.
              </p>
              <div className="price">
                <span className="amt">$100</span>
                <span className="per">/ month</span>
              </div>
              <ul style={{ marginTop: 12 }}>
                {[
                  "$100 banked monthly toward treatments",
                  "Skin assessment — we review your pathway 1–2x a year",
                  "Saturday clinic access",
                  "Priority booking · 48-hour advance access",
                  "Banked credit retained if you pause"
                ].map((s) => (
                  <li key={s}><span>{s}</span></li>
                ))}
              </ul>
              <a href="/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="link" style={{ alignSelf: "flex-start", marginTop: 8 }}>
                <span>Inquire about Maintenance</span><span className="arrow"></span>
              </a>
            </Reveal>

            {/* SIGNATURE — $200/month */}
            <Reveal delay={140} className="plan feat">
              <div className="tier">AVEN Signature</div>
              <h3 style={{ marginBottom: 10 }}>Signature</h3>
              <p className="body-sm" style={{ margin: 0, maxWidth: "44ch" }}>
                The deeper practice. A larger monthly contribution that
                banks toward treatments, with expanded access.
              </p>
              <div className="price">
                <span className="amt">$200</span>
                <span className="per">/ month</span>
              </div>
              <div className="label" style={{ color: "var(--gold)", marginTop: 20, letterSpacing: "0.28em" }}>
                Everything in Maintenance, plus —
              </div>
              <ul style={{ marginTop: 12 }}>
                {[
                  "$200 banked monthly toward treatments",
                  {
                    primary: "One annual AVEN Assessment (up to 60 min), included with your Signature membership.",
                    descriptor: "A full review at the end of your pathway comparing your baseline to your progress and planning your next chapter."
                  },
                  "Saturday clinic access",
                  "Direct line to your clinical lead, Alaa Mashal, FNP-BC",
                  "Early access to new treatments and clinic technology",
                  {
                    primary: "The AVEN Birthday.",
                    descriptor: "Every year, we mark yours the way it should be — with something personal, chosen just for you. What it is stays a surprise. That we remembered doesn't."
                  }
                ].map((s, i) => (
                  typeof s === "string" ? (
                    <li key={i}><span>{s}</span></li>
                  ) : (
                    <li key={i}>
                      <span>{s.primary}</span>
                      <div style={{ gridColumn: 2, fontSize: 12, lineHeight: 1.5, color: "var(--muted)", marginTop: 4, fontWeight: 300, fontStyle: "italic" }}>
                        {s.descriptor}
                      </div>
                    </li>
                  )
                ))}
              </ul>
              <a href="/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid" style={{ alignSelf: "flex-start" }}>
                <span>Inquire about Signature</span><span className="arrow"></span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE (existing, approved — preserved) */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>Compare</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 60px", maxWidth: "18ch", fontWeight: 300 }}>
              Side by side.
            </h2>
          </Reveal>

          <div style={{ border: "1px solid var(--hairline)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", padding: "20px 32px", borderBottom: "1px solid var(--hairline)" }}>
              <div className="label" style={{ color: "var(--muted)" }}>Benefit</div>
              <div className="label" style={{ color: "var(--ivory-soft)" }}>Maintenance</div>
              <div className="label" style={{ color: "var(--gold)" }}>Signature</div>
            </div>
            {[
              ["Monthly contribution", "$100", "$200"],
              ["Banked toward treatments", "$100 / month", "$200 / month"],
              ["Skin assessment review", "1–2x / year", "1–2x / year"],
              ["Annual AVEN Assessment (up to 60 min)", "—", "Included"],
              ["Saturday clinic access", "Included", "Included"],
              ["Priority booking", "48 hours", "Concierge line"],
              ["Pathway review", "Quarterly", "Quarterly + on-demand"],
              ["Early access · new technology", "—", "First access"]
            ].map(([k, e, el], i, arr) => (
              <div key={k}
                style={{
                  display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr",
                  padding: "22px 32px", borderBottom: i === arr.length - 1 ? "none" : "1px solid var(--hairline)",
                  alignItems: "center", fontSize: 14
                }}>
                <div style={{ color: "var(--ivory)" }}>{k}</div>
                <div style={{ color: "var(--ivory-soft)" }}>{e}</div>
                <div style={{ color: el === "—" ? "var(--muted)" : "var(--gold)", fontFamily: "var(--serif)", fontStyle: el === "—" ? "normal" : "italic", fontSize: 16 }}>{el}</div>
              </div>
            ))}
          </div>
          <Reveal>
            <p className="body" style={{ marginTop: 36, maxWidth: "62ch", color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 18 }}>
              Whichever tier you choose, the value is the same: more intentional care, not more treatments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7 — FAQ (existing answers preserved; two added from confirmed facts) */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ maxWidth: 920 }}>
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 56px)", margin: "20px 0 60px", fontWeight: 300 }}>
              Common ones.
            </h2>
          </Reveal>
          {[
            ["Who benefits most from a membership?", "Patients who see their care as ongoing — who value continuity with one practitioner and would rather maintain results steadily than chase corrections. Not everyone needs a membership, and we'll always be honest about that."],
            ["What does my monthly contribution actually pay for?", "Your full monthly contribution is banked toward treatments at AVEN. Banked credit applies to treatments only — not to wellness packages or retail products. The benefits above (priority booking, Saturday access, skin assessment review) are included on top."],
            ["How does the AVEN Assessment fit in?", "Every plan at AVEN begins with the AVEN Assessment, and the Signature membership includes one full annual Assessment (up to 60 minutes) — a chance to compare your baseline to your progress and plan the next chapter."],
            ["What happens if I pause?", "Membership can be paused at any time. Your banked credit remains usable for twelve months from the pause date — applied to any service when you're ready to return."],
            ["Can I switch between Maintenance and Signature?", "Yes. You can move between the two tiers at any time. Banked credit carries over."],
            ["Can I gift membership?", "Yes. Memberships can be gifted in three-, six-, or twelve-month increments."],
            ["What's included in the skin assessment review?", "Once or twice a year, we sit down to look at your pathway together — what's working, what's next, what to adjust. The skin is read; the plan is updated."]
          ].map(([q, a], i) => (
            <Reveal key={q} delay={Math.min(i, 6) * 50}>
              <details style={{
                borderTop: "1px solid var(--hairline)", padding: "28px 0", cursor: "pointer"
              }}>
                <summary style={{
                  listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24,
                  fontFamily: "var(--serif)", fontSize: 24, fontWeight: 300, letterSpacing: "-0.005em"
                }}>
                  <span>{q}</span>
                  <span style={{ color: "var(--gold)", fontSize: 20, flexShrink: 0 }}>+</span>
                </summary>
                <p className="body" style={{ marginTop: 18 }}>{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 8 — THE AVEN ASSESSMENT */}
      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 72, alignItems: "center" }}>
          <Reveal>
            <Eyebrow>The AVEN Assessment</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.2vw, 56px)", margin: "18px 0 22px", maxWidth: "18ch", fontWeight: 300 }}>
              Every relationship begins <em>here.</em>
            </h2>
            <p className="body" style={{ marginBottom: 22, maxWidth: "48ch" }}>
              Membership deepens a relationship that starts with the AVEN Assessment — an
              honest read on your goals and a plan built around them. Signature members
              receive a full Assessment each year as part of their membership.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
              <AssessmentCTA navigate={navigate} />
              <a href="/assessment" onClick={(e) => { e.preventDefault(); navigate("/assessment"); }} className="link">
                <span>How the Assessment works</span><span className="arrow"></span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Ph label="The practice · consultation" meta="natural light · 4:5 · placeholder" aspect="4/5">
              <Video src="assets/sculptra-v2.mp4" />
            </Ph>
          </Reveal>
        </div>
      </section>

      {/* 9 — MEET YOUR PROVIDER */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 72, alignItems: "center" }}>
          <Reveal>
            <Ph label="Alaa Mashal, FNP-BC · portrait" meta="natural light · 4:5 · placeholder" aspect="4/5">
              <Video src="assets/alaa-2.mp4" />
            </Ph>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>Meet Your Provider</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.2vw, 56px)", margin: "18px 0 22px", maxWidth: "18ch", fontWeight: 300 }}>
              One practitioner, over the <em>long run.</em>
            </h2>
            <p className="body" style={{ marginBottom: 22, maxWidth: "48ch" }}>
              A membership is a relationship with a person, not a plan. That person is
              Alaa Mashal, FNP-BC — founder and lead practitioner of AVEN MED — and
              Signature members have a direct line to her.
            </p>
            <a href="/providers/alaa-mashal" onClick={(e) => { e.preventDefault(); navigate("/providers/alaa-mashal"); }} className="link">
              <span>Meet Alaa</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>

      <DividerMark />

      {/* 10 — CONTACT / JOIN */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={42} style={{ margin: "0 auto 28px" }} />
            <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 80px)", margin: "0 auto 24px", maxWidth: "16ch", fontWeight: 300 }}>
              An investment in your <em>care.</em>
            </h2>
            <p className="body" style={{ margin: "0 auto 40px", maxWidth: "54ch" }}>
              Membership is about being cared for more intentionally, over time. When
              that's what you're looking for, we'd be glad to begin.
            </p>
            <a href="/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }} className="btn solid">
              <span>Apply for Membership</span><span className="arrow"></span>
            </a>
          </Reveal>
        </div>
      </section>
      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default MembershipsPage;
