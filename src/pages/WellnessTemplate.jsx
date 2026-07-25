/* AVEN MED — Wellness service landing-page template.
 *
 * Renders a wellness service (medical weight loss, IV therapy, vitamin
 * injections, GLP-1 therapy, …) from a plain data object so layout, branding,
 * and SEO stay identical across the wellness category. Shares the design
 * language of the treatment and concern templates but is a distinct content
 * type — it educates first, frames medication/therapy as one option among
 * several, and routes every plan through the AVEN Assessment / Wellness
 * Consultation.
 *
 * Sections are optional (overview, candidacy, pillars, medications, longTerm,
 * journey) so future wellness pages can include only what applies.
 *
 * DOES NOT introduce new styling — reuses existing classes and the same inline
 * patterns as the other templates. */
import React from 'react';
import { Eyebrow, Logo, Reveal, DividerMark, HeroBg, AssessmentCTA } from '../components.jsx';
import { CLINIC, DEFAULT_AREAS } from '../content/clinic.js';

const BASE_URL = CLINIC.url;

// Injects page-specific JSON-LD (Breadcrumb + FAQ + MedicalWebPage + clinic with
// availableService) and removes it on unmount so it never leaks to the next route.
function useWellnessSchema(data) {
  React.useEffect(() => {
    const areas = data.localAreas || DEFAULT_AREAS;
    const url = `${BASE_URL}/${data.slug}`;
    const graph = [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Wellness", "item": `${BASE_URL}/wellness` },
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
        "provider": { "@id": `${BASE_URL}/#clinic` },
      },
      {
        "@type": ["MedicalBusiness", "MedicalClinic"],
        "@id": `${BASE_URL}/#clinic`,
        "name": CLINIC.name,
        "url": `${BASE_URL}/`,
        "telephone": CLINIC.phoneSchema,
        "email": CLINIC.email,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": CLINIC.streetAddress,
          "addressLocality": CLINIC.addressLocality,
          "addressRegion": CLINIC.addressRegion,
          "postalCode": CLINIC.postalCode,
          "addressCountry": CLINIC.country,
        },
        "geo": { "@type": "GeoCoordinates", "latitude": CLINIC.lat, "longitude": CLINIC.lng },
        "areaServed": areas.map((name) => ({ "@type": "City", "name": name })),
        "medicalSpecialty": "PreventiveMedicine",
        "availableService": {
          "@type": "MedicalTherapy",
          "name": data.procedureName,
          "description": data.procedureDescription,
        },
      },
    ];
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "wellness-schema";
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
          Credited toward your program.
        </div>
        <AssessmentCTA navigate={navigate} className={featured ? "btn solid" : "link"} style={{ alignSelf: "flex-start" }} />
      </div>
    </div>
  );
}

