/* AVEN MED — patient-concern landing-page template.
 *
 * Educational pages that bridge a symptom/concern to the individualized
 * treatment planning of the AVEN Assessment. Renders from a plain data object
 * (see FineLinesWrinkles.jsx) so layout, branding, and SEO stay identical across
 * concerns. Shares the design language of TreatmentTemplate but is a distinct
 * content type — it educates first and never prescribes a single universal fix.
 *
 * DOES NOT introduce new styling — reuses existing classes and the same inline
 * patterns as the treatment pages. */
import React from 'react';
import { Eyebrow, Logo, Reveal, DividerMark, HeroBg, AssessmentCTA } from '../components.jsx';
import { CLINIC, DEFAULT_AREAS } from '../content/clinic.js';

const BASE_URL = CLINIC.url;

// Injects page-specific JSON-LD (Breadcrumb + FAQ + MedicalWebPage + clinic)
// and removes it on unmount so it never leaks onto the next route.
function useConcernSchema(data) {
  React.useEffect(() => {
    const areas = data.localAreas || DEFAULT_AREAS;
    const url = `${BASE_URL}/${data.slug}`;
    const graph = [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Patient Concerns", "item": `${BASE_URL}/concerns` },
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
        "@type": "MedicalWebPage",
        "name": data.seo.title,
        "url": url,
        "description": data.seo.description,
        "audience": { "@type": "MedicalAudience", "audienceType": "Patient" },
        "about": { "@type": "MedicalCondition", "name": data.conditionName },
        "provider": { "@id": `${BASE_URL}/#clinic` },
      },
      // The clinic (#clinic) is defined canonically in index.html and referenced
      // by @id in the MedicalWebPage above — not re-declared here.
    ];
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "concern-schema";
    el.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    document.head.appendChild(el);
    return () => { el.remove(); };
  }, [data]);
}

const dash = (
  <span style={{ width: 12, height: 1, background: "var(--gold)", marginTop: 11, flexShrink: 0 }}></span>
);

function AssessmentTier({ tier, price, subtitle, blurb, includes, featured, navigate }) {
  return (
    <div style={{
      padding: "48px 40px",
      border: `1px solid ${featured ? "var(--gold-soft)" : "var(--hairline)"}`,
      background: featured ? "var(--surface)" : "var(--bg)",
      height: "100%", display: "flex", flexDirection: "column", position: "relative",
    }}>
      <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.28em" }}>{tier}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 18, marginBottom: 8 }}>
        <span style={{ fontFamily: "var(--sans)", fontSize: 48, fontWeight: 400, color: "var(--gold)", letterSpacing: "-0.01em", fontVariantNumeric: "lining-nums tabular-nums" }}>{price}</span>
        <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--muted)", fontSize: 18 }}>{subtitle}</span>
      </div>
      <p className="body" style={{ margin: "0 0 24px", maxWidth: "44ch" }}>{blurb}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12, paddingTop: 20, borderTop: "1px solid var(--hairline)" }}>
        {includes.map((it) => (
          <li key={it} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, color: "var(--ivory)", fontSize: 14 }}>
            {dash}<span>{it}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "auto" }}>
        <div className="body-sm" style={{ color: "var(--muted)", fontStyle: "italic", marginBottom: 18, fontFamily: "var(--serif)", fontSize: 15 }}>
          Credited toward your treatment.
        </div>
        <AssessmentCTA navigate={navigate} className={featured ? "btn solid" : "link"} style={{ alignSelf: "flex-start" }} />
      </div>
    </div>
  );
}

