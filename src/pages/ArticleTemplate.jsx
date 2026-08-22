/* AVEN MED — Education article template.
 *
 * Renders one educational article from its lightweight metadata (from the
 * Education index) plus a lazily-loaded body module (code-split per article).
 * Distinct content type from the service pages. Reuses the existing design kit
 * and the shared schema pattern (injected on mount, cleaned on unmount).
 *
 * Body modules live at src/pages/education/articles/<slug>.jsx and default-export
 * { body: [blocks], faqs?, keyTakeaways?, relatedServices? }. Loaded on demand so
 * the hub/search never pay for content they don't show. (No article bodies exist
 * yet — this template is infrastructure, ready for content.) */
import React from 'react';
import { Eyebrow, Logo, Reveal, DividerMark, HeroBg, AssessmentCTA } from '../components.jsx';
import { CLINIC, DEFAULT_AREAS } from '../content/clinic.js';
import { getPerson, DEFAULT_AUTHOR_ID, CLINICAL_REVIEWER_ID } from '../content/people.js';
import { categoryBySlug } from '../content/education/index.js';

const BASE_URL = CLINIC.url;

// Per-article body chunks (code-split). Empty until articles are authored.
const BODY_MODULES = import.meta.glob('./education/articles/*.jsx');

function useArticleSchema(article, category, author, reviewer) {
  React.useEffect(() => {
    const url = `${BASE_URL}/education/${article.slug}`;
    const graph = [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Education", "item": `${BASE_URL}/education` },
          ...(category ? [{ "@type": "ListItem", "position": 3, "name": category.label, "item": `${BASE_URL}/education/topics/${category.slug}` }] : []),
          { "@type": "ListItem", "position": category ? 4 : 3, "name": article.title, "item": url },
        ],
      },
      {
        "@type": ["MedicalWebPage", "Article"],
        "headline": article.title,
        "description": article.excerpt,
        "url": url,
        "datePublished": article.datePublished,
        "dateModified": article.dateModified || article.datePublished,
        "inLanguage": "en-US",
        "author": author && (author.isClinicalReviewer
          ? { "@type": "Person", "name": author.name }
          : { "@type": "Organization", "name": author.name }),
        "reviewedBy": reviewer ? { "@type": "Person", "@id": `${BASE_URL}/#alaa`, "name": reviewer.name } : undefined,
        "publisher": { "@id": `${BASE_URL}/#clinic` },
        "mainEntityOfPage": url,
        "audience": { "@type": "MedicalAudience", "audienceType": "Patient" },
        // Only the sources actually used in the article body (never fabricated).
        "citation": (article.referencesForSchema && article.referencesForSchema.length)
          ? article.referencesForSchema.map((r) => (r.url
              ? { "@type": "CreativeWork", "name": r.label, "publisher": r.publisher, "url": r.url }
              : { "@type": "CreativeWork", "name": r.label, "publisher": r.publisher }))
          : undefined,
      },
      ...(article.faqsForSchema && article.faqsForSchema.length
        ? [{
            "@type": "FAQPage",
            "mainEntity": article.faqsForSchema.map((f) => ({
              "@type": "Question", "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          }]
        : []),
      // The clinic (#clinic) is defined canonically in index.html and referenced
      // by @id (publisher) above — not re-declared here. Ready for future articles.
    ];
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "article-schema";
    el.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    document.head.appendChild(el);
    return () => { el.remove(); };
  }, [article, category, author, reviewer]);
}

// ---- Body block renderer ----------------------------------------------------
function Block({ b, navigate }) {
  switch (b.type) {
    case "lede":
      return <p className="lede" style={{ maxWidth: "62ch", margin: "0 0 28px" }}>{b.text}</p>;
    case "section":
      return (
        <section style={{ marginBottom: 8 }}>
          {b.heading && <h2 id={slugifyHeading(b.heading)} className="display" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", margin: "40px 0 20px", fontWeight: 300 }}>{b.heading}</h2>}
          {(b.body || []).map((p, i) => <p key={i} className="body" style={{ marginBottom: 18, maxWidth: "68ch", fontSize: 17, lineHeight: 1.85 }}>{p}</p>)}
        </section>
      );
    case "list":
      return (
        <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 24px", display: "flex", flexDirection: "column", gap: 12, maxWidth: "64ch" }}>
          {b.items.map((it) => (
            <li key={it} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, color: "var(--ivory)", fontSize: 16 }}>
              <span style={{ width: 10, height: 1, background: "var(--gold)", marginTop: 12 }}></span><span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div style={{ margin: "24px 0", padding: "24px 28px", border: `1px solid ${b.tone === "caution" ? "var(--gold-soft)" : "var(--hairline)"}`, background: "var(--surface)", maxWidth: "68ch" }}>
          <p className="body" style={{ margin: 0, fontStyle: "italic", fontFamily: "var(--serif)", fontSize: 18, color: "var(--ivory-soft)" }}>{b.text}</p>
        </div>
      );
    case "cta":
      return (
        <div style={{ margin: "36px 0" }}><AssessmentCTA navigate={navigate} /></div>
      );
    default:
      return null;
  }
}

function slugifyHeading(h) {
  return "sec-" + (h || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// ---- Template ---------------------------------------------------------------
const ArticleTemplate = ({ article, navigate }) => {
  const category = article.category ? categoryBySlug(article.category) : null;
  const author = getPerson(article.authorId || DEFAULT_AUTHOR_ID);
  const reviewer = getPerson(article.reviewerId || CLINICAL_REVIEWER_ID);
  const [content, setContent] = React.useState(null);
  const [loadState, setLoadState] = React.useState("loading");

  React.useEffect(() => {
    let alive = true;
    const key = `./education/articles/${article.slug}.jsx`;
    const loader = BODY_MODULES[key];
    if (!loader) { setLoadState("empty"); return; }
    setLoadState("loading");
    loader().then((mod) => { if (alive) { setContent(mod.default || mod); setLoadState("ready"); } })
            .catch(() => { if (alive) setLoadState("error"); });
    return () => { alive = false; };
  }, [article.slug]);

  const faqs = content?.faqs || [];
  const references = content?.references || [];
  // expose faqs + references to schema via side fields (kept off public metadata)
  const articleForSchema = React.useMemo(() => ({ ...article, faqsForSchema: faqs, referencesForSchema: references }), [article, faqs, references]);
  useArticleSchema(articleForSchema, category, author, reviewer);

  return (
    <main className="page">
      {/* HEADER */}
      <section className="has-hero-bg" style={{ paddingTop: 180, paddingBottom: 56 }}>
        <HeroBg />
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal>
            {category && <Eyebrow>{article.heroEyebrow || category.label}</Eyebrow>}
            <h1 className="display" style={{ fontSize: "clamp(34px, 5vw, 64px)", margin: "22px 0 20px", lineHeight: 1.06, fontWeight: 300 }}>{article.title}</h1>
            {article.excerpt && <p className="lede" style={{ maxWidth: "60ch", marginBottom: 28 }}>{article.excerpt}</p>}
            {/* Byline + clinical review */}
            <div className="body-sm" style={{ display: "flex", flexWrap: "wrap", gap: "6px 18px", alignItems: "center", color: "var(--muted)", paddingTop: 20, borderTop: "1px solid var(--hairline)" }}>
              {author && <span>Written by {author.name}</span>}
              {reviewer && (
                <span style={{ color: "var(--ivory-soft)" }}>
                  Medically reviewed by{" "}
                  <a href={reviewer.profilePath || "/providers/alaa-mashal"} onClick={(e) => { e.preventDefault(); navigate(reviewer.profilePath || "/providers/alaa-mashal"); }} style={{ color: "var(--gold)" }}>{reviewer.name}</a>
                </span>
              )}
              {article.datePublished && <span>· Published {formatDate(article.datePublished)}</span>}
              {article.dateModified && article.dateModified !== article.datePublished && <span>· Updated {formatDate(article.dateModified)}</span>}
              {article.readingTime && <span>· {article.readingTime} min read</span>}
            </div>
          </Reveal>
        </div>
      </section>

      {/* KEY TAKEAWAYS */}
      {content?.keyTakeaways?.length > 0 && (
        <section className="section" style={{ paddingTop: 40, paddingBottom: 0 }}>
          <div className="container" style={{ maxWidth: 820 }}>
            <Reveal>
              <div style={{ padding: "28px 32px", border: "1px solid var(--gold-soft)", background: "var(--surface)" }}>
                <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.22em", marginBottom: 16 }}>Key Takeaways</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {content.keyTakeaways.map((t) => (
                    <li key={t} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, color: "var(--ivory)", fontSize: 15 }}>
                      <span style={{ width: 10, height: 1, background: "var(--gold)", marginTop: 11 }}></span><span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* BODY */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          {loadState === "ready" && content?.body?.map((b, i) => (
            <Reveal key={i} delay={Math.min(i, 4) * 40}><Block b={b} navigate={navigate} /></Reveal>
          ))}
          {loadState !== "ready" && (
            <Reveal>
              <p className="body" style={{ color: "var(--muted)", fontStyle: "italic" }}>
                {loadState === "loading" ? "Loading…" : "This article is being prepared."}
              </p>
            </Reveal>
          )}

          {/* FAQ */}
          {faqs.length > 0 && (
            <div style={{ marginTop: 48 }}>
              <Reveal><h2 className="display" style={{ fontSize: "clamp(26px, 3.2vw, 40px)", margin: "0 0 24px", fontWeight: 300 }}>Common questions</h2></Reveal>
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={Math.min(i, 6) * 50}>
                  <details style={{ borderTop: "1px solid var(--hairline)", padding: "24px 0", cursor: "pointer" }}>
                    <summary style={{ listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, fontFamily: "var(--serif)", fontSize: 20, fontWeight: 300 }}>
                      <span>{f.q}</span><span style={{ color: "var(--gold)", fontSize: 20, flexShrink: 0 }}>+</span>
                    </summary>
                    <p className="body" style={{ marginTop: 16 }}>{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          )}

          {/* REFERENCES (only sources actually used; authoritative bodies, not blogs) */}
          {references.length > 0 && (
            <div style={{ marginTop: 48 }}>
              <Reveal>
                <div className="label" style={{ color: "var(--gold)", letterSpacing: "0.22em", marginBottom: 16 }}>References</div>
                <ol style={{ paddingLeft: 20, margin: 0, display: "flex", flexDirection: "column", gap: 10, maxWidth: "68ch" }}>
                  {references.map((r, i) => (
                    <li key={i} className="body-sm" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                      {r.url ? (
                        <a href={r.url} target="_blank" rel="noopener noreferrer nofollow" style={{ color: "var(--ivory-soft)", borderBottom: "1px solid var(--hairline)" }}>{r.label}</a>
                      ) : (
                        <span style={{ color: "var(--ivory-soft)" }}>{r.label}</span>
                      )}
                      {r.publisher && <span> — {r.publisher}</span>}
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          )}

          {/* DISCLAIMER */}
          <Reveal>
            <p className="body-sm" style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--hairline)", color: "var(--muted)", fontStyle: "italic", maxWidth: "64ch" }}>
              This article is educational and is not individual medical advice. It has been reviewed for accuracy by {reviewer ? reviewer.name : "a qualified clinician"}. For guidance specific to you, begin with an AVEN Assessment, and seek urgent or emergency care when appropriate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED SERVICES (curated) */}
      {content?.relatedServices?.length > 0 && (
        <LinkStrip eyebrow="Related Care at AVEN" headline={<>Where this <em>connects.</em></>} items={content.relatedServices} navigate={navigate} background="var(--bg-1)" />
      )}

      {/* RELATED ARTICLES (auto, same category — passed in by the route) */}
      {article.relatedArticles?.length > 0 && (
        <LinkStrip eyebrow="Keep Reading" headline={<>More on this <em>topic.</em></>} items={article.relatedArticles} navigate={navigate} />
      )}

      <DividerMark />

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <Logo size={40} style={{ margin: "0 auto 26px", opacity: 0.85 }} />
            <h2 className="display" style={{ fontSize: "clamp(34px, 5vw, 64px)", margin: "0 auto 24px", maxWidth: "16ch", fontWeight: 300 }}>Questions about your care?</h2>
            <p className="body" style={{ margin: "0 auto 40px", maxWidth: "52ch" }}>Reading is a start — a plan is personal. Begin with an AVEN Assessment for guidance built around you.</p>
            <AssessmentCTA navigate={navigate} />
          </Reveal>
        </div>
      </section>

      <div className="brand-signature">AVEN MED · {CLINIC.addressLocality} · By appointment</div>
    </main>
  );
};

function LinkStrip({ eyebrow, headline, intro, items, navigate, background }) {
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
                style={{ display: "block", padding: "26px 28px", border: "1px solid var(--hairline)", background: "var(--bg)", height: "100%", transition: "border-color 240ms ease" }}>
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

function formatDate(iso) {
  try {
    const [y, m, d] = iso.split("-").map(Number);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${months[m - 1]} ${d}, ${y}`;
  } catch { return iso; }
}

export default ArticleTemplate;
