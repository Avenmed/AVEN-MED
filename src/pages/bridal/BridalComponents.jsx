/* AVEN MED — Bridal Journey reusable components.
 *
 * Editorial, restrained, medical-luxury — reuses the shared AVEN design kit
 * (Reveal, Eyebrow, Logo, HeroBg, DividerMark, Ph) and the site's typography,
 * palette, and motion. No new design system. All content comes in as props from
 * the Bridal registry (single source of truth); these components render only.
 *
 * Accessibility: correct heading levels are chosen by the parent page; timeline
 * and FAQ use native <details>/<summary> (keyboard + screen-reader friendly);
 * the builder outputs are announced via aria-live; motion respects the global
 * prefers-reduced-motion rule (.reveal). Mobile: the timeline is vertical/
 * accordion — never a cramped horizontal strip. */
import React from 'react';
import { Eyebrow, Logo, Reveal, HeroBg, DividerMark, Ph } from '../../components.jsx';
import { computeTimelinePlan } from '../../content/bridal/index.js';

// --- Shared JSON-LD injector (mirrors the site's inline-schema convention) ---
export function useJsonLd(id, data) {
  React.useEffect(() => {
    if (!data) return undefined;
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    el.textContent = JSON.stringify(data);
    document.head.appendChild(el);
    return () => { el.remove(); };
  }, [id, data]);
}

const isPlaceholder = (s) => typeof s === "string" && s.trim().startsWith("[Placeholder");

// --- Bridal CTA (to the Bridal Assessment) ----------------------------------
export function BridalAssessmentCTA({ navigate, label = "Begin Your Bridal Journey", href = "/bridal-journey/assessment", variant = "solid" }) {
  return (
    <a href={href} className={`btn ${variant}`} style={{ height: 56 }}
      onClick={(e) => { e.preventDefault(); navigate(href); }}>
      <span>{label}</span><span className="arrow"></span>
    </a>
  );
}

// --- Disclaimer -------------------------------------------------------------
export function BridalDisclaimer({ children, style = {} }) {
  return (
    <p className="body-sm" role="note" style={{ color: "var(--muted)", fontStyle: "italic", maxWidth: "64ch", ...style }}>
      {children}
    </p>
  );
}

// --- Hero -------------------------------------------------------------------
export function BridalHero({ hero, navigate }) {
  return (
    <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 80 }}>
      <HeroBg />
      <div className="container">
        <Reveal style={{ display: "grid", gap: 40 }}>
          <div style={{ maxWidth: "22ch" }}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(46px, 7vw, 108px)", margin: "24px 0 0", lineHeight: 0.98 }}>
              {isPlaceholder(hero.headline) ? <span style={{ color: "var(--muted)" }}>[Headline placeholder]</span> : hero.headline}
            </h1>
          </div>
          <p className="lede" style={{ maxWidth: "52ch" }}>
            {isPlaceholder(hero.supporting) ? <span style={{ color: "var(--muted)" }}>[Supporting statement placeholder — final copy pending approval.]</span> : hero.supporting}
          </p>
          <div style={{ display: "flex", gap: 22, flexWrap: "wrap", alignItems: "center" }}>
            <BridalAssessmentCTA navigate={navigate} label={hero.primaryCtaLabel} href={hero.primaryCtaHref} />
            <a href={hero.secondaryCtaHref} className="link"
              onClick={(e) => { if (hero.secondaryCtaHref.startsWith("#")) { e.preventDefault(); document.querySelector(hero.secondaryCtaHref)?.scrollIntoView({ behavior: "smooth" }); } else { e.preventDefault(); navigate(hero.secondaryCtaHref); } }}>
              <span>{hero.secondaryCtaLabel}</span><span className="arrow"></span>
            </a>
          </div>
          {/* Bridal photography / video slot — placeholder */}
          <Ph label="Bridal editorial · 16:9 · placeholder" meta="soft natural light · placeholder" aspect="16/9" style={{ marginTop: 16 }} />
        </Reveal>
      </div>
    </section>
  );
}

