/* AVEN MED — The AVEN Bridal Journey (/bridal-journey).
 *
 * A scalable, registry-driven patient journey — not a promotional wedding page.
 * All content derives from the Bridal registry (src/content/bridal/index.js);
 * service links resolve from the content registry so service pages remain the
 * single source of truth. Assessment-first: every path leads to a consultation,
 * never to booking individual treatments without a plan.
 *
 * Architecture phase: copy is placeholder and no medical claims/pricing/timings
 * are invented. Structured data: WebPage + BreadcrumbList + FAQPage (answers are
 * visible) + MedicalBusiness + Person (provider) + a Service/program node with no
 * offers or prices. */
import React from 'react';
import { Eyebrow, Reveal } from '../components.jsx';
import { CLINIC, DEFAULT_AREAS } from '../content/clinic.js';
import { CLINICAL_REVIEWER } from '../content/people.js';
import { getServiceLinksBySlugs } from '../content/registry.jsx';
import { getBridalJourney } from '../content/bridal/index.js';
import {
  useJsonLd, BridalHero, BridalIntroduction, BridalJourneyTimeline, BridalPatientJourney,
  BridalTimelineBuilder, BridalServiceConnections, BridalEducationLinks, BridalResources,
  BridalFAQSection, BridalGalleryPlaceholder, BridalTestimonialPlaceholder, BridalFinalCTA,
} from './bridal/BridalComponents.jsx';
import { BRIDAL_TIMELINE_BUILDER } from '../content/bridal/index.js';

const BASE = CLINIC.url;

// Internal-link destinations from the Bridal Journey (item 12).
const EXPLORE_LINKS = [
  { label: "The AVEN Assessment", path: "/assessment" },
  { label: "Meet Your Provider", path: "/providers" },
  { label: "About AVEN", path: "/about" },
  { label: "Medical-Grade Skincare", path: "/medical-grade-skincare-orland-park" },
  { label: "Education Center", path: "/education" },
  { label: "Contact", path: "/contact" },
];

function buildSchema(journey) {
  const url = `${BASE}/bridal-journey`;
  const graph = [
    {
      "@type": "WebPage",
      "@id": url,
      "name": journey.title,
      "description": journey.seo.description,
      "url": url,
      "inLanguage": "en-US",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#clinic` },
      "breadcrumb": { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE}/` },
        { "@type": "ListItem", "position": 2, "name": journey.title, "item": url },
      ],
    },
    // Program / service representation — no offers, no prices, no guarantees.
    {
      "@type": "Service",
      "name": journey.title,
      "serviceType": "Bridal aesthetic, skincare, and wellness planning",
      "description": journey.seo.description,
      "provider": { "@id": `${BASE}/#clinic` },
      "areaServed": DEFAULT_AREAS.map((name) => ({ "@type": "City", "name": name })),
      "audience": { "@type": "MedicalAudience", "audienceType": "Patient" },
    },
    {
      "@type": ["MedicalBusiness", "MedicalClinic"],
      "@id": `${BASE}/#clinic`,
      "name": CLINIC.name,
      "url": `${BASE}/`,
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
      "areaServed": DEFAULT_AREAS.map((name) => ({ "@type": "City", "name": name })),
    },
    {
      "@type": "Person",
      "name": CLINICAL_REVIEWER.name,
      "jobTitle": CLINICAL_REVIEWER.role,
      "worksFor": { "@id": `${BASE}/#clinic` },
    },
  ];
  // FAQPage only when answers are present (they are — placeholder but valid/visible).
  const withAnswers = (journey.faqs || []).filter((f) => f.q && f.a);
  if (journey.structuredData.includeFaq && withAnswers.length) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": withAnswers.map((f) => ({
        "@type": "Question", "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

const BridalJourneyPage = ({ navigate }) => {
  const journey = getBridalJourney("bridal-journey");
  const schema = React.useMemo(() => (journey ? buildSchema(journey) : null), [journey]);
  useJsonLd("bridal-journey-schema", schema);

  if (!journey) return null;

  const serviceLinks = getServiceLinksBySlugs(journey.relatedServices);

  return (
    <main className="page">
      <BridalHero hero={journey.hero} navigate={navigate} />
      <BridalIntroduction intro={journey.introduction} />
      <BridalJourneyTimeline stages={journey.timelineStages} navigate={navigate} />
      {/* Your AVEN Bridal Experience — after the timeline, before the conversion sections */}
      <BridalPatientJourney patientJourney={journey.patientJourney} navigate={navigate} />
      <BridalTimelineBuilder builder={BRIDAL_TIMELINE_BUILDER} navigate={navigate} />
      <BridalServiceConnections serviceLinks={serviceLinks} navigate={navigate} />
      <BridalEducationLinks refs={journey.relatedArticles} navigate={navigate} />
      {/* Future materials — renders nothing until a resource is enabled with a destination */}
      <BridalResources resources={journey.resources} navigate={navigate} />
      <BridalGalleryPlaceholder />
      <BridalTestimonialPlaceholder />
      <BridalFAQSection faqs={journey.faqs} />

      {/* Explore AVEN — internal links */}
      <section className="section">
        <div className="container">
          <Reveal>
            <Eyebrow>Explore AVEN</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(28px, 3.4vw, 46px)", margin: "20px 0 32px", fontWeight: 300 }}>Continue <em>exploring.</em></h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
            {EXPLORE_LINKS.map((l) => (
              <Reveal key={l.path}>
                <a href={l.path} onClick={(e) => { e.preventDefault(); navigate(l.path); }}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, padding: "20px 22px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%" }}>
                  <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 19, fontWeight: 400, color: "var(--ivory)" }}>{l.label}</span>
                  <span aria-hidden="true" style={{ color: "var(--gold)", flexShrink: 0 }}>&rarr;</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BridalFinalCTA navigate={navigate} journey={journey} />
    </main>
  );
};

export default BridalJourneyPage;
