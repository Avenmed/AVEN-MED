/* AVEN MED — Family Medicine landing-page template.
 *
 * Renders a Family Medicine page (primary care, and future FM services) from a
 * plain data object, so layout, branding, and SEO stay consistent across the
 * section. Distinct content type from treatments / concerns / wellness.
 *
 * Section slots are NEUTRAL and semantically named (overview, whoWeServe,
 * visitTypes, careAreas, journey, scope, prepare) — each renders through a small
 * reusable primitive (ProseSection / GridSection / StepsSection / ListSection).
 * Every slot is optional, so future FM pages include only what applies. No slot
 * is reused for unrelated content.
 *
 * DOES NOT introduce new styling — reuses existing classes and the same inline
 * patterns as the other templates. */
import React from 'react';
import { Eyebrow, Logo, Reveal, DividerMark, HeroBg, AssessmentCTA } from '../components.jsx';
import { CLINIC, DEFAULT_AREAS } from '../content/clinic.js';

const BASE_URL = CLINIC.url;

// Injects page-specific JSON-LD (Breadcrumb + FAQ + MedicalWebPage + clinic with
// availableService) and removes it on unmount so it never leaks to the next route.
function useFamilyMedicineSchema(data) {
  React.useEffect(() => {
    const areas = data.localAreas || DEFAULT_AREAS;
    const url = `${BASE_URL}/${data.slug}`;
    const graph = [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Family Medicine", "item": `${BASE_URL}/family-medicine` },
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
        // Route-specific service; clinic/provider are defined once, canonically,
        // in index.html (#clinic / #alaa) and referenced by @id — not re-declared.
        "@type": "MedicalProcedure",
        "name": data.procedureName,
        "description": data.procedureDescription,
        "provider": { "@id": `${BASE_URL}/#clinic` },
      },
    ];
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "family-medicine-schema";
    el.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    document.head.appendChild(el);
    return () => { el.remove(); };
  }, [data]);
}

// ---- Reusable, neutral section primitives ----------------------------------

// Prose: eyebrow, headline, paragraphs, optional closing note.
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

