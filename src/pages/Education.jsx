/* AVEN MED — Education Center hub (/education).
 *
 * A premium, philosophy-first destination — not a blog. Answers "why AVEN
 * education?" before listing anything. Category grid, featured strip, and search
 * results all derive from the pure-data registry helpers, so the page scales to
 * hundreds of articles and needs no edits when content is added. Every article
 * is clinically reviewed; that standard is surfaced here.
 *
 * Architecture phase: there are no articles yet, so listings show tasteful empty
 * states. The infrastructure is complete and ready for content. */
import React from 'react';
import { Eyebrow, Logo, Reveal, HeroBg, AssessmentCTA, DividerMark } from '../components.jsx';
import { getEducationCards, searchArticles } from '../content/registry.jsx';
import { categoriesInOrder } from '../content/education/index.js';
import { CLINICAL_REVIEWER } from '../content/people.js';

function ArticleCard({ a, navigate }) {
  return (
    <a href={a.path} onClick={(e) => { e.preventDefault(); navigate(a.path); }}
      style={{ display: "block", padding: "30px 30px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%", transition: "border-color 240ms ease" }}>
      <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.2em", marginBottom: 14 }}>{a.category}</div>
      <h3 className="display" style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "var(--ivory)", margin: 0 }}>{a.title}</h3>
      {a.excerpt && <p className="body-sm" style={{ marginTop: 12, color: "var(--muted)" }}>{a.excerpt}</p>}
      {a.readingTime && <div className="body-sm" style={{ marginTop: 16, color: "var(--muted)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>{a.readingTime} min read</div>}
    </a>
  );
}

const EducationPage = ({ navigate }) => {
  const categories = categoriesInOrder();
  const [query, setQuery] = React.useState("");
  const [activeCat, setActiveCat] = React.useState(null);

  // The full published library is the default view. An empty default made sense
  // when the library was empty; with 20 articles live it hid 19 of them behind a
  // control the visitor had to think to use first. getEducationCards({}) returns
  // everything, so search/filter now narrows a visible list rather than revealing
  // a hidden one. Same registry, same helper, same card.
  const results = getEducationCards({ query, category: activeCat });
  const featured = getEducationCards({}).filter((a) => a.featured).slice(0, 3);
  const hasAnyArticles = searchArticles({}).length > 0;

  return (
    <main className="page">
      {/* 1 — HERO */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 80 }}>
        <HeroBg />
        <div className="container">
          <Reveal style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <Eyebrow>Education Center</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(52px, 8vw, 128px)", margin: "24px 0 0", lineHeight: 0.96, maxWidth: "13ch" }}>
                Understand your <em>care.</em>
              </h1>
            </div>
            <p className="lede">
              Clear, honest, clinically reviewed writing on aesthetics, wellness, and
              family medicine — so you can make decisions with good information, not
              marketing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2 — WHY AVEN EDUCATION */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start", maxWidth: 1120 }}>
          <Reveal><Eyebrow>Why AVEN Education</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 54px)", margin: "0 0 26px", maxWidth: "22ch", fontWeight: 300 }}>
              Education before <em>anything else.</em>
            </h2>
            <p className="body" style={{ marginBottom: 20, fontSize: 17, lineHeight: 1.85 }}>
              Good decisions start with understanding. The AVEN Education Center exists to
              explain the things patients actually wonder about — how treatments work, what
              a concern really means, what to expect — plainly and without a sales pitch.
            </p>
            <p className="body" style={{ marginBottom: 20, fontSize: 17, lineHeight: 1.85 }}>
              Everything here is written to inform, grounded in evidence, and reviewed by a
              clinician before it's published. It's the same restraint and honesty we bring
              to care itself.
            </p>
            <p className="body" style={{ color: "var(--ivory-soft)", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 19 }}>
              Read to understand. Then, if it's right for you, we'll build a plan together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3 — SEARCH + FILTER. Mounted only once there is something to search: a
          search box and nine topic filters over an empty library is a dead control,
          not restraint. Gated on the existing hasAnyArticles flag, so it returns by
          itself the moment the first article publishes. */}
      {hasAnyArticles && (
      <section className="section">
        <div className="container">
          <Reveal>
            <label htmlFor="edu-search" className="label" style={{ color: "var(--gold)", letterSpacing: "0.22em", display: "block", marginBottom: 14 }}>Search the library</label>
            <input
              id="edu-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, topics, or questions…"
              style={{ width: "100%", maxWidth: 640, padding: "16px 20px", background: "var(--bg)", border: "1px solid var(--hairline)", color: "var(--ivory)", fontFamily: "var(--sans)", fontSize: 16 }}
            />
            <div role="group" aria-label="Filter by topic" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}>
              <button type="button" onClick={() => setActiveCat(null)} aria-pressed={activeCat === null}
                style={chipStyle(activeCat === null)}>All</button>
              {categories.map((c) => (
                <button key={c.slug} type="button" onClick={() => setActiveCat(activeCat === c.slug ? null : c.slug)} aria-pressed={activeCat === c.slug}
                  style={chipStyle(activeCat === c.slug)}>{c.label}</button>
              ))}
            </div>
          </Reveal>

          {/* Results — the whole published library by default; search/filter narrows it. */}
          <div style={{ marginTop: 40 }}>
            <div className="body-sm" aria-live="polite" style={{ color: "var(--muted)", marginBottom: 24 }}>
              {results.length} {results.length === 1 ? "article" : "articles"}
            </div>
            {results.length > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                {results.map((a, i) => <Reveal key={a.slug} delay={(i % 3) * 80}><ArticleCard a={a} navigate={navigate} /></Reveal>)}
              </div>
            ) : (
              <p className="body" style={{ color: "var(--muted)", fontStyle: "italic" }}>
                Nothing here yet — try another topic, or browse the categories below.
              </p>
            )}
          </div>
        </div>
      </section>
      )}

      {/* 4 — BROWSE BY TOPIC (registry-derived categories) */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <Reveal>
            <Eyebrow>Browse by Topic</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 68px)", margin: "20px 0 48px", maxWidth: "18ch", fontWeight: 300 }}>
              Start where you're <em>curious.</em>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 70}>
                <a href={`/education/topics/${c.slug}`} onClick={(e) => { e.preventDefault(); navigate(`/education/topics/${c.slug}`); }}
                  style={{ display: "block", padding: "32px 30px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%", transition: "border-color 240ms ease" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14 }}>
                    <span className="display" style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "var(--ivory)" }}>{c.label}</span>
                    <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: 18, lineHeight: 1, flexShrink: 0 }}>&rarr;</span>
                  </div>
                  <p className="body-sm" style={{ marginTop: 14, color: "var(--muted)" }}>{c.blurb}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — FEATURED (editor's picks) — shown only when featured articles exist */}
      {featured.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal>
              <Eyebrow>Editor's Picks</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 60px)", margin: "20px 0 48px", fontWeight: 300 }}>Worth your <em>time.</em></h2>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {featured.map((a, i) => <Reveal key={a.slug} delay={(i % 3) * 80}><ArticleCard a={a} navigate={navigate} /></Reveal>)}
            </div>
          </div>
        </section>
      )}

      {/* 6 — CLINICAL STANDARD */}
      <section className="section" style={{ background: "var(--bg-1)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal>
            <Eyebrow>The Clinical Standard</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 46px)", margin: "20px auto 22px", maxWidth: "24ch", fontWeight: 300 }}>
              Every article is <em>clinically reviewed.</em>
            </h2>
            <p className="body" style={{ margin: "0 auto 20px", maxWidth: "56ch" }}>
              Before anything is published, it's reviewed for medical accuracy by{" "}
              <a href={CLINICAL_REVIEWER.profilePath} onClick={(e) => { e.preventDefault(); navigate(CLINICAL_REVIEWER.profilePath); }} style={{ color: "var(--gold)" }}>{CLINICAL_REVIEWER.name}</a>,
              {" "}{CLINICAL_REVIEWER.role}. That's the difference between health content and honest medical education.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7 — THE AVEN ASSESSMENT */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={40} style={{ margin: "0 auto 26px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(36px, 5.4vw, 72px)", margin: "0 auto 24px", maxWidth: "15ch", fontWeight: 300 }}>
              From reading to a <em>plan.</em>
            </h2>
            <p className="body" style={{ margin: "0 auto 40px", maxWidth: "52ch" }}>
              Articles inform; a plan is personal. When you're ready, begin with an AVEN
              Assessment — an honest read on what fits you.
            </p>
            <AssessmentCTA navigate={navigate} />
          </Reveal>
        </div>
      </section>

      <DividerMark />
      <div className="brand-signature">AVEN MED · Orland Park · By appointment</div>
    </main>
  );
};

function chipStyle(active) {
  return {
    padding: "9px 16px", cursor: "pointer",
    border: `1px solid ${active ? "var(--gold)" : "var(--hairline)"}`,
    background: active ? "var(--surface)" : "transparent",
    color: active ? "var(--gold)" : "var(--ivory-soft)",
    fontFamily: "var(--sans)", fontSize: 13, letterSpacing: "0.06em",
    transition: "border-color 200ms ease",
  };
}

export default EducationPage;