// Prose section — an eyebrow, a headline, and a set of paragraphs.
function ProseSection({ block, background }) {
  if (!block) return null;
  return (
    <section className="section" style={background ? { background } : undefined}>
      <div className="container" style={{ maxWidth: 900 }}>
        <Reveal>
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "20px 0 32px", maxWidth: "24ch", fontWeight: 300 }}>
            {block.headline}
          </h2>
        </Reveal>
        {block.body.map((p, i) => (
          <Reveal key={i} delay={Math.min(i, 4) * 70}>
            <p className="body" style={{ marginBottom: 20, maxWidth: "64ch", fontSize: 17, lineHeight: 1.85 }}>{p}</p>
          </Reveal>
        ))}
        {block.note && (
          <Reveal>
            <p className="body" style={{ marginTop: 16, maxWidth: "62ch", color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 18 }}>{block.note}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

const WellnessTemplate = ({ data, navigate }) => {
  useWellnessSchema(data);
  const areas = data.localAreas || DEFAULT_AREAS;
  const areasLine = areas.slice(0, -1).join(", ") + " & " + areas[areas.length - 1];

  // Never show the same link in both "Related Wellness" (auto) and "Explore
  // Further" (curated) — curated cross-links win.
  const crossPaths = new Set((data.crossLinks || []).map((r) => r.path));
  const relatedItems = (data.related || []).filter((r) => !crossPaths.has(r.path));

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
            <AssessmentCTA navigate={navigate} />
            <div className="label" style={{ color: "var(--muted)", marginTop: 32, letterSpacing: "0.22em" }}>
              Serving {areasLine}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — OVERVIEW */}
      <ProseSection block={data.overview} background="var(--bg-1)" />

      {/* 3 — CANDIDACY */}
      {data.candidacy && (
        <section className="section">
          <div className="container" style={{ maxWidth: 1080 }}>
            <Reveal>
              <Eyebrow>Who It's For</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "20px 0 24px", maxWidth: "24ch", fontWeight: 300 }}>
                {data.candidacy.headline}
              </h2>
              <p className="body" style={{ marginBottom: 44, maxWidth: "64ch" }}>{data.candidacy.intro}</p>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
              <Reveal>
                <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.22em", marginBottom: 20 }}>Often a good fit when</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {data.candidacy.considers.map((c) => (
                    <li key={c} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, color: "var(--ivory)", fontSize: 15 }}>
                      <span style={{ width: 10, height: 1, background: "var(--gold)", marginTop: 11 }}></span><span>{c}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              {data.candidacy.notFor && (
                <Reveal delay={120}>
                  <div className="label" style={{ color: "var(--muted)", letterSpacing: "0.22em", marginBottom: 20 }}>May not be appropriate when</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                    {data.candidacy.notFor.map((c) => (
                      <li key={c} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, color: "var(--ivory-soft)", fontSize: 15 }}>
                        <span style={{ width: 10, height: 1, background: "var(--muted)", marginTop: 11 }}></span><span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>
            {data.candidacy.note && (
              <Reveal>
                <p className="body-sm" style={{ marginTop: 40, maxWidth: "68ch", color: "var(--muted)", fontStyle: "italic" }}>{data.candidacy.note}</p>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* 4 — PILLARS (what the program addresses) */}
      {data.pillars && (
        <section className="section" style={{ background: "var(--bg-1)" }}>
          <div className="container">
            <Reveal>
              <Eyebrow>{data.pillars.eyebrow || "The AVEN Approach"}</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 60px)", margin: "20px 0 12px", maxWidth: "22ch", fontWeight: 300 }}>
                {data.pillars.headline}
              </h2>
              <p className="body" style={{ marginBottom: 56, maxWidth: "62ch" }}>{data.pillars.intro}</p>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--hairline)" }}>
              {data.pillars.items.map((t, i) => (
                <Reveal key={t.name} delay={(i % 2) * 80}>
                  <div style={{ padding: "30px 0", borderBottom: "1px solid var(--hairline)", paddingRight: i % 2 === 0 ? 48 : 0, paddingLeft: i % 2 === 1 ? 48 : 0, borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none" }}>
                    <h3 className="display" style={{ fontSize: 24, margin: 0, fontWeight: 400 }}>{t.name}</h3>
                    {t.note && <p className="body-sm" style={{ marginTop: 8, color: "var(--muted)" }}>{t.note}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5 — MEDICATIONS (framed as one option) */}
      <ProseSection block={data.medications} />

      {/* 6 — JOURNEY (how it works, visit to visit) */}
      {data.journey && (
        <section className="section" style={{ background: "var(--bg-1)" }}>
          <div className="container">
            <Reveal>
              <Eyebrow>How It Works</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 60px)", margin: "20px 0 56px", maxWidth: "20ch", fontWeight: 300 }}>
                From first visit <em>onward.</em>
              </h2>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${data.journey.length}, 1fr)`, gap: 24 }}>
              {data.journey.map((s, i) => (
                <Reveal key={s.label} delay={i * 100}>
                  <div style={{ padding: "32px 24px", border: "1px solid var(--hairline)", height: "100%", background: "var(--bg)" }}>
                    <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: "0.2em" }}>0{i + 1}</div>
                    <h3 className="display" style={{ fontSize: 22, margin: "20px 0 12px", fontWeight: 400 }}>{s.label}</h3>
                    <p className="body-sm" style={{ margin: 0 }}>{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7 — LONG-TERM MANAGEMENT */}
      <ProseSection block={data.longTerm} />

      {/* 8 — THE AVEN ASSESSMENT / WELLNESS CONSULTATION */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>The AVEN Assessment</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 60px)", margin: "20px 0 12px", maxWidth: "22ch", fontWeight: 300 }}>
              {data.consultation?.headline || <>Every plan begins <em>here.</em></>}
            </h2>
            <p className="body" style={{ marginBottom: 48, maxWidth: "60ch" }}>
              {data.consultation?.intro || "Two ways to begin your wellness consultation — both credited toward your program, so nothing is ever wasted."}
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Reveal>
              <AssessmentTier
                navigate={navigate}
                tier="Quick AVEN Assessment"
                price="$50"
                subtitle="focused visit"
                blurb="A focused consultation with Alaa Mashal, MSN, APRN, FNP-BC — an initial review of your goals and health, and a clear first recommendation."
                includes={["Goal & History Review", "Focused Evaluation", "Personalized Recommendations"]}
              />
            </Reveal>
            <Reveal delay={140}>
              <AssessmentTier
                navigate={navigate}
                featured
                tier="Comprehensive AVEN Assessment"
                price="$200"
                subtitle="up to 60 minutes"
                blurb="An in-depth wellness consultation and medical review with a written plan you keep — the complete AVEN approach."
                includes={["Comprehensive Health Review", "Goals & Metabolic Discussion", "Medical Review", "Long-Term Program Planning", "Personalized Written Plan"]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9 — FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 56px)", margin: "20px 0 56px", fontWeight: 300 }}>
              {data.serviceShort}, answered.
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

      {/* 10 — RELATED WELLNESS (auto from same-type tags) */}
      {relatedItems.length > 0 && (
        <section className="section" style={{ background: "var(--bg-1)" }}>
          <div className="container">
            <Reveal>
              <Eyebrow>Related Wellness</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)", margin: "20px 0 48px", maxWidth: "20ch", fontWeight: 300 }}>
                A continuous <em>practice.</em>
              </h2>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {relatedItems.map((r, i) => (
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

      {/* 10b — EXPLORE FURTHER (curated cross-category links, where medically appropriate) */}
      {data.crossLinks && data.crossLinks.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal>
              <Eyebrow>Explore Further</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)", margin: "20px 0 20px", maxWidth: "22ch", fontWeight: 300 }}>
                Care that <em>connects.</em>
              </h2>
              {data.crossLinksIntro && (
                <p className="body" style={{ marginBottom: 48, maxWidth: "62ch" }}>{data.crossLinksIntro}</p>
              )}
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {data.crossLinks.map((r, i) => (
                <Reveal key={r.path} delay={(i % 3) * 80}>
                  <a
                    href={r.path}
                    onClick={(e) => { e.preventDefault(); navigate(r.path); }}
                    style={{ display: "block", padding: "28px 28px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%", transition: "border-color 240ms ease" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14 }}>
                      <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 400, color: "var(--ivory)" }}>{r.label}</span>
                      <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 18, lineHeight: 1, flexShrink: 0 }}>&rarr;</span>
                    </div>
                    {r.note && <p className="body-sm" style={{ marginTop: 12, color: "var(--muted)" }}>{r.note}</p>}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <DividerMark />

      {/* 11 — FINAL CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={40} style={{ margin: "0 auto 26px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(36px, 5.4vw, 72px)", margin: data.finalCta?.copy ? "0 auto 24px" : "0 auto 36px", maxWidth: "16ch", fontWeight: 300 }}>
              {data.finalCta?.headline || <>Let's build your <em>plan.</em></>}
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

export default WellnessTemplate;
