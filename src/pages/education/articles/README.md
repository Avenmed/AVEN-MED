# Education Center — article bodies

Article **bodies** live here, one file per article: `src/pages/education/articles/<slug>.jsx`.
They are lazy-loaded (code-split) per article by `ArticleTemplate.jsx` via
`import.meta.glob`, so the hub and search never pay for content they don't show.

This directory is intentionally empty during the architecture phase — no article
content has been written yet.

## Adding an article (two steps)

1. **Metadata** — add one entry to `EDU_ARTICLES` in
   `src/content/education/index.js` (the pure-data index; see the shape documented
   there). The `slug` here must match the body filename.

2. **Body** — add `<slug>.jsx` in this directory with a default export:

   ```jsx
   export default {
     keyTakeaways: ["…", "…"],            // optional — boxed at the top
     body: [
       { type: "lede", text: "…" },
       { type: "section", heading: "…", body: ["paragraph", "paragraph"] },
       { type: "list", items: ["…", "…"] },
       { type: "callout", tone: "note" | "caution", text: "…" },
       { type: "cta" },                    // renders the AVEN Assessment CTA
     ],
     faqs: [{ q: "…", a: "…" }],           // optional — accordion + FAQ schema
     relatedServices: [                    // optional — curated cross-links
       { label: "…", path: "/service/…", note: "…" },
     ],
   };
   ```

Author, clinical reviewer, breadcrumbs, related articles, SEO, structured data,
and the sitemap are all derived automatically from the metadata entry — nothing
else to wire up.
