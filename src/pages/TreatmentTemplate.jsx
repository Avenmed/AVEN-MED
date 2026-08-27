/* AVEN MED — master treatment landing-page template.
 *
 * Every treatment page (Botox, fillers, Sculptra, …) renders through this one
 * component from a plain data object, so the layout, branding, and SEO stay
 * identical across pages. To add a treatment: create a data file (see
 * BotoxOrlandPark.jsx), add a route in app.jsx, and a title/description in
 * seo.js. Universal copy (the AVEN philosophy + the two Assessment tiers) lives
 * here; treatment-specific copy comes from `data`.
 *
 * DOES NOT introduce new styling — reuses existing classes and the same inline
 * patterns as the Assessment / Memberships pages. */
import React from 'react';
import { Eyebrow, Logo, Ph, Reveal, DividerMark, HeroBg, AssessmentCTA, PreOpeningNote } from '../components.jsx';
import Video from '../Video.jsx';
import { CLINIC, DEFAULT_AREAS } from '../content/clinic.js';
// Bridal registry is the single source of truth for which services are commonly
// part of a bridal plan — so the cross-link surfaces on exactly those pages with
// no per-page data edits and no duplicated list.
import { BRIDAL_SERVICE_SLUGS } from '../content/bridal/index.js';
// Assessment tier FACTS (name, price presentation, duration, Aura, written plan,
// fee credit) come from one canonical source — never restated per template.
import { QUICK_ASSESSMENT, COMPREHENSIVE_ASSESSMENT, tierInclusions } from '../content/assessment-tiers.js';

const BASE_URL = CLINIC.url;

// Injects page-specific JSON-LD (Breadcrumb + FAQ + MedicalBusiness) and cleans
// it up on unmount so it never leaks onto the next route.
function useTreatmentSchema(data) {
  React.useEffect(() => {
    const areas = data.localAreas || DEFAULT_AREAS;
    const url = `${BASE_URL}/${data.slug}`;
    const graph = [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Aesthetics", "item": `${BASE_URL}/aesthetics` },
          { "@type": "ListItem", "position": 3, "name": data.breadcrumbName, "item": url },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": data.faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      },
      {
        // Route-specific service. The clinic + provider are defined once,
        // canonically, in index.html (#clinic / #alaa) and referenced by @id here
        // — never re-declared — so the whole site resolves to one coherent entity.
        "@type": "MedicalProcedure",
        "name": data.procedureName,
        "procedureType": "https://schema.org/NoninvasiveProcedure",
        "description": data.procedureDescription,
        "provider": { "@id": `${BASE_URL}/#clinic` },
      },
    ];
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "treatment-schema";
    el.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    document.head.appendChild(el);
    return () => { el.remove(); };
  }, [data]);
}

const dash = (
  <span style={{ width: 12, height: 1, background: "var(--gold)", marginTop: 11, flexShrink: 0 }}></span>
);

/* One Assessment tier card. Every FACT it shows — name, price presentation,
 * duration, Aura, the written plan, the fee credit — comes from the canonical
 * tier object in content/assessment-tiers.js. The page passes only its own
 * `blurb` and its own discipline-specific `extras` for the middle of the list. */
function AssessmentTier({ tier, blurb, extras = [], featured, navigate }) {
  return (
    <div style={{
      padding: "48px 40px",
      border: `1px solid ${featured ? "var(--gold-soft)" : "var(--hairline)"}`,
      background: featured ? "var(--surface)" : "var(--bg)",
      height: "100%", display: "flex", flexDirection: "column", position: "relative",
    }}>
      <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.28em" }}>{tier.name}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 18, marginBottom: 8 }}>
        {tier.pricePrefix && (
          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--muted)", fontSize: 18 }}>{tier.pricePrefix}</span>
        )}
        <span style={{ fontFamily: "var(--sans)", fontSize: 48, fontWeight: 400, color: "var(--gold)", letterSpacing: "-0.01em", fontVariantNumeric: "lining-nums tabular-nums" }}>{tier.price}</span>
        <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--muted)", fontSize: 18 }}>{tier.durationNote}</span>
      </div>
      <p className="body" style={{ margin: "0 0 24px", maxWidth: "44ch" }}>{blurb}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12, paddingTop: 20, borderTop: "1px solid var(--hairline)" }}>
        {tierInclusions(tier, extras).map((it) => (
          <li key={it} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, color: "var(--ivory)", fontSize: 14 }}>
            {dash}<span>{it}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "auto" }}>
        <div className="body-sm" style={{ color: "var(--muted)", fontStyle: "italic", marginBottom: 18, fontFamily: "var(--serif)", fontSize: 15 }}>
          {tier.creditNote}
        </div>
        <AssessmentCTA navigate={navigate} className={featured ? "btn solid" : "link"} style={{ alignSelf: "flex-start" }} />
      </div>
    </div>
  );
}

