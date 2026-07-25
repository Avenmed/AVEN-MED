/* AVEN MED — Education Center category landing (/education/topics/<slug>).
 *
 * One page per approved category, fully registry-derived: the header comes from
 * EDU_CATEGORIES and the article list from the registry search helper. Scales to
 * any number of articles without edits. Shows a tasteful empty state until content
 * exists, and always cross-links to the matching live service hub. */
import React from 'react';
import { Eyebrow, Logo, Reveal, HeroBg, AssessmentCTA, DividerMark } from '../components.jsx';
import { getEducationCards } from '../content/registry.jsx';
import { categoryBySlug } from '../content/education/index.js';
import { CLINICAL_REVIEWER } from '../content/people.js';

function ArticleCard({ a, navigate }) {
  return (
    <a href={a.path} onClick={(e) => { e.preventDefault(); navigate(a.path); }}
      style={{ display: "block", padding: "30px 30px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%", transition: "border-color 240ms ease" }}>
      <h3 className="display" style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "var(--ivory)", margin: 0 }}>{a.title}</h3>
      {a.excerpt && <p className="body-sm" style={{ marginTop: 12, color: "var(--muted)" }}>{a.excerpt}</p>}
      {a.readingTime && <div className="body-sm" style={{ marginTop: 16, color: "var(--muted)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>{a.readingTime} min read</div>}
    </a>
  );
}

const EducationCategoryPage = ({ category: slug, navigate }) => {
  const category = categoryBySlug(slug);

  // Unknown category slug — quietly send readers back to the hub.
  if (!category) {
    return (
      <main className="page">
        <section className="section" style={{ paddingTop: 200, textAlign: "center" }}>
          <div className="container">
            <h1 className="display" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, marginBottom: 24 }}>Topic not found</h1>
            <p className="body" style={{ marginBottom: 32 }}>That topic doesn't exist yet.</p>
            <a href="/education" onClick={(e) => { e.preventDefault(); navigate("/education"); }} style={{ color: "var(--gold)" }}>&larr; Back to the Education Center</a>
          </div>
        </section>
      </main>
    );
  }

  const articles = getEducationCards({ category: slug });

  return (
    <main className="page">
      {/* HEADER */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 64 }}>
        <HeroBg />
        <div className="container" style={{ maxWidth: 900 }}>
          <Reveal>
            <div className="body-sm" style={{ marginBottom: 22, color: "var(--muted)" }}>
              <a href="/education" onClick={(e) => { e.preventDefault(); navigate("/education"); }} style={{ color: "var(--muted)" }}>Education</a>
              <span style={{ margin: "0 10px", color: "var(--gold)" }}>/</span>
              <span style={{ color: "var(--ivory-soft)" }}>{category.label}</span>
            </div>
            <Eyebrow>Education Center</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(40px, 6vw, 84px)", margin: "22px 0 22px", lineHeight: 1.02, fontWeight: 300 }}>{category.label}</h1>
            <p className="lede" style={{ maxWidth: "56ch" }}>{category.blurb}</p>
          </Reveal>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          {articles.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {articles.map((a, i) => (
                <Reveal key={a.slug} delay={(i % 3) * 80}><ArticleCard a={a} navigate={navigate} /></Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div style={{ padding: "56px 40px", border: "1px solid var(--hairline)", background: "var(--surface)", textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
                <Logo size={34} style={{ margin: "0 auto 22px", opacity: 0.8 }} />
                <h2 className="display" style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 300, margin: "0 0 14px" }}>Articles are on the way</h2>
                <p className="body" style={{ margin: "0 auto", maxWidth: "48ch", color: "var(--muted)" }}>
                  We're preparing clinically reviewed writing on {category.label.toLowerCase()}. In the meantime, explore the topic with our team directly.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* CROSS-LINK to the live service hub */}
      {category.relatedHub && (
        <section className="section" style={{ background: "var(--bg-1)", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: 720 }}>
            <Reveal>
              <Eyebrow>Explore at AVEN</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 46px)", margin: "20px auto 22px", maxWidth: "22ch", fontWeight: 300 }}>
                See how we approach <em>{category.label.toLowerCase()}.</em>
              </h2>
              <a href={category.relatedHub} onClick={(e) => { e.preventDefault(); navigate(category.relatedHub); }}
                style={{ display: "inline-block", marginTop: 8, color: "var(--gold)", fontFamily: "var(--sans)", letterSpacing: "0.08em", borderBottom: "1px solid var(--gold-soft)", paddingBottom: 4 }}>
                Explore {category.label} &rarr;
              </a>
            </Reveal>
          </div>
        </section>
      )}

      <DividerMark />

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <h2 className="display" style={{ fontSize: "clamp(34px, 5vw, 64px)", margin: "0 auto 24px", maxWidth: "16ch", fontWeight: 300 }}>Ready when you are.</h2>
            <p className="body" style={{ margin: "0 auto 40px", maxWidth: "52ch" }}>
              Every article here is reviewed by {CLINICAL_REVIEWER.shortName} before publication. When you want guidance built around you, begin with an AVEN Assessment.
            </p>
            <AssessmentCTA navigate={navigate} />
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

export default EducationCategoryPage;