// --- Introduction -----------------------------------------------------------
export function BridalIntroduction({ intro }) {
  return (
    <section className="section" style={{ background: "var(--bg-1)" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start", maxWidth: 1120 }}>
        <Reveal><Eyebrow>{intro.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={120}>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "0 0 26px", maxWidth: "22ch", fontWeight: 300 }}>
            {isPlaceholder(intro.headline) ? <span style={{ color: "var(--muted)" }}>[Section headline placeholder]</span> : intro.headline}
          </h2>
          {intro.body.map((p, i) => (
            <p key={i} className="body" style={{ marginBottom: 20, fontSize: 17, lineHeight: 1.85, color: isPlaceholder(p) ? "var(--muted)" : undefined }}>
              {isPlaceholder(p) ? "[Introduction paragraph placeholder — explains what the AVEN Bridal Journey is, why to plan ahead, why each journey differs, how the AVEN Assessment shapes the plan, and how treatments may be coordinated around the wedding date. Final copy pending approval.]" : p}
            </p>
          ))}
          <BridalDisclaimer style={{ marginTop: 8 }}>
            The AVEN Bridal Journey is an overview, not a medical plan. There is no universal timeline that fits every patient — your plan is created individually at a consultation.
          </BridalDisclaimer>
        </Reveal>
      </div>
    </section>
  );
}

// --- Goals grid -------------------------------------------------------------
export function BridalGoalsGrid({ goals = [], title = "Possible goals" }) {
  if (!goals.length) return null;
  return (
    <div style={{ marginTop: 18 }}>
      <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.2em", marginBottom: 12 }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
        {goals.map((g, i) => (
          <li key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, color: isPlaceholder(g) ? "var(--muted)" : "var(--ivory)", fontSize: 15 }}>
            <span aria-hidden="true" style={{ width: 10, height: 1, background: "var(--gold)", marginTop: 11 }} />
            <span>{isPlaceholder(g) ? "[Planning goal placeholder — provider-approved]" : g}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// --- Timeline (vertical rail + native accordion; mobile-safe) ---------------
export function BridalTimelineStage({ stage, navigate }) {
  return (
    <details className="bridal-stage" style={{ position: "relative", paddingLeft: 34, borderTop: "1px solid var(--hairline)" }}>
      <summary style={{ listStyle: "none", cursor: "pointer", padding: "26px 0", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 20 }}>
        {/* rail dot */}
        <span aria-hidden="true" style={{ position: "absolute", left: 0, top: 32, width: 11, height: 11, borderRadius: "50%", border: "1px solid var(--gold)", background: "var(--bg)" }} />
        <span className="display" style={{ fontFamily: "var(--serif)", fontSize: "clamp(20px, 2.4vw, 26px)", fontWeight: 400, color: "var(--ivory)" }}>{stage.label}</span>
        <span className="label" style={{ color: "var(--gold)", flexShrink: 0 }}>{stage.range}</span>
      </summary>
      <div style={{ paddingBottom: 30, maxWidth: "64ch" }}>
        <p className="body" style={{ color: "var(--muted)", fontStyle: "italic", marginBottom: 8 }}>
          {isPlaceholder(stage.intro) ? "[Stage introduction placeholder — final copy pending approval.]" : stage.intro}
        </p>
        <BridalGoalsGrid goals={stage.goals} />
        {/* Related services / articles resolve from the registry once approved */}
        <p className="body-sm" style={{ color: "var(--muted)", marginTop: 16 }}>
          Related services and reading for this stage will be curated with provider-approved guidance.
        </p>
        <p className="body-sm" style={{ color: "var(--muted)", marginTop: 8 }}>
          <strong style={{ color: "var(--ivory-soft)" }}>Timing &amp; safety:</strong> {isPlaceholder(stage.safetyNote) ? "[To be provided by the clinical team.]" : stage.safetyNote}
        </p>
        <div style={{ marginTop: 18 }}>
          <a href={stage.ctaHref} className="link" onClick={(e) => { e.preventDefault(); navigate(stage.ctaHref); }}>
            <span>{stage.ctaLabel}</span><span className="arrow"></span>
          </a>
        </div>
      </div>
    </details>
  );
}

export function BridalJourneyTimeline({ stages = [], navigate }) {
  return (
    <section className="section" id="timeline">
      <div className="container" style={{ maxWidth: 900 }}>
        <Reveal>
          <Eyebrow>The Timeline</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(34px, 5vw, 64px)", margin: "20px 0 16px", fontWeight: 300 }}>
            A journey, <em>stage by stage.</em>
          </h2>
          <BridalDisclaimer style={{ marginBottom: 36 }}>
            These stages are a planning framework, not a medical schedule. What's right for you — and when — is decided with your provider at the AVEN Assessment.
          </BridalDisclaimer>
        </Reveal>
        <Reveal>
          <div style={{ borderBottom: "1px solid var(--hairline)" }}>
            {stages.map((s) => <BridalTimelineStage key={s.id} stage={s} navigate={navigate} />)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// --- Concern selector (reusable chip multi-select) --------------------------
export function BridalConcernSelector({ options = [], value = [], onChange, label }) {
  const toggle = (opt) => {
    if (!onChange) return;
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
  };
  return (
    <div>
      {label && <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.2em", marginBottom: 12 }}>{label}</div>}
      <div role="group" aria-label={label || "Options"} style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {options.map((opt) => {
          const active = value.includes(opt);
          return (
            <button key={opt} type="button" aria-pressed={active} onClick={() => toggle(opt)}
              style={{ padding: "9px 16px", cursor: "pointer", minHeight: 44,
                border: `1px solid ${active ? "var(--gold)" : "var(--hairline)"}`,
                background: active ? "var(--surface)" : "transparent",
                color: active ? "var(--gold)" : "var(--ivory-soft)",
                fontFamily: "var(--sans)", fontSize: 13, letterSpacing: "0.04em" }}>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// --- Service connections (references to existing service pages) -------------
export function BridalServiceConnections({ serviceLinks = [], navigate }) {
  if (!serviceLinks.length) return null;
  return (
    <section className="section" style={{ background: "var(--bg-1)" }}>
      <div className="container">
        <Reveal>
          <Eyebrow>Services Brides Ask About</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 56px)", margin: "20px 0 16px", maxWidth: "20ch", fontWeight: 300 }}>
            Care that may be part of <em>your plan.</em>
          </h2>
          <BridalDisclaimer style={{ marginBottom: 40 }}>
            These are existing AVEN services brides commonly ask about — not a recommendation. No treatment is right for everyone; what fits you is determined at your AVEN Assessment.
          </BridalDisclaimer>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {serviceLinks.map((s) => (
            <Reveal key={s.path}>
              <a href={s.path} onClick={(e) => { e.preventDefault(); navigate(s.path); }}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, padding: "20px 22px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%" }}>
                <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 19, fontWeight: 400, color: "var(--ivory)" }}>{s.label}</span>
                <span aria-hidden="true" style={{ color: "var(--gold)", flexShrink: 0 }}>&rarr;</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Education links (planned Education Center articles) ---------------------
export function BridalEducationLinks({ refs = [], navigate }) {
  if (!refs.length) return null;
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <Eyebrow>Bridal Education</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 56px)", margin: "20px 0 16px", maxWidth: "22ch", fontWeight: 300 }}>
            Read before you <em>plan.</em>
          </h2>
          <BridalDisclaimer style={{ marginBottom: 40 }}>
            These clinically reviewed guides are being written for the AVEN Education Center. They'll link here as they publish.
          </BridalDisclaimer>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {refs.map((a) => {
            const planned = a.status !== "published";
            const inner = (
              <>
                <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 19, fontWeight: 400, color: planned ? "var(--muted)" : "var(--ivory)" }}>{a.title}</span>
                <span className="label" style={{ color: "var(--gold)", flexShrink: 0 }}>{planned ? "Soon" : "Read"}</span>
              </>
            );
            const box = { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, padding: "20px 22px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%" };
            return planned ? (
              <Reveal key={a.slug}><div aria-disabled="true" style={{ ...box, opacity: 0.7 }}>{inner}</div></Reveal>
            ) : (
              <Reveal key={a.slug}>
                <a href={`/education/${a.slug}`} onClick={(e) => { e.preventDefault(); navigate(`/education/${a.slug}`); }} style={box}>{inner}</a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- FAQ (accordion; page emits the FAQPage schema) -------------------------
export function BridalFAQSection({ faqs = [] }) {
  if (!faqs.length) return null;
  return (
    <section className="section" style={{ background: "var(--bg-1)" }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <Reveal><Eyebrow>Questions</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 56px)", margin: "20px 0 32px", fontWeight: 300 }}>Common <em>questions.</em></h2>
        </Reveal>
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={Math.min(i, 6) * 40}>
            <details style={{ borderTop: "1px solid var(--hairline)", padding: "24px 0" }}>
              <summary style={{ listStyle: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, fontFamily: "var(--serif)", fontSize: 20, fontWeight: 300 }}>
                <span>{f.q}</span><span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 20, flexShrink: 0 }}>+</span>
              </summary>
              <p className="body" style={{ marginTop: 16 }}>{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// --- Testimonial + gallery placeholders -------------------------------------
export function BridalTestimonialPlaceholder() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <Reveal>
          <Eyebrow>In Their Words</Eyebrow>
          <div className="display italic" style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "var(--muted)", margin: "24px auto 0", maxWidth: "26ch" }}>
            [Testimonial placeholder — no reviews or quotes will appear until real, approved patient stories exist.]
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function BridalGalleryPlaceholder() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <Eyebrow>Bridal Gallery</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", margin: "20px 0 28px", fontWeight: 300 }}>A <em>gallery</em>, in time.</h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
          {[0, 1, 2].map((i) => (
            <Reveal key={i}><Ph label="Bridal imagery · 4:5 · placeholder" aspect="4/5" /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Timeline builder ("Build My Bridal Timeline") --------------------------
// Planning/education tool only — factual date math + generic next-step. No
// diagnosis, prescription, candidacy, or treatment recommendation.
export function BridalTimelineBuilder({ builder, navigate }) {
  const [weddingDate, setWeddingDate] = React.useState("");
  const [planningStage, setPlanningStage] = React.useState("");
  const [concerns, setConcerns] = React.useState([]);
  // "now" captured once at mount; never read inside pure planner.
  const todayISO = React.useMemo(() => new Date().toISOString().slice(0, 10), []);
  const plan = React.useMemo(() => computeTimelinePlan({ weddingDate }, todayISO), [weddingDate, todayISO]);

  const concernInput = (builder.inputs || []).find((i) => i.id === "concerns");
  const stageInput = (builder.inputs || []).find((i) => i.id === "planningStage");

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <Reveal>
          <Eyebrow>Build My Bridal Timeline</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 56px)", margin: "20px 0 16px", maxWidth: "20ch", fontWeight: 300 }}>
            A place to <em>begin planning.</em>
          </h2>
          <BridalDisclaimer style={{ marginBottom: 32 }}>{builder.disclaimer}</BridalDisclaimer>
        </Reveal>

        <Reveal>
          <div style={{ display: "grid", gap: 28, padding: "clamp(24px, 4vw, 40px)", border: "1px solid var(--hairline)", background: "var(--surface)" }}>
            <div className="field">
              <label htmlFor="bt-date">Wedding date</label>
              <input id="bt-date" type="date" value={weddingDate} onChange={(e) => setWeddingDate(e.target.value)} />
            </div>

            {stageInput && (
              <div className="field">
                <label htmlFor="bt-stage">{stageInput.label}</label>
                <select id="bt-stage" value={planningStage} onChange={(e) => setPlanningStage(e.target.value)}>
                  <option value="">Select…</option>
                  {stageInput.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            )}

            {concernInput && (
              <BridalConcernSelector label={concernInput.label} options={concernInput.options} value={concerns} onChange={setConcerns} />
            )}

            {/* Output — factual planning context only */}
            <div aria-live="polite" style={{ borderTop: "1px solid var(--hairline)", paddingTop: 24 }}>
              {!plan ? (
                <p className="body-sm" style={{ color: "var(--muted)" }}>Enter your wedding date to see how much time you have to plan.</p>
              ) : plan.isPast ? (
                <div>
                  <p className="body" style={{ marginBottom: 8 }}>That date has passed — congratulations. You may be interested in post-wedding maintenance.</p>
                  <p className="body-sm" style={{ color: "var(--muted)" }}>Your next step is always a conversation, not a prescription.</p>
                </div>
              ) : (
                <div style={{ display: "grid", gap: 10 }}>
                  <div className="display" style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 300 }}>
                    <span style={{ color: "var(--gold)" }}>{plan.monthsRemaining}</span> {plan.monthsRemaining === 1 ? "month" : "months"} until your wedding
                    <span className="body-sm" style={{ color: "var(--muted)", display: "block", marginTop: 4 }}>({plan.daysRemaining} days)</span>
                  </div>
                  {plan.currentStageLabel && (
                    <p className="body">Your date currently falls in the <strong style={{ color: "var(--ivory-soft)" }}>{plan.currentStageLabel}</strong> planning window — a good set of topics to discuss at your AVEN Assessment.</p>
                  )}
                  <p className="body-sm" style={{ color: "var(--muted)" }}>
                    This is a planning aid only. Your personalized plan — including whether any treatment is appropriate and when — is created with a qualified provider at a consultation.
                  </p>
                </div>
              )}
            </div>

            <div>
              <BridalAssessmentCTA navigate={navigate} label={plan?.nextStep?.label || "Begin Your Bridal Journey"} href={plan?.nextStep?.href || "/bridal-journey/assessment"} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// --- Patient journey (the AVEN experience) ----------------------------------
// Renders entirely from registry data. Semantic ordered list; optional icons and
// optional per-step CTAs; skips disabled steps; understandable without icons or
// animation; reflows to a single column on mobile; motion via .reveal (respects
// reduced-motion). Audience-agnostic — works for any future journey record.
export function BridalPatientJourneyStep({ step, navigate }) {
  return (
    <li style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 20, padding: "26px 0", borderTop: "1px solid var(--hairline)", alignItems: "start" }}>
      <div aria-hidden="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: "50%", border: "1px solid var(--gold-soft)", color: "var(--gold)", fontFamily: "var(--serif)", fontSize: 18 }}>
        {step.icon ? step.icon : step.order}
      </div>
      <div>
        <h3 className="display" style={{ fontFamily: "var(--serif)", fontSize: "clamp(20px, 2.6vw, 26px)", fontWeight: 400, color: "var(--ivory)", margin: 0 }}>{step.title}</h3>
        <p className="body" style={{ marginTop: 8, color: "var(--muted)", fontStyle: isPlaceholder(step.description) ? "italic" : "normal", maxWidth: "60ch" }}>
          {isPlaceholder(step.description) ? "[Step description placeholder — restrained copy pending approval.]" : step.description}
        </p>
        {step.ctaLabel && step.ctaDestination && (
          <div style={{ marginTop: 14 }}>
            <a href={step.ctaDestination} className="link" onClick={(e) => { e.preventDefault(); navigate(step.ctaDestination); }}>
              <span>{step.ctaLabel}</span><span className="arrow"></span>
            </a>
          </div>
        )}
      </div>
    </li>
  );
}

export function BridalPatientJourney({ patientJourney, navigate }) {
  if (!patientJourney) return null;
  const steps = (patientJourney.steps || []).filter((s) => s.enabled !== false).sort((a, b) => (a.order || 0) - (b.order || 0));
  if (!steps.length) return null;
  return (
    <section className="section" style={{ background: "var(--bg-1)" }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <Reveal>
          <Eyebrow>{patientJourney.eyebrow || "Your AVEN Bridal Experience"}</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(34px, 5vw, 64px)", margin: "20px 0 16px", fontWeight: 300 }}>
            {isPlaceholder(patientJourney.title) ? <span style={{ color: "var(--muted)" }}>[Experience section headline placeholder]</span> : (patientJourney.title || <>Your <em>experience.</em></>)}
          </h2>
          <p className="body" style={{ marginBottom: 6, maxWidth: "60ch", color: isPlaceholder(patientJourney.introduction) ? "var(--muted)" : undefined, fontStyle: isPlaceholder(patientJourney.introduction) ? "italic" : "normal" }}>
            {isPlaceholder(patientJourney.introduction) ? "[Introduction placeholder — describes the AVEN experience from first contact through long-term care. Final copy pending approval.]" : patientJourney.introduction}
          </p>
          <BridalDisclaimer style={{ marginBottom: 24 }}>
            Every plan is individual — the steps below describe the shape of the experience, not a treatment plan. No two journeys are the same.
          </BridalDisclaimer>
        </Reveal>
        <Reveal>
          <ol style={{ listStyle: "none", padding: 0, margin: 0, borderBottom: "1px solid var(--hairline)" }}>
            {steps.map((s) => <BridalPatientJourneyStep key={s.id} step={s} navigate={navigate} />)}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

// --- Resources (future materials) -------------------------------------------
// Renders ONLY enabled resources with a destination; returns null otherwise, so
// planned/disabled placeholders never show an empty section or a broken link.
// Supports internal or external destinations and any future format/audience.
export function BridalResources({ resources, navigate }) {
  const items = ((resources && resources.items) || []).filter((r) => r.enabled && r.destination);
  if (!items.length) return null;
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <Eyebrow>{resources.eyebrow || "Bridal Resources"}</Eyebrow>
          {!isPlaceholder(resources.title) && resources.title && (
            <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 56px)", margin: "20px 0 16px", fontWeight: 300 }}>{resources.title}</h2>
          )}
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {items.map((r) => {
            const inner = (
              <>
                <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 19, fontWeight: 400, color: "var(--ivory)" }}>{r.title}</span>
                <span aria-hidden="true" style={{ color: "var(--gold)", flexShrink: 0 }}>{r.external ? "↗" : "→"}</span>
              </>
            );
            const box = { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, padding: "20px 22px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%" };
            return r.external ? (
              <Reveal key={r.id}><a href={r.destination} target="_blank" rel="noreferrer" style={box}>{inner}</a></Reveal>
            ) : (
              <Reveal key={r.id}><a href={r.destination} onClick={(e) => { e.preventDefault(); navigate(r.destination); }} style={box}>{inner}</a></Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- Final CTA --------------------------------------------------------------
export function BridalFinalCTA({ navigate, journey }) {
  return (
    <>
      <DividerMark />
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={40} style={{ margin: "0 auto 26px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(36px, 5.4vw, 72px)", margin: "0 auto 24px", maxWidth: "15ch", fontWeight: 300 }}>
              Begin your <em>journey.</em>
            </h2>
            <p className="body" style={{ margin: "0 auto 40px", maxWidth: "52ch" }}>
              Every bridal plan starts with a conversation, not a treatment. Begin with a Bridal Assessment and we'll shape the rest together.
            </p>
            <BridalAssessmentCTA navigate={navigate} label={(journey && journey.primaryCta.label) || "Begin Your Bridal Journey"} href={(journey && journey.primaryCta.href) || "/bridal-journey/assessment"} />
          </Reveal>
        </div>
      </section>
      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </>
  );
}