/* Section order. A treatment data module may override it with `sectionOrder`; every
 * page that does not is rendered in exactly this legacy sequence, so adding an
 * optional section or reordering one page cannot move any other page. */
const DEFAULT_SECTION_ORDER = [
  "hero", "whyAven", "treats", "howItWorks", "comparison", "assessment",
  "whatToExpect", "treatmentPlanning", "faq", "related", "relatedConcerns",
  "bridal", "finalCta",
];

/* De-boxed Assessment tier, matching the locked /assessment presentation: one thin
 * hairline, no fill, both depths identical in weight so neither reads as a budget
 * option or an upsell. Facts still come from content/assessment-tiers.js. Opt-in
 * per page via `editorial: true`. */
function EditorialTier({ tier, blurb, extras = [], navigate }) {
  return (
    <div style={{ paddingTop: 26, borderTop: "1px solid var(--hairline)", height: "100%", display: "flex", flexDirection: "column" }}>
      <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.28em" }}>{tier.label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 18, marginBottom: 20 }}>
        {tier.pricePrefix && (
          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--muted)", fontSize: 18 }}>{tier.pricePrefix}</span>
        )}
        <span style={{ fontFamily: "var(--serif)", fontSize: 44, fontWeight: 300, color: "var(--gold)", letterSpacing: "-0.01em" }}>{tier.price}</span>
        <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--muted)", fontSize: 18 }}>{tier.durationNote}</span>
      </div>
      <p className="body" style={{ margin: "0 0 24px", maxWidth: "44ch" }}>{blurb}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12, paddingTop: 20, borderTop: "1px solid var(--hairline)" }}>
        {tierInclusions(tier, extras, { credit: true }).map((it) => (
          <li key={it} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, color: "var(--ivory)", fontSize: 14 }}>
            {dash}<span>{it}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24 }}>
        <AssessmentCTA navigate={navigate} className="link" style={{ alignSelf: "flex-start" }} />
        <a href={tier.detailPath} onClick={(e) => { e.preventDefault(); navigate(tier.detailPath); }} className="link" data-aven-cta="assessment-tier" data-tier={tier.key}>
          <span>See what's included</span><span className="arrow"></span>
        </a>
      </div>
    </div>
  );
}

