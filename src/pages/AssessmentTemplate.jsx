/* AVEN MED — Assessment landing-page template.
 *
 * Renders an Assessment-section page (the AVEN Assessment flagship, the Quick /
 * Comprehensive tiers, What to Expect, and the Assessment FAQ) from a plain data
 * object. Distinct content type from treatments / concerns / wellness / family
 * medicine. Section slots are NEUTRAL and semantically named, each rendered by a
 * small reusable primitive; every slot is optional.
 *
 * DOES NOT introduce new styling — reuses existing classes and the same inline
 * patterns as the other templates. */
import React from 'react';
import { Eyebrow, Logo, Reveal, DividerMark, HeroBg, AssessmentCTA } from '../components.jsx';
import { CLINIC, DEFAULT_AREAS } from '../content/clinic.js';

const BASE_URL = CLINIC.url;

function useAssessmentSchema(data) {
  React.useEffect(() => {
    const areas = data.localAreas || DEFAULT_AREAS;
    const url = `${BASE_URL}/${data.slug}`;
    const graph = [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "The AVEN Assessment", "item": `${BASE_URL}/assessment` },
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
    el.id = "assessment-schema";
    el.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    document.head.appendChild(el);
    return () => { el.remove(); };
  }, [data]);
}

// ---- Reusable neutral primitives -------------------------------------------

function ProseSection({ block, background }) {
  if (!block) return null;
  return (
    <section className="section" style={background ? { background } : undefined}>
      <div className="container" style={{ maxWidth: 900 }}>
        <Reveal>
          {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "20px 0 32px", maxWidth: "24ch", fontWeight: 300 }}>{block.headline}</h2>
        </Reveal>
        {block.body.map((p, i) => (
          <Reveal key={i} delay={Math.min(i, 4) * 70}>
            <p className="body" style={{ marginBottom: 20, maxWidth: "64ch", fontSize: 17, lineHeight: 1.85 }}>{p}</p>
          </Reveal>
        ))}
        {block.note && (
          <Reveal><p className="body" style={{ marginTop: 16, maxWidth: "62ch", color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 18 }}>{block.note}</p></Reveal>
        )}
      </div>
    </section>
  );
}

function GridSection({ block, background }) {
  if (!block) return null;
  return (
    <section className="section" style={background ? { background } : undefined}>
      <div className="container">
        <Reveal>
          <Eyebrow>{block.eyebrow}</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 60px)", margin: "20px 0 12px", maxWidth: "22ch", fontWeight: 300 }}>{block.headline}</h2>
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
        {block.note && <Reveal><p className="body-sm" style={{ marginTop: 28, maxWidth: "64ch", color: "var(--muted)", fontStyle: "italic" }}>{block.note}</p></Reveal>}
      </div>
    </section>
  );
}

function ListSection({ block, background }) {
  if (!block) return null;
  return (
    <section className="section" style={background ? { background } : undefined}>
      <div className="container" style={{ maxWidth: 1000 }}>
        <Reveal>
          <Eyebrow>{block.eyebrow}</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "20px 0 24px", maxWidth: "22ch", fontWeight: 300 }}>{block.headline}</h2>
          {block.intro && <p className="body" style={{ marginBottom: 32, maxWidth: "62ch" }}>{block.intro}</p>}
        </Reveal>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 40px" }}>
          {block.items.map((l) => (
            <li key={l} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, color: "var(--ivory)", fontSize: 15 }}>
              <span style={{ width: 10, height: 1, background: "var(--gold)", marginTop: 11 }}></span><span>{l}</span>
            </li>
          ))}
        </ul>
        {block.note && <Reveal><p className="body-sm" style={{ marginTop: 26, maxWidth: "62ch", color: "var(--muted)", fontStyle: "italic" }}>{block.note}</p></Reveal>}
      </div>
    </section>
  );
}

