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
import { Eyebrow, Logo, Reveal, DividerMark, HeroBg, AssessmentCTA } from '../components.jsx';

const BASE_URL = "https://avenmedil.com";
const CLINIC = {
  name: "AVEN MED",
  streetAddress: "14470 LaGrange Rd, Ste 101",
  addressLocality: "Orland Park",
  addressRegion: "IL",
  postalCode: "60462",
  country: "US",
  telephone: "+1-708-734-6902",
  email: "info@avenmedil.com",
  lat: 41.6063,
  lng: -87.8614,
};
const DEFAULT_AREAS = ["Orland Park", "Tinley Park", "Frankfort", "Mokena", "Palos Heights", "Homer Glen", "New Lenox"];

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
        "@type": ["MedicalBusiness", "MedicalClinic"],
        "@id": `${BASE_URL}/#clinic`,
        "name": CLINIC.name,
        "url": `${BASE_URL}/`,
        "telephone": CLINIC.telephone,
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
        "medicalSpecialty": "PlasticSurgery",
        "availableService": {
          "@type": "MedicalProcedure",
          "name": data.procedureName,
          "procedureType": "https://schema.org/NoninvasiveProcedure",
          "description": data.procedureDescription,
        },
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

const TreatmentTemplate = ({ data, navigate }) => {
  useTreatmentSchema(data);
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
            <p className="lede" style={{ maxWidth: "54ch", margin: "0 auto 36px" }}>
              {data.hero.subheadline}
            </p>
            <AssessmentCTA navigate={navigate} />
            <div className="label" style={{ color: "var(--muted)", marginTop: 32, letterSpacing: "0.22em" }}>
              Serving {areasLine}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — WHY AVEN MED */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start", maxWidth: 1080 }}>
          <Reveal>
            <Eyebrow>Why AVEN MED</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display" style={{ fontSize: "clamp(28px, 3.2vw, 46px)", margin: "0 0 28px", maxWidth: "24ch", fontWeight: 300 }}>
              We do not sell injections. We build a <em>plan.</em>
            </h2>
            <p className="body" style={{ marginBottom: 22 }}>
              Every recommendation at AVEN MED begins with the AVEN Assessment — never with a syringe.
              Before we suggest {data.treatmentShort}, we evaluate your facial anatomy, the way your
              muscles move, the quality of your skin, the balance of your face, and your long-term goals.
            </p>
            <p className="body" style={{ marginBottom: 22 }}>
              Only then do we write a plan. Natural-looking results are always the priority — the aim is a
              softer, rested version of your own expression, never a treated or frozen one. You should still
              look like yourself.
            </p>
            <p className="body" style={{ color: "var(--ivory-soft)" }}>
              You will only ever be treated by Alaa Mashal, FNP-BC — a board-certified Family Nurse
              Practitioner and the only injector at the practice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3 — WHAT IT TREATS */}
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
                <div style={{ padding: "30px 0", borderBottom: "1px solid var(--hairline)", paddingRight: i % 2 === 0 ? 48 : 0, paddingLeft: i % 2 === 1 ? 48 : 0, borderRight: i % 2 === 0 ? "1px solid var(--hairline)" : "none" }}>
                  <h3 className="display" style={{ fontSize: 24, margin: 0, fontWeight: 400 }}>{t.name}</h3>
                  {t.note && <p className="body-sm" style={{ marginTop: 8, color: "var(--muted)" }}>{t.note}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — COMPARISON */}
      {data.comparison && (
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
      )}

      {/* 5 — THE AVEN ASSESSMENT */}
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
                tier="Quick AVEN Assessment"
                price="$50"
                subtitle="focused visit"
                blurb="A focused consultation with Alaa Mashal, FNP-BC — an expert read on your face and a clear first recommendation."
                includes={["Aura Skin Analysis", "Facial Assessment", "Personalized Recommendations"]}
              />
            </Reveal>
            <Reveal delay={140}>
              <AssessmentTier
                navigate={navigate}
                featured
                tier="Comprehensive AVEN Assessment"
                price="$200"
                subtitle="up to 60 minutes"
                blurb="An in-depth consultation and full facial analysis with a written plan you keep — the complete AVEN approach."
                includes={["Aura Skin Analysis", "Comprehensive Facial Analysis", "Medical Review", "Long-Term Treatment Planning", "Personalized Written Recommendations"]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6 — WHAT TO EXPECT */}
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

      {/* 7 — FAQ */}
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

      {/* 8 — RELATED TREATMENTS */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>Related Treatments</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)", margin: "20px 0 48px", maxWidth: "20ch", fontWeight: 300 }}>
              A considered <em>pathway.</em>
            </h2>
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

      <DividerMark />

      {/* 9 — FINAL CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={40} style={{ margin: "0 auto 26px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(36px, 5.4vw, 72px)", margin: "0 auto 36px", maxWidth: "16ch", fontWeight: 300 }}>
              Let's create your personalized <em>treatment plan.</em>
            </h2>
            <AssessmentCTA navigate={navigate} />
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · {CLINIC.addressLocality} · By appointment</div>
    </main>
  );
};

export default TreatmentTemplate;