const TreatmentTemplate = ({ data, navigate }) => {
  useTreatmentSchema(data);
  const areas = data.localAreas || DEFAULT_AREAS;
  const areasLine = areas.slice(0, -1).join(", ") + " & " + areas[areas.length - 1];

  const SECTIONS = {
    hero: (
      <section className="has-hero-bg" style={{ paddingTop: 200, paddingBottom: 100 }}>
              <HeroBg />
              <div className="container" style={{ maxWidth: 940, textAlign: "center" }}>
                <Reveal>
                  <Eyebrow>{data.hero.eyebrow}</Eyebrow>
                  <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 104px)", margin: "28px auto 24px", lineHeight: 1.02, maxWidth: "16ch", fontWeight: 300 }}>
                    {data.hero.headline}
                  </h1>
                  <p className="lede" style={{ maxWidth: "54ch", margin: "0 auto 36px" }}>
                    {data.hero.subheadline}
                  </p>
                  {/* Early-stage: send first-time visitors to the Assessment explainer, not
                      straight to scheduling. The final CTA (page end) still books. */}
                  <AssessmentCTA navigate={navigate} to="/assessment" />
                  <div className="label" style={{ color: "var(--muted)", marginTop: 32, letterSpacing: "0.22em" }}>
                    Serving {areasLine}
                  </div>
                </Reveal>
              </div>
            </section>
    ),
    whyAven: (
      <section className="section" style={{ background: "var(--bg-1)" }}>
              <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start", maxWidth: 1080 }}>
                <Reveal>
                  <Eyebrow>Why AVEN MED</Eyebrow>
                </Reveal>
                <Reveal delay={120}>
                  <h2 className="display" style={{ fontSize: "clamp(28px, 3.2vw, 46px)", margin: "0 0 28px", maxWidth: "24ch", fontWeight: 300 }}>
                    {data.whyAven?.headline || <>We do not sell injections. We build a <em>plan.</em></>}
                  </h2>
                  <p className="body" style={{ marginBottom: 22 }}>
                    {data.whyAven?.intro || <>Every recommendation at AVEN MED begins with the AVEN Assessment — never with a syringe. Before we suggest {data.treatmentShort}, we evaluate your facial anatomy, the way your muscles move, the quality of your skin, the balance of your face, and your long-term goals.</>}
                  </p>
                  {data.whyAven?.considers && (
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 26px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
                      {data.whyAven.considers.map((c) => (
                        <li key={c} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 10, color: "var(--ivory)", fontSize: 14 }}>
                          <span style={{ width: 10, height: 1, background: "var(--gold)", marginTop: 10 }}></span><span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="body" style={{ marginBottom: 22 }}>
                    {data.whyAven?.body || <>Only then do we write a plan. Natural-looking results are always the priority — the aim is a softer, rested version of your own expression, never a treated or frozen one. You should still look like yourself.</>}
                  </p>
                  <p className="body" style={{ color: "var(--ivory-soft)" }}>
                    {data.whyAven?.practitionerLine || <>You will only ever be treated by Alaa Mashal, MSN, APRN, FNP-BC — a board-certified Family Nurse Practitioner and the only injector at the practice.</>}
                  </p>
                  {/* Alaa is named on every treatment page but, until now, was not reachable
                      from one. A quiet .link to her existing profile — no card, no portrait,
                      no repeated credentials, no new analytics. */}
                  {!data.provider && (
                    <div style={{ marginTop: 22 }}>
                      <a href="/providers/alaa-mashal" onClick={(e) => { e.preventDefault(); navigate("/providers/alaa-mashal"); }} className="link">
                        <span>Meet Alaa</span><span className="arrow"></span>
                      </a>
                    </div>
                  )}
                </Reveal>
              </div>
            </section>
    ),
    treats: (
      <section className="section">
              <div className="container">
                <Reveal>
                  <Eyebrow>What {data.treatmentShort} Treats</Eyebrow>
                  <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 60px)", margin: "20px 0 12px", maxWidth: "20ch", fontWeight: 300 }}>
                    Mapped to your <em>anatomy.</em>
                  </h2>
                  <p className="body" style={{ marginBottom: 56, maxWidth: "56ch" }}>{data.treats.intro}</p>
                </Reveal>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--hairline)" }}>
                  {data.treats.items.map((t, i) => (
                    <Reveal key={t.name} delay={(i % 2) * 80}>
                      {/* .split-list-item — the alternating divider/indent below are the
                          2-column composition; the class clears them once the grid stacks. */}
                      <div className="split-list-item" style={{ padding: "30px 0", borderBottom: "1px solid var(--hairline)", paddingRight: i % 2 === 0 ? 48 : 0, paddingLeft: i % 2 === 1 ? 48 : 0, borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none" }}>
                        {/* An area with its own landing page links to it; the rest stay
                            static text. Opt-in per item via `path` — no invented routes. */}
                        <h3 className="display" style={{ fontSize: 24, margin: 0, fontWeight: 400 }}>
                          {t.path ? (
                            <a href={t.path} onClick={(e) => { e.preventDefault(); navigate(t.path); }} style={{ color: "inherit", display: "inline-flex", alignItems: "baseline", gap: 10 }}>
                              <span>{t.name}</span>
                              <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 16 }}>&rarr;</span>
                            </a>
                          ) : t.name}
                        </h3>
                        {t.note && <p className="body-sm" style={{ marginTop: 8, color: "var(--muted)" }}>{t.note}</p>}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
    ),
    howItWorks: (
      data.howItWorks && (
              <section className="section">
                <div className="container" style={{ maxWidth: 900 }}>
                  <Reveal>
                    <Eyebrow>{data.howItWorks.eyebrow}</Eyebrow>
                    <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "20px 0 32px", maxWidth: "22ch", fontWeight: 300 }}>
                      {data.howItWorks.headline}
                    </h2>
                  </Reveal>
                  {data.howItWorks.body.map((p, i) => (
                    <Reveal key={i} delay={Math.min(i, 4) * 70}>
                      <p className="body" style={{ marginBottom: 20, maxWidth: "64ch", fontSize: 17, lineHeight: 1.85 }}>{p}</p>
                    </Reveal>
                  ))}
                </div>
              </section>
            )
    ),
    comparison: (
      data.comparison && (
              <section className="section" style={{ background: "var(--bg-1)" }}>
                <div className="container">
                  <Reveal>
                    <Eyebrow>{data.comparison.eyebrow}</Eyebrow>
                    <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "20px 0 20px", maxWidth: "22ch", fontWeight: 300 }}>
                      {data.comparison.headline}
                    </h2>
                    <p className="body" style={{ marginBottom: 56, maxWidth: "62ch" }}>{data.comparison.intro}</p>
                  </Reveal>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                    {data.comparison.items.map((c, i) => (
                      <Reveal key={c.name} delay={i * 100}>
                        <div style={{ padding: "36px 32px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%" }}>
                          <div className="display" style={{ fontFamily: "var(--serif)", fontSize: 26, fontWeight: 400, color: "var(--ivory)" }}>{c.name}</div>
                          <p className="body-sm" style={{ marginTop: 14 }}>{c.note}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                  {data.comparison.closing && (
                    <Reveal>
                      <p className="body" style={{ marginTop: 40, maxWidth: "62ch", color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 18 }}>
                        {data.comparison.closing}
                      </p>
                    </Reveal>
                  )}
                </div>
              </section>
            )
    ),
    assessment: data.editorial ? (
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>The AVEN Assessment</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 60px)", margin: "20px 0 12px", maxWidth: "20ch", fontWeight: 300 }}>
              {data.assessmentIntro?.headline || <>Every plan begins <em>here.</em></>}
            </h2>
            <p className="body" style={{ marginBottom: 48, maxWidth: "56ch" }}>
              {data.assessmentIntro?.body || "Two ways to begin — both credited toward your treatment, so nothing is ever wasted."}
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
            <Reveal>
              <EditorialTier navigate={navigate} tier={QUICK_ASSESSMENT}
                blurb={data.assessmentTiers?.quickBlurb || "A focused consultation with Alaa Mashal, MSN, APRN, FNP-BC — an expert read on your face and a clear first recommendation."}
                extras={data.assessmentTiers?.quickExtras || ["Facial Assessment", "Personalized Recommendations"]} />
            </Reveal>
            <Reveal delay={140}>
              <EditorialTier navigate={navigate} tier={COMPREHENSIVE_ASSESSMENT}
                blurb={data.assessmentTiers?.comprehensiveBlurb || "An in-depth consultation and full facial analysis with a written plan you keep — the complete AVEN approach."}
                extras={data.assessmentTiers?.comprehensiveExtras || ["Comprehensive Facial Analysis", "Medical Review", "Long-Term Treatment Planning"]} />
            </Reveal>
          </div>
          <Reveal>
            <PreOpeningNote subject="AVEN Aesthetics" style={{ marginTop: 32 }} />
          </Reveal>
        </div>
      </section>
    ) : (
      <section className="section">
              <div className="container">
                <Reveal>
                  <Eyebrow>The AVEN Assessment</Eyebrow>
                  <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 60px)", margin: "20px 0 12px", maxWidth: "20ch", fontWeight: 300 }}>
                    Every plan begins <em>here.</em>
                  </h2>
                  <p className="body" style={{ marginBottom: 48, maxWidth: "56ch" }}>
                    Two ways to begin — both credited toward your treatment, so nothing is ever wasted.
                  </p>
                </Reveal>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                  <Reveal>
                    <AssessmentTier
                      navigate={navigate}
                      tier={QUICK_ASSESSMENT}
                      blurb="A focused consultation with Alaa Mashal, MSN, APRN, FNP-BC — an expert read on your face and a clear first recommendation."
                      extras={["Facial Assessment", "Personalized Recommendations"]}
                    />
                  </Reveal>
                  <Reveal delay={140}>
                    <AssessmentTier
                      navigate={navigate}
                      featured
                      tier={COMPREHENSIVE_ASSESSMENT}
                      blurb="An in-depth consultation and full facial analysis with a written plan you keep — the complete AVEN approach."
                      extras={["Comprehensive Facial Analysis", "Medical Review", "Long-Term Treatment Planning"]}
                    />
                  </Reveal>
                </div>
                {/* Pre-launch only. Same shared, BOOKING_ENABLED-gated note and the same
                    position relative to the Assessment CTAs as the four hub pages — the
                    September 15 date stays in its one canonical source. */}
                <Reveal>
                  <PreOpeningNote subject="AVEN Aesthetics" style={{ marginTop: 32 }} />
                </Reveal>
              </div>
            </section>
    ),
    whatToExpect: data.editorial ? (
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>What to Expect</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 60px)", margin: "20px 0 56px", maxWidth: "20ch", fontWeight: 300 }}>
              From visit to <em>result.</em>
            </h2>
          </Reveal>
          {/* Editorial ruled index — the numbered-hairline pattern already approved on the
              Aesthetics hub's Guiding Principles. This is a sequence, not a comparison set,
              so the ordinal carries the order and the box is redundant. */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "48px 40px", alignItems: "start" }}>
            {data.whatToExpect.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div style={{ borderTop: "1px solid var(--hairline)", paddingTop: 26 }}>
                  <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.24em" }}>0{i + 1}</div>
                  <h3 className="display" style={{ fontSize: "clamp(23px, 1.9vw, 26px)", margin: "18px 0 12px", fontWeight: 400 }}>{s.label}</h3>
                  <p className="body-sm" style={{ margin: 0 }}>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    ) : (
      <section className="section" style={{ background: "var(--bg-1)" }}>
              <div className="container">
                <Reveal>
                  <Eyebrow>What to Expect</Eyebrow>
                  <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 60px)", margin: "20px 0 56px", maxWidth: "20ch", fontWeight: 300 }}>
                    From visit to <em>result.</em>
                  </h2>
                </Reveal>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                  {data.whatToExpect.map((s, i) => (
                    <Reveal key={s.label} delay={i * 100}>
                      <div style={{ padding: "32px 24px", border: "1px solid var(--hairline)", height: "100%", background: "var(--bg)" }}>
                        <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.2em" }}>0{i + 1}</div>
                        <h3 className="display" style={{ fontSize: 24, margin: "20px 0 12px", fontWeight: 400 }}>{s.label}</h3>
                        <p className="body-sm" style={{ margin: 0 }}>{s.body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
    ),
    treatmentPlanning: (
      data.treatmentPlanning && (
              <section className="section">
                <div className="container">
                  <Reveal>
                    <Eyebrow>{data.treatmentPlanning.eyebrow}</Eyebrow>
                    <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "20px 0 24px", maxWidth: "22ch", fontWeight: 300 }}>
                      {data.treatmentPlanning.headline}
                    </h2>
                    <p className="body" style={{ marginBottom: 48, maxWidth: "62ch" }}>{data.treatmentPlanning.intro}</p>
                  </Reveal>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--hairline)" }}>
                    {data.treatmentPlanning.factors.map((f, i) => (
                      <Reveal key={f} delay={(i % 2) * 80}>
                        <div className="split-list-item" style={{ padding: "24px 0", borderBottom: "1px solid var(--hairline)", paddingRight: i % 2 === 0 ? 48 : 0, paddingLeft: i % 2 === 1 ? 48 : 0, borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none", display: "grid", gridTemplateColumns: "16px 1fr", gap: 12 }}>
                          <span style={{ width: 10, height: 1, background: "var(--gold)", marginTop: 11 }}></span>
                          <span className="body" style={{ margin: 0 }}>{f}</span>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                  {data.treatmentPlanning.closing && (
                    <Reveal>
                      <p className="body" style={{ marginTop: 36, maxWidth: "62ch", color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 18 }}>
                        {data.treatmentPlanning.closing}
                      </p>
                    </Reveal>
                  )}
                </div>
              </section>
            )
    ),
    faq: (
      <section className="section">
              <div className="container" style={{ maxWidth: 920 }}>
                <Reveal>
                  <Eyebrow>Questions</Eyebrow>
                  <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 56px)", margin: "20px 0 56px", fontWeight: 300 }}>
                    {data.treatmentShort}, answered.
                  </h2>
                </Reveal>
                {data.faqs.map((f, i) => (
                  <Reveal key={f.q} delay={Math.min(i, 6) * 50}>
                    <details style={{ borderTop: "1px solid var(--hairline)", padding: "28px 0", cursor: "pointer" }}>
                      <summary style={{ listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, fontFamily: "var(--serif)", fontSize: 22, fontWeight: 300, letterSpacing: "-0.005em" }}>
                        <span>{f.q}</span>
                        <span style={{ color: "var(--gold)", fontSize: 20, flexShrink: 0 }}>+</span>
                      </summary>
                      <p className="body" style={{ marginTop: 18 }}>{f.a}</p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </section>
    ),
    related: data.editorial ? (
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>Related Treatments</Eyebrow>
            <div className="cx-head" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 40, margin: "20px 0 48px" }}>
              <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)", margin: 0, maxWidth: "20ch", fontWeight: 300 }}>
                A considered <em>pathway.</em>
              </h2>
              <a href="/aesthetics" onClick={(e) => { e.preventDefault(); navigate("/aesthetics"); }} className="link">
                <span>All Aesthetic Treatments</span><span className="arrow"></span>
              </a>
            </div>
          </Reveal>
          {/* Reuses the locked .tx-grid/.tx-row editorial index — the same component the
              parent hub links treatments with. No new card language. */}
          <div className="tx-grid">
            {data.related.map((r, i) => (
              <Reveal key={r.label} delay={(i % 2) * 80}>
                <a href={r.path} onClick={(e) => { e.preventDefault(); navigate(r.path); }} className="tx-row">
                  <span className="tx-head">
                    <span className="tx-name">{r.label}</span>
                    <span aria-hidden="true" className="tx-arrow">&rarr;</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    ) : (
      <section className="section" style={{ background: "var(--bg-1)" }}>
              <div className="container">
                <Reveal>
                  <Eyebrow>Related Treatments</Eyebrow>
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, margin: "20px 0 48px" }}>
                    <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)", margin: 0, maxWidth: "20ch", fontWeight: 300 }}>
                      A considered <em>pathway.</em>
                    </h2>
                    <a href="/aesthetics" onClick={(e) => { e.preventDefault(); navigate("/aesthetics"); }} className="link">
                      <span>All Aesthetic Treatments</span><span className="arrow"></span>
                    </a>
                  </div>
                </Reveal>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                  {data.related.map((r, i) => (
                    <Reveal key={r.label} delay={(i % 3) * 80}>
                      <a
                        href={r.path}
                        onClick={(e) => { e.preventDefault(); navigate(r.path); }}
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "26px 28px", border: "1px solid var(--hairline)", background: "var(--bg)", transition: "border-color 240ms ease" }}
                      >
                        <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 400, color: "var(--ivory)" }}>{r.label}</span>
                        <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 18, lineHeight: 1, flexShrink: 0 }}>&rarr;</span>
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
    ),
    relatedConcerns: data.editorial ? (
      data.relatedConcernLinks && data.relatedConcernLinks.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal>
              <Eyebrow>Related Concerns</Eyebrow>
              <div className="cx-head" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 40, margin: "20px 0 48px" }}>
                <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)", margin: 0, maxWidth: "22ch", fontWeight: 300 }}>
                  What it <em>addresses.</em>
                </h2>
                <a href="/concerns" onClick={(e) => { e.preventDefault(); navigate("/concerns"); }} className="link">
                  <span>All Patient Concerns</span><span className="arrow"></span>
                </a>
              </div>
            </Reveal>
            {/* .cx-row concern index, as on the parent hub. auto-fit so a single curated
                concern does not sit in a 3-column grid with two empty cells. */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "44px 48px", alignItems: "start" }}>
              {data.relatedConcernLinks.map((r, i) => (
                <Reveal key={r.path} delay={(i % 3) * 80}>
                  <a href={r.path} onClick={(e) => { e.preventDefault(); navigate(r.path); }} className="cx-row">
                    <span className="cx-name">{r.label}</span>
                    <span aria-hidden="true" className="cx-arrow">&rarr;</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )
    ) : (
      data.relatedConcernLinks && data.relatedConcernLinks.length > 0 && (
              <section className="section">
                <div className="container">
                  <Reveal>
                    <Eyebrow>Related Concerns</Eyebrow>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, margin: "20px 0 48px" }}>
                      <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)", margin: 0, maxWidth: "22ch", fontWeight: 300 }}>
                        What it <em>addresses.</em>
                      </h2>
                      <a href="/concerns" onClick={(e) => { e.preventDefault(); navigate("/concerns"); }} className="link">
                        <span>All Patient Concerns</span><span className="arrow"></span>
                      </a>
                    </div>
                  </Reveal>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                    {data.relatedConcernLinks.map((r, i) => (
                      <Reveal key={r.path} delay={(i % 3) * 80}>
                        <a
                          href={r.path}
                          onClick={(e) => { e.preventDefault(); navigate(r.path); }}
                          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "26px 28px", border: "1px solid var(--hairline)", background: "var(--bg)", transition: "border-color 240ms ease" }}
                        >
                          <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 400, color: "var(--ivory)" }}>{r.label}</span>
                          <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 18, lineHeight: 1, flexShrink: 0 }}>&rarr;</span>
                        </a>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
            )
    ),
    bridal: (
      BRIDAL_SERVICE_SLUGS.includes(data.slug) && (
              <section className="section" style={{ textAlign: "center" }}>
                <div className="container" style={{ maxWidth: 720 }}>
                  <Reveal>
                    <Eyebrow>Planning a Wedding?</Eyebrow>
                    <h2 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 46px)", margin: "18px auto 18px", maxWidth: "22ch", fontWeight: 300 }}>
                      See how this fits into <em>The AVEN Bridal Journey.</em>
                    </h2>
                    <p className="body" style={{ margin: "0 auto 28px", maxWidth: "52ch" }}>
                      A personalized, consultation-first way to plan your care in the months before
                      your wedding — coordinated around your date.
                    </p>
                    <a href="/bridal-journey" onClick={(e) => { e.preventDefault(); navigate("/bridal-journey"); }} className="link">
                      <span>Explore the Bridal Journey</span><span className="arrow"></span>
                    </a>
                  </Reveal>
                </div>
              </section>
            )
    ),
    finalCta: (
      /* DividerMark + the closing section are one unit; a fragment because a
         section entry must have a single JSX root. */
      <>
            <DividerMark />
            <section className="section" style={{ textAlign: "center" }}>
              <div className="container">
                <Reveal>
                  <Logo size={40} style={{ margin: "0 auto 26px", opacity: 0.85 }} />
                  <h2 className="display" style={{ fontSize: "clamp(36px, 5.4vw, 72px)", margin: data.finalCta?.copy ? "0 auto 24px" : "0 auto 36px", maxWidth: "16ch", fontWeight: 300 }}>
                    {data.finalCta?.headline || <>Let's create your personalized <em>treatment plan.</em></>}
                  </h2>
                  {data.finalCta?.copy && (
                    <p className="body" style={{ margin: "0 auto 40px", maxWidth: "52ch" }}>{data.finalCta.copy}</p>
                  )}
                  <AssessmentCTA navigate={navigate} />
                </Reveal>
              </div>
            </section>
      </>
    ),
    approach: (
      data.approach && (
        <section className="section">
          <div className="container" style={{ display: "grid", gridTemplateColumns: data.approach.media ? "1.15fr 1fr" : "1fr", gap: 72, alignItems: "center", maxWidth: 1120 }}>
            <Reveal>
              <Eyebrow>{data.approach.eyebrow}</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "20px 0 26px", maxWidth: "22ch", fontWeight: 300 }}>
                {data.approach.headline}
              </h2>
              {data.approach.body.map((t, i) => (
                <p key={i} className="body" style={{ marginBottom: 20, maxWidth: "56ch", fontSize: 17, lineHeight: 1.85 }}>{t}</p>
              ))}
              {data.approach.considers && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--hairline)", marginTop: 32 }}>
                  {data.approach.considers.map((c, i) => (
                    <div key={c} className="split-list-item" style={{ padding: "18px 0", borderBottom: "1px solid var(--hairline)", paddingRight: i % 2 === 0 ? 40 : 0, paddingLeft: i % 2 === 1 ? 40 : 0, borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none", display: "grid", gridTemplateColumns: "16px 1fr", gap: 12 }}>
                      <span style={{ width: 10, height: 1, background: "var(--gold)", marginTop: 11 }}></span>
                      <span className="body-sm" style={{ margin: 0 }}>{c}</span>
                    </div>
                  ))}
                </div>
              )}
              {data.approach.closing && (
                <p className="body" style={{ marginTop: 32, maxWidth: "56ch", color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 18 }}>
                  {data.approach.closing}
                </p>
              )}
            </Reveal>
            {data.approach.media && (
              <Reveal delay={140}>
                <Ph label={data.approach.media.label} meta={data.approach.media.meta} aspect={data.approach.media.aspect || "4/5"}>
                  <Video src={data.approach.media.src} poster={data.approach.media.poster} />
                </Ph>
              </Reveal>
            )}
          </div>
        </section>
      )
    ),
    provider: (
      data.provider && (
        <section className="section" style={{ background: "var(--bg-1)" }}>
          <div className="container" style={{ maxWidth: 1080 }}>
            <Reveal>
              <Eyebrow>{data.provider.eyebrow}</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "20px 0 26px", maxWidth: "20ch", fontWeight: 300 }}>
                {data.provider.headline}
              </h2>
              {data.provider.body.map((t, i) => (
                <p key={i} className="body" style={{ marginBottom: 20, maxWidth: "62ch", fontSize: 17, lineHeight: 1.85 }}>{t}</p>
              ))}
              <div style={{ marginTop: 26 }}>
                <a href="/providers/alaa-mashal" onClick={(e) => { e.preventDefault(); navigate("/providers/alaa-mashal"); }} className="link">
                  <span>Meet Alaa</span><span className="arrow"></span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      )
    ),
    safety: (
      data.safety && (
        <section className="section">
          <div className="container">
            <Reveal>
              <Eyebrow>{data.safety.eyebrow}</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "20px 0 24px", maxWidth: "22ch", fontWeight: 300 }}>
                {data.safety.headline}
              </h2>
              <p className="body" style={{ marginBottom: 48, maxWidth: "62ch" }}>{data.safety.intro}</p>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--hairline)" }}>
              {data.safety.items.map((s, i) => (
                <Reveal key={s.name} delay={(i % 2) * 80}>
                  <div className="split-list-item" style={{ padding: "28px 0", borderBottom: "1px solid var(--hairline)", paddingRight: i % 2 === 0 ? 48 : 0, paddingLeft: i % 2 === 1 ? 48 : 0, borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none" }}>
                    <h3 className="display" style={{ fontSize: 23, margin: 0, fontWeight: 400 }}>{s.name}</h3>
                    <p className="body-sm" style={{ marginTop: 8, color: "var(--muted)" }}>{s.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            {data.safety.closing && (
              <Reveal>
                <p className="body" style={{ marginTop: 36, maxWidth: "62ch", color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 18 }}>
                  {data.safety.closing}
                </p>
              </Reveal>
            )}
          </div>
        </section>
      )
    ),
  };

  const order = data.sectionOrder || DEFAULT_SECTION_ORDER;

  return (
    <main className="page">
      {order.map((key) => (
        <React.Fragment key={key}>{SECTIONS[key] || null}</React.Fragment>
      ))}
      <div className="brand-signature">AVEN MED · {CLINIC.addressLocality} · By appointment</div>
    </main>
  );
};

export default TreatmentTemplate;