// A two-column list block with the gold hairline markers (reused for several
// concern sections: causes, signs, when-to-seek, assessment factors).
function MarkerGrid({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--hairline)" }}>
      {items.map((t, i) => (
        <Reveal key={t.name || t} delay={(i % 2) * 80}>
          <div style={{ padding: "26px 0", borderBottom: "1px solid var(--hairline)", paddingRight: i % 2 === 0 ? 48 : 0, paddingLeft: i % 2 === 1 ? 48 : 0, borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none" }}>
            {typeof t === "string" ? (
              <div style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12 }}>
                <span style={{ width: 10, height: 1, background: "var(--gold)", marginTop: 11 }}></span>
                <span className="body" style={{ margin: 0 }}>{t}</span>
              </div>
            ) : (
              <>
                <h3 className="display" style={{ fontSize: 22, margin: 0, fontWeight: 400 }}>{t.name}</h3>
                {t.note && <p className="body-sm" style={{ marginTop: 8, color: "var(--muted)" }}>{t.note}</p>}
              </>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

const ConcernTemplate = ({ data, navigate }) => {
  useConcernSchema(data);
  const areas = data.localAreas || DEFAULT_AREAS;
  const areasLine = areas.slice(0, -1).join(", ") + " & " + areas[areas.length - 1];

  return (
    <main className="page">
      {/* 1 — HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 200, paddingBottom: 100 }}>
        <HeroBg />
        <div className="container" style={{ maxWidth: 940, textAlign: "center" }}>
          <Reveal>
            <Eyebrow>{data.hero.eyebrow}</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 104px)", margin: "28px auto 24px", lineHeight: 1.02, maxWidth: "16ch", fontWeight: 300 }}>
              {data.hero.headline}
            </h1>
            <p className="lede" style={{ maxWidth: "56ch", margin: "0 auto 36px" }}>
              {data.hero.subheadline}
            </p>
            {/* Early-stage: concern pages are educational — send first-time visitors to
                the Assessment explainer, not straight to booking. Final CTA still books. */}
            <AssessmentCTA navigate={navigate} to="/assessment" />
            <div className="label" style={{ color: "var(--muted)", marginTop: 32, letterSpacing: "0.22em" }}>
              Serving {areasLine}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — WHAT CAUSES IT */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>{data.causes.eyebrow || "What Causes It"}</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 60px)", margin: "20px 0 12px", maxWidth: "20ch", fontWeight: 300 }}>
              {data.causes.headline}
            </h2>
            <p className="body" style={{ marginBottom: 56, maxWidth: "60ch" }}>{data.causes.intro}</p>
          </Reveal>
          <MarkerGrid items={data.causes.items} />
        </div>
      </section>

      {/* 3 — SIGNS & SYMPTOMS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>Signs &amp; Symptoms</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 60px)", margin: "20px 0 12px", maxWidth: "22ch", fontWeight: 300 }}>
              {data.signs.headline || <>What patients often <em>notice.</em></>}
            </h2>
            <p className="body" style={{ marginBottom: 56, maxWidth: "60ch" }}>{data.signs.intro}</p>
          </Reveal>
          <MarkerGrid items={data.signs.items} />
        </div>
      </section>

      {/* 4 — RISK FACTORS + WHEN TO SEEK EVALUATION */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
          <Reveal>
            <Eyebrow>Risk Factors</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(26px, 3vw, 40px)", margin: "20px 0 24px", fontWeight: 300 }}>
              {data.riskFactors.headline || <>What can make it more <em>likely.</em></>}
            </h2>
            <p className="body" style={{ marginBottom: 24, maxWidth: "42ch" }}>{data.riskFactors.intro}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {data.riskFactors.items.map((r) => (
                <li key={r} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, color: "var(--ivory)", fontSize: 15 }}>
                  <span style={{ width: 10, height: 1, background: "var(--gold)", marginTop: 11 }}></span><span>{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>When to Seek Evaluation</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(26px, 3vw, 40px)", margin: "20px 0 24px", fontWeight: 300 }}>
              {data.whenToSeek.headline || <>A good time to <em>ask.</em></>}
            </h2>
            <p className="body" style={{ marginBottom: 24, maxWidth: "42ch" }}>{data.whenToSeek.intro}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {data.whenToSeek.items.map((r) => (
                <li key={r} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, color: "var(--ivory)", fontSize: 15 }}>
                  <span style={{ width: 10, height: 1, background: "var(--gold)", marginTop: 11 }}></span><span>{r}</span>
                </li>
              ))}
            </ul>
            {data.whenToSeek.note && (
              <p className="body-sm" style={{ marginTop: 22, maxWidth: "44ch", color: "var(--muted)", fontStyle: "italic" }}>{data.whenToSeek.note}</p>
            )}
          </Reveal>
        </div>
      </section>

      {/* 5 — THE AVEN ASSESSMENT (how it identifies factors) */}
      <section className="section">
        <div className="container" style={{ maxWidth: 900, marginBottom: 8 }}>
          <Reveal>
            <Eyebrow>The AVEN Assessment</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "20px 0 24px", maxWidth: "22ch", fontWeight: 300 }}>
              {data.assessment.headline || <>We identify the cause before the <em>plan.</em></>}
            </h2>
            <p className="body" style={{ marginBottom: 28, maxWidth: "64ch", fontSize: 17, lineHeight: 1.85 }}>{data.assessment.intro}</p>
          </Reveal>
        </div>
        <div className="container">
          <Reveal>
            <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.22em", marginBottom: 28 }}>What we look at</div>
          </Reveal>
          <MarkerGrid items={data.assessment.identifies} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 64 }}>
            <Reveal>
              <AssessmentTier
                navigate={navigate}
                tier="Quick AVEN Assessment"
                price="$50"
                subtitle="focused visit"
                blurb="A focused consultation with Alaa Mashal, MSN, APRN, FNP-BC — an expert read on your skin and a clear first recommendation."
                includes={["Aura Skin Analysis", "Focused Evaluation", "Personalized Recommendations"]}
              />
            </Reveal>
            <Reveal delay={140}>
              <AssessmentTier
                navigate={navigate}
                featured
                tier="Comprehensive AVEN Assessment"
                price="$200"
                subtitle="up to 60 minutes"
                blurb="An in-depth consultation and full analysis with a written plan you keep — the complete AVEN approach."
                includes={["Aura Skin Analysis", "Comprehensive Analysis", "Medical Review", "Long-Term Treatment Planning", "Personalized Written Recommendations"]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6 — TREATMENT OPTIONS AT AVEN (curated internal links) */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>Treatment Options at AVEN MED</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "20px 0 20px", maxWidth: "24ch", fontWeight: 300 }}>
              {data.treatmentOptions.headline || <>Considered options, matched to <em>you.</em></>}
            </h2>
            <p className="body" style={{ marginBottom: 56, maxWidth: "64ch" }}>{data.treatmentOptions.intro}</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {data.treatmentOptions.items.map((o, i) => (
              <Reveal key={o.path} delay={(i % 3) * 80}>
                <a
                  href={o.path}
                  onClick={(e) => { e.preventDefault(); navigate(o.path); }}
                  style={{ display: "block", padding: "30px 28px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%", transition: "border-color 240ms ease" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14 }}>
                    <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 400, color: "var(--ivory)" }}>{o.name}</span>
                    <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 18, lineHeight: 1, flexShrink: 0 }}>&rarr;</span>
                  </div>
                  {o.note && <p className="body-sm" style={{ marginTop: 12, color: "var(--muted)" }}>{o.note}</p>}
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="body" style={{ marginTop: 40, maxWidth: "64ch", color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 18 }}>
              {data.treatmentOptions.closing || "No single treatment is right for everyone. Which of these fits you — alone or in combination — is decided together at your AVEN Assessment, never before."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7 — LIFESTYLE CONSIDERATIONS (optional) */}
      {data.lifestyle && (
        <section className="section">
          <div className="container" style={{ maxWidth: 900 }}>
            <Reveal>
              <Eyebrow>{data.lifestyle.eyebrow || "Lifestyle Considerations"}</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "20px 0 24px", maxWidth: "22ch", fontWeight: 300 }}>
                {data.lifestyle.headline || <>What helps between <em>visits.</em></>}
              </h2>
              <p className="body" style={{ marginBottom: 32, maxWidth: "64ch" }}>{data.lifestyle.intro}</p>
            </Reveal>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 40px" }}>
              {data.lifestyle.items.map((l) => (
                <li key={l} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, color: "var(--ivory)", fontSize: 15 }}>
                  <span style={{ width: 10, height: 1, background: "var(--gold)", marginTop: 11 }}></span><span>{l}</span>
                </li>
              ))}
            </ul>
            {data.lifestyle.note && (
              <Reveal>
                <p className="body-sm" style={{ marginTop: 26, maxWidth: "60ch", color: "var(--muted)", fontStyle: "italic" }}>{data.lifestyle.note}</p>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* 8 — FAQ */}
      <section className="section" style={{ background: data.lifestyle ? "var(--bg-1)" : "var(--bg)" }}>
        <div className="container" style={{ maxWidth: 920 }}>
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 56px)", margin: "20px 0 56px", fontWeight: 300 }}>
              {data.concernShort}, answered.
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

      {/* 9 — RELATED CONCERNS (optional, auto from same-type tags) */}
      {data.related && data.related.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal>
              <Eyebrow>Related Concerns</Eyebrow>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, margin: "20px 0 48px" }}>
                <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)", margin: 0, maxWidth: "20ch", fontWeight: 300 }}>
                  Often <em>connected.</em>
                </h2>
                <a href="/concerns" onClick={(e) => { e.preventDefault(); navigate("/concerns"); }} className="link">
                  <span>All Patient Concerns</span><span className="arrow"></span>
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
      )}

      <DividerMark />

      {/* 10 — FINAL CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={40} style={{ margin: "0 auto 26px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(36px, 5.4vw, 72px)", margin: data.finalCta?.copy ? "0 auto 24px" : "0 auto 36px", maxWidth: "16ch", fontWeight: 300 }}>
              {data.finalCta?.headline || <>Understand the cause. Then build the <em>plan.</em></>}
            </h2>
            {data.finalCta?.copy && (
              <p className="body" style={{ margin: "0 auto 40px", maxWidth: "52ch" }}>{data.finalCta.copy}</p>
            )}
            <AssessmentCTA navigate={navigate} />
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · {CLINIC.addressLocality} · By appointment</div>
    </main>
  );
};

export default ConcernTemplate;
