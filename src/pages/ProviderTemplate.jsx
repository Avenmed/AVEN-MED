/* AVEN MED — Provider profile template ("Meet Your Provider").
 *
 * Renders a provider profile from a plain data object. Distinct content type,
 * built so additional providers can be added later with no redesign. Neutral,
 * semantically-named optional slots via small reusable primitives.
 *
 * Provider facts are only ever rendered from the data module — the template
 * never invents credentials. Unconfirmed fields are simply omitted, and a
 * graceful `credentials.note` flags what's still to come.
 *
 * DOES NOT introduce new styling — reuses existing classes/patterns. */
import React from 'react';
import { Eyebrow, Logo, Ph, Reveal, DividerMark, HeroBg, AssessmentCTA } from '../components.jsx';
import Video from '../Video.jsx';
import { CLINIC, DEFAULT_AREAS } from '../content/clinic.js';

const BASE_URL = CLINIC.url;

function useProviderSchema(data) {
  React.useEffect(() => {
    const areas = data.localAreas || DEFAULT_AREAS;
    const url = `${BASE_URL}/${data.slug}`;
    const graph = [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Meet Your Provider", "item": `${BASE_URL}/providers` },
          { "@type": "ListItem", "position": 3, "name": data.breadcrumbName, "item": url },
        ],
      },
      {
        "@type": "Person",
        "name": data.personName,
        "jobTitle": data.jobTitle,
        "description": data.seo.description,
        "url": url,
        "worksFor": { "@id": `${BASE_URL}/#clinic` },
      },
      ...(data.faqs && data.faqs.length
        ? [{
            "@type": "FAQPage",
            "mainEntity": data.faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          }]
        : []),
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
        "medicalSpecialty": "PrimaryCare",
      },
    ];
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "provider-schema";
    el.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    document.head.appendChild(el);
    return () => { el.remove(); };
  }, [data]);
}

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
        {block.note && <Reveal><p className="body" style={{ marginTop: 16, maxWidth: "62ch", color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 18 }}>{block.note}</p></Reveal>}
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

const ProviderTemplate = ({ data, navigate }) => {
  useProviderSchema(data);

  return (
    <main className="page">
      {/* HERO — portrait + name + role */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 72 }}>
        <HeroBg />
        <div className="container">
          <Reveal style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 72, alignItems: "center" }}>
            <div>
              <Ph label={data.portrait?.label || "Provider portrait"} meta={data.portrait?.meta || "placeholder"} aspect={data.portrait?.aspect || "4/5"}>
                {data.portrait?.video && <Video src={data.portrait.video} />}
              </Ph>
            </div>
            <div>
              <Eyebrow>{data.hero.eyebrow}</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(44px, 6vw, 88px)", margin: "22px 0 16px", lineHeight: 1.0, fontWeight: 300 }}>{data.hero.headline}</h1>
              <div className="label" style={{ color: "var(--gold)", marginBottom: 26, letterSpacing: "0.2em" }}>{data.hero.role}</div>
              <p className="lede" style={{ maxWidth: "44ch", marginBottom: 32 }}>{data.hero.subheadline}</p>
              <AssessmentCTA navigate={navigate} />
            </div>
          </Reveal>
        </div>
      </section>

      <ProseSection block={data.welcome} background="var(--bg-1)" />
      <ProseSection block={data.philosophy} />
      <GridSection block={data.focus} background="var(--bg-1)" />
      <GridSection block={data.credentials} />
      <ProseSection block={data.consultationApproach} background="var(--bg-1)" />
      <GridSection block={data.whatToExpect} />
      <ProseSection block={data.personalApproach} background="var(--bg-1)" />
      <ProseSection block={data.whyAven} />

      {/* FAQ */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="section" style={{ background: "var(--bg-1)" }}>
          <div className="container" style={{ maxWidth: 920 }}>
            <Reveal>
              <Eyebrow>Questions</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 56px)", margin: "20px 0 56px", fontWeight: 300 }}>{data.faqHeading || "Getting to know your provider."}</h2>
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

      {data.crossLinks && data.crossLinks.length > 0 && (
        <LinkGrid eyebrow="Explore the Practice" headline={<>Where care <em>begins.</em></>} intro={data.crossLinksIntro} items={data.crossLinks} navigate={navigate} />
      )}

      <DividerMark />

      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={40} style={{ margin: "0 auto 26px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(36px, 5.4vw, 72px)", margin: data.finalCta?.copy ? "0 auto 24px" : "0 auto 36px", maxWidth: "16ch", fontWeight: 300 }}>{data.finalCta?.headline || <>Meet <em>Alaa.</em></>}</h2>
            {data.finalCta?.copy && <p className="body" style={{ margin: "0 auto 40px", maxWidth: "52ch" }}>{data.finalCta.copy}</p>}
            <AssessmentCTA navigate={navigate} />
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · {CLINIC.addressLocality} · By appointment</div>
    </main>
  );
};

export default ProviderTemplate;