// Vertical numbered timeline — handles many steps (e.g. What to Expect).
function TimelineSection({ block, background }) {
  if (!block) return null;
  return (
    <section className="section" style={background ? { background } : undefined}>
      <div className="container" style={{ maxWidth: 820 }}>
        <Reveal>
          <Eyebrow>{block.eyebrow}</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4.4vw, 56px)", margin: "20px 0 48px", maxWidth: "20ch", fontWeight: 300 }}>{block.headline}</h2>
        </Reveal>
        <div style={{ borderTop: "1px solid var(--hairline)" }}>
          {block.steps.map((s, i) => (
            <Reveal key={s.label} delay={Math.min(i, 6) * 50}>
              <div style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 24, padding: "28px 0", borderBottom: "1px solid var(--hairline)", alignItems: "start" }}>
                <div style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 12, letterSpacing: "0.2em", paddingTop: 6 }}>0{i + 1}</div>
                <div>
                  <h3 className="display" style={{ fontSize: 24, margin: "0 0 8px", fontWeight: 400 }}>{s.label}</h3>
                  <p className="body" style={{ margin: 0, maxWidth: "60ch" }}>{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// A single highlighted price callout (approved AVEN pricing only).
function PriceCallout({ block }) {
  if (!block) return null;
  return (
    <section className="section" style={{ background: "var(--bg-1)" }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <Reveal>
          <div style={{ padding: "40px 44px", border: "1px solid var(--gold-soft)", background: "var(--surface)", display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 18px" }}>
            <span style={{ fontFamily: "var(--sans)", fontSize: 52, fontWeight: 400, color: "var(--gold)", letterSpacing: "-0.01em", fontVariantNumeric: "lining-nums tabular-nums" }}>{block.price}</span>
            <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--muted)", fontSize: 20 }}>{block.unit}</span>
            <span className="body" style={{ width: "100%", marginTop: 14, color: "var(--ivory-soft)" }}>{block.note}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LinkGrid({ eyebrow, headline, intro, items, background, navigate }) {
  return (
    <section className="section" style={background ? { background } : undefined}>
      <div className="container">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)", margin: "20px 0 20px", maxWidth: "22ch", fontWeight: 300 }}>{headline}</h2>
          {intro && <p className="body" style={{ marginBottom: 48, maxWidth: "62ch" }}>{intro}</p>}
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {items.map((r) => (
            <Reveal key={r.path}>
              <a href={r.path} onClick={(e) => { e.preventDefault(); navigate(r.path); }}
                style={{ display: "block", padding: "28px 28px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%", transition: "border-color 240ms ease" }}>
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

const AssessmentTemplate = ({ data, navigate }) => {
  useAssessmentSchema(data);
  const crossPaths = new Set((data.crossLinks || []).map((r) => r.path));
  const relatedItems = (data.related || []).filter((r) => !crossPaths.has(r.path));

  return (
    <main className="page">
      {/* HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 200, paddingBottom: 100 }}>
        <HeroBg />
        <div className="container" style={{ maxWidth: 940, textAlign: "center" }}>
          <Reveal>
            <Eyebrow>{data.hero.eyebrow}</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 104px)", margin: "28px auto 24px", lineHeight: 1.02, maxWidth: "18ch", fontWeight: 300 }}>{data.hero.headline}</h1>
            <p className="lede" style={{ maxWidth: "56ch", margin: "0 auto 36px" }}>{data.hero.subheadline}</p>
            <AssessmentCTA navigate={navigate} />
          </Reveal>
        </div>
      </section>

      <ProseSection block={data.overview} background="var(--bg-1)" />
      <PriceCallout block={data.priceCallout} />
      <GridSection block={data.whoFor} />
      <ListSection block={data.included} background="var(--bg-1)" />
      <GridSection block={data.covers} />
      <ProseSection block={data.whenItMakes} background="var(--bg-1)" />
      <ProseSection block={data.compare} />
      <ProseSection block={data.philosophy} background="var(--bg-1)" />
      <TimelineSection block={data.timeline} />
      <ListSection block={data.prepare} background="var(--bg-1)" />

      {/* FAQ */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="section">
          <div className="container" style={{ maxWidth: 920 }}>
            <Reveal>
              <Eyebrow>Questions</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 56px)", margin: "20px 0 56px", fontWeight: 300 }}>{data.faqHeading || "The Assessment, answered."}</h2>
            </Reveal>
            {data.faqs.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i, 6) * 50}>
                <details style={{ borderTop: "1px solid var(--hairline)", padding: "28px 0", cursor: "pointer" }}>
                  <summary style={{ listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, fontFamily: "var(--serif)", fontSize: 22, fontWeight: 300, letterSpacing: "-0.005em" }}>
                    <span>{f.q}</span><span style={{ color: "var(--gold)", fontSize: 20, flexShrink: 0 }}>+</span>
                  </summary>
                  <p className="body" style={{ marginTop: 18 }}>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {relatedItems.length > 0 && (
        <LinkGrid eyebrow="More on the Assessment" headline={<>Keep <em>exploring.</em></>} items={relatedItems} background="var(--bg-1)" navigate={navigate} />
      )}
      {data.crossLinks && data.crossLinks.length > 0 && (
        <LinkGrid eyebrow="Where It Leads" headline={<>After the <em>assessment.</em></>} intro={data.crossLinksIntro} items={data.crossLinks} navigate={navigate} />
      )}

      <DividerMark />

      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={40} style={{ margin: "0 auto 26px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(36px, 5.4vw, 72px)", margin: data.finalCta?.copy ? "0 auto 24px" : "0 auto 36px", maxWidth: "16ch", fontWeight: 300 }}>{data.finalCta?.headline || <>Begin with an <em>Assessment.</em></>}</h2>
            {data.finalCta?.copy && <p className="body" style={{ margin: "0 auto 40px", maxWidth: "52ch" }}>{data.finalCta.copy}</p>}
            <AssessmentCTA navigate={navigate} />
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · {CLINIC.addressLocality} · By appointment</div>
    </main>
  );
};

export default AssessmentTemplate;