// Grid: eyebrow, headline, intro, and a two-column list of {name, note} cards.
function GridSection({ block, background }) {
  if (!block) return null;
  return (
    <section className="section" style={background ? { background } : undefined}>
      <div className="container">
        <Reveal>
          <Eyebrow>{block.eyebrow}</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 60px)", margin: "20px 0 12px", maxWidth: "22ch", fontWeight: 300 }}>
            {block.headline}
          </h2>
          {block.intro && <p className="body" style={{ marginBottom: 56, maxWidth: "62ch" }}>{block.intro}</p>}
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--hairline)" }}>
          {block.items.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 80}>
              <div style={{ padding: "28px 0", borderBottom: "1px solid var(--hairline)", paddingRight: i % 2 === 0 ? 48 : 0, paddingLeft: i % 2 === 1 ? 48 : 0, borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none" }}>
                <h3 className="display" style={{ fontSize: 23, margin: 0, fontWeight: 400 }}>{t.name}</h3>
                {t.note && <p className="body-sm" style={{ marginTop: 8, color: "var(--muted)" }}>{t.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>
        {block.note && (
          <Reveal>
            <p className="body-sm" style={{ marginTop: 28, maxWidth: "64ch", color: "var(--muted)", fontStyle: "italic" }}>{block.note}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

// Steps: numbered cards for a care journey.
function StepsSection({ block, background }) {
  if (!block) return null;
  return (
    <section className="section" style={background ? { background } : undefined}>
      <div className="container">
        <Reveal>
          <Eyebrow>{block.eyebrow || "The Care Journey"}</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 60px)", margin: "20px 0 56px", maxWidth: "20ch", fontWeight: 300 }}>
            {block.headline}
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${block.steps.length}, 1fr)`, gap: 24 }}>
          {block.steps.map((s, i) => (
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
  );
}

// List: eyebrow, headline, intro, and a two-column bullet list of strings.
function ListSection({ block, background }) {
  if (!block) return null;
  return (
    <section className="section" style={background ? { background } : undefined}>
      <div className="container" style={{ maxWidth: 1000 }}>
        <Reveal>
          <Eyebrow>{block.eyebrow}</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "20px 0 24px", maxWidth: "22ch", fontWeight: 300 }}>
            {block.headline}
          </h2>
          {block.intro && <p className="body" style={{ marginBottom: 32, maxWidth: "62ch" }}>{block.intro}</p>}
        </Reveal>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 40px" }}>
          {block.items.map((l) => (
            <li key={l} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, color: "var(--ivory)", fontSize: 15 }}>
              <span style={{ width: 10, height: 1, background: "var(--gold)", marginTop: 11 }}></span><span>{l}</span>
            </li>
          ))}
        </ul>
        {block.note && (
          <Reveal>
            <p className="body-sm" style={{ marginTop: 26, maxWidth: "62ch", color: "var(--muted)", fontStyle: "italic" }}>{block.note}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

// Curated cross-category links (e.g. to Wellness), deduped against auto-related.
function LinkGrid({ eyebrow, headline, intro, items, background, navigate }) {
  return (
    <section className="section" style={background ? { background } : undefined}>
      <div className="container">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)", margin: "20px 0 20px", maxWidth: "22ch", fontWeight: 300 }}>
            {headline}
          </h2>
          {intro && <p className="body" style={{ marginBottom: 48, maxWidth: "62ch" }}>{intro}</p>}
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {items.map((r) => (
            <Reveal key={r.path}>
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
  );
}

const FamilyMedicineTemplate = ({ data, navigate }) => {
  useFamilyMedicineSchema(data);
  const areas = data.localAreas || DEFAULT_AREAS;
  const areasLine = areas.slice(0, -1).join(", ") + " & " + areas[areas.length - 1];

  // Never show the same link in both auto "related" and curated "crossLinks".
  const crossPaths = new Set((data.crossLinks || []).map((r) => r.path));
  const relatedItems = (data.related || []).filter((r) => !crossPaths.has(r.path));

  const ctaLabel = data.ctaLabel || "Schedule a Family Medicine Consultation";

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
            <AssessmentCTA navigate={navigate} label={ctaLabel} />
            <div className="label" style={{ color: "var(--muted)", marginTop: 32, letterSpacing: "0.22em" }}>
              Serving {areasLine}
            </div>
          </Reveal>
        </div>
      </section>

      <ProseSection block={data.overview} background="var(--bg-1)" />
      <GridSection block={data.whoWeServe} />
      <GridSection block={data.visitTypes} background="var(--bg-1)" />
      <GridSection block={data.careAreas} />
      <StepsSection block={data.journey} background="var(--bg-1)" />
      <ProseSection block={data.scope} />
      <ListSection block={data.prepare} background="var(--bg-1)" />

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 56px)", margin: "20px 0 56px", fontWeight: 300 }}>
              {data.faqHeading || "Family medicine, answered."}
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

      {/* Related Family Medicine (auto, same-type) */}
      {relatedItems.length > 0 && (
        <LinkGrid
          eyebrow="More in Family Medicine"
          headline={<>Continued <em>care.</em></>}
          items={relatedItems}
          background="var(--bg-1)"
          navigate={navigate}
        />
      )}

      {/* Cross-links to Wellness (curated) */}
      {data.crossLinks && data.crossLinks.length > 0 && (
        <LinkGrid
          eyebrow="Alongside Your Care"
          headline={<>Care that <em>connects.</em></>}
          intro={data.crossLinksIntro}
          items={data.crossLinks}
          navigate={navigate}
        />
      )}

      <DividerMark />

      {/* FINAL CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={40} style={{ margin: "0 auto 26px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(36px, 5.4vw, 72px)", margin: data.finalCta?.copy ? "0 auto 24px" : "0 auto 36px", maxWidth: "16ch", fontWeight: 300 }}>
              {data.finalCta?.headline || <>Care, <em>continued.</em></>}
            </h2>
            {data.finalCta?.copy && (
              <p className="body" style={{ margin: "0 auto 40px", maxWidth: "52ch" }}>{data.finalCta.copy}</p>
            )}
            <AssessmentCTA navigate={navigate} label={ctaLabel} />
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · {CLINIC.addressLocality} · By appointment</div>
    </main>
  );
};

export default FamilyMedicineTemplate;
