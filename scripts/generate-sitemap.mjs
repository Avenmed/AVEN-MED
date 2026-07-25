/* AVEN MED — build-time sitemap generator.
 *
 * The content registry is the single source of truth for URLs (decision:
 * "no manually maintained sitemap"). This script imports registry.getSitemapEntries()
 * — which combines static routes, every registry page, and the Education Center
 * hub/categories/articles — and writes public/sitemap.xml.
 *
 * FAIL-SAFE BY DESIGN. The registry is JSX and this project has no local build to
 * test against, so any transpile/import hiccup must NOT break the Netlify build:
 *  - the whole thing runs in try/catch and always exits 0;
 *  - on failure it leaves the committed public/sitemap.xml untouched (that file is
 *    kept accurate at commit time as a fallback), so the site always ships a valid
 *    sitemap either way.
 * jiti is used to transpile the JSX registry on the fly in plain Node. */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT = resolve(ROOT, 'public/sitemap.xml');
const BASE = 'https://avenmedil.com';
// Deterministic date input so CI/reproducible builds don't churn the file.
const TODAY = process.env.SITEMAP_DATE || new Date().toISOString().slice(0, 10);

function toXml(entries) {
  const urls = entries.map((e) => {
    const loc = `${BASE}${e.loc === '/' ? '/' : e.loc}`;
    const lastmod = e.lastmod || TODAY;
    const changefreq = e.changefreq || 'monthly';
    const priority = (typeof e.priority === 'number' ? e.priority : 0.7).toFixed(1);
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

try {
  const { createJiti } = await import('jiti');
  const jiti = createJiti(import.meta.url, { interopDefault: true });
  const mod = await jiti.import(resolve(ROOT, 'src/content/registry.jsx'));
  const getSitemapEntries = mod.getSitemapEntries || (mod.default && mod.default.getSitemapEntries);
  if (typeof getSitemapEntries !== 'function') throw new Error('getSitemapEntries export not found');
  const entries = getSitemapEntries();
  if (!Array.isArray(entries) || entries.length === 0) throw new Error('no sitemap entries returned');
  writeFileSync(OUT, toXml(entries));
  console.log(`[sitemap] wrote ${entries.length} URLs to public/sitemap.xml`);
} catch (err) {
  console.warn('[sitemap] dynamic generation skipped; keeping committed public/sitemap.xml —', err && err.message);
}
process.exit(0);
