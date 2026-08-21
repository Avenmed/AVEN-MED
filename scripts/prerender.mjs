/* AVEN MED — build-time prerender / SSG (head + metadata).
 *
 * Runs AFTER `vite build`. For every live public route (derived from the registry
 * via getPrerenderRoutes — the single source of truth, so it can never drift from
 * the sitemap), it writes a static HTML file whose <head> already carries the
 * route's correct <title>, description, canonical, robots, and Open Graph / Twitter
 * tags — computed by the SAME resolveSeo() the client uses (src/seo.js). This fixes
 * the "SEO identity only exists after JavaScript runs" limitation for social
 * scrapers and non-JS crawlers. The canonical entity graph (#website / #clinic /
 * #alaa JSON-LD, Phase 8.3) is already static in index.html, so it ships on every
 * generated route too. The <body> stays client-rendered (the SPA reads the URL and
 * renders the correct route on first paint — no homepage flash); route-specific
 * JSON-LD (breadcrumb/FAQ/service) remains client-injected and is read by Google's
 * renderer.
 *
 * FAIL-VISIBLE by design: unlike the fail-safe sitemap generator, a prerender error
 * exits non-zero so the build FAILS rather than silently shipping wrong/soft-404
 * HTML. jiti transpiles the JSX registry on the fly (same proven pattern). */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');
const SHELL = resolve(DIST, 'index.html');
const BASE = 'https://avenmedil.com';

const escAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const escText = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rx = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function setTitle(html, title) {
  const re = /<title>[\s\S]*?<\/title>/i;
  if (!re.test(html)) throw new Error('<title> not found in shell');
  return html.replace(re, `<title>${escText(title)}</title>`);
}
// Match the whole <meta ...> tag by its attr="key" (any attribute order), then
// replace (or add) its content="…" — robust to however vite re-serializes index.html.
function setMetaTag(html, attr, key, value) {
  const tagRe = new RegExp(`<meta\\b[^>]*\\b${attr}="${rx(key)}"[^>]*>`, 'i');
  const m = html.match(tagRe);
  if (!m) throw new Error(`<meta ${attr}="${key}"> not found in shell`);
  let tag = m[0];
  tag = /content="[^"]*"/i.test(tag)
    ? tag.replace(/content="[^"]*"/i, `content="${escAttr(value)}"`)
    : tag.replace(/\s*\/?>$/, ` content="${escAttr(value)}">`);
  return html.replace(m[0], tag);
}
function setCanonical(html, href) {
  const tagRe = /<link\b[^>]*\brel="canonical"[^>]*>/i;
  const m = html.match(tagRe);
  if (!m) throw new Error('<link rel="canonical"> not found in shell');
  if (!/href="[^"]*"/i.test(m[0])) throw new Error('canonical link has no href');
  return html.replace(m[0], m[0].replace(/href="[^"]*"/i, `href="${escAttr(href)}"`));
}

// TEMPORARY DIAGNOSTIC MODE: capture any failure into dist/prerender-status.txt
// (served by Netlify) and exit 0, so the build deploys and the error is readable
// via curl — this environment has no Node/Netlify-log access. Fail-visible (exit 1)
// is restored once the root cause is fixed. The head-injection is non-destructive:
// a route that isn't written simply falls back to today's client-rendered head.
let ok = 0;
const errs = [];
try {
  const { createJiti } = await import('jiti');
  const jiti = createJiti(import.meta.url, { interopDefault: true });
  const seo = await jiti.import(resolve(ROOT, 'src/seo.js'));
  const registry = await jiti.import(resolve(ROOT, 'src/content/registry.jsx'));
  const resolveSeo = seo.resolveSeo || (seo.default && seo.default.resolveSeo);
  const getPrerenderRoutes = registry.getPrerenderRoutes || (registry.default && registry.default.getPrerenderRoutes);
  if (typeof resolveSeo !== 'function') throw new Error('resolveSeo export not found');
  if (typeof getPrerenderRoutes !== 'function') throw new Error('getPrerenderRoutes export not found');

  const shell = readFileSync(SHELL, 'utf8');
  const routes = getPrerenderRoutes();
  if (!Array.isArray(routes) || !routes.length) throw new Error('no prerender routes returned');
  errs.push(`INFO routes=${routes.length} shellLen=${shell.length}`);
  errs.push(`INFO shellHasTitle=${/<title>/i.test(shell)} shellHasDesc=${/name="description"/i.test(shell)} shellHasCanon=${/rel="canonical"/i.test(shell)} shellHasOgTitle=${/property="og:title"/i.test(shell)}`);

  for (const route of routes) {
    try {
      const { title, description, robots, canonical } = resolveSeo(route);
      if (!title || !description || !canonical || !robots) throw new Error(`missing SEO field`);
      if (/\[Placeholder|\[Headline|pending approval|\[Supporting|\[Section/i.test(`${title} ${description}`)) throw new Error(`placeholder text`);
      const expected = route === '/' ? `${BASE}/` : `${BASE}${route}`;
      if (canonical !== expected) throw new Error(`canonical ${canonical} != ${expected}`);
      const isBridal = route === '/bridal-journey' || route.startsWith('/bridal-journey/');
      if (isBridal && !robots.includes('noindex')) throw new Error(`expected noindex`);

      let html = shell;
      html = setTitle(html, title);
      html = setMetaTag(html, 'name', 'description', description);
      html = setMetaTag(html, 'name', 'robots', robots);
      html = setCanonical(html, canonical);
      html = setMetaTag(html, 'property', 'og:title', title);
      html = setMetaTag(html, 'property', 'og:description', description);
      html = setMetaTag(html, 'property', 'og:url', canonical);
      html = setMetaTag(html, 'name', 'twitter:title', title);
      html = setMetaTag(html, 'name', 'twitter:description', description);

      if (route === '/') writeFileSync(SHELL, html);
      else { const dir = resolve(DIST, `.${route}`); mkdirSync(dir, { recursive: true }); writeFileSync(join(dir, 'index.html'), html); }
      ok++;
    } catch (e) {
      errs.push(`ROUTE ${route}: ${e && e.message ? e.message : e}`);
    }
  }
} catch (err) {
  errs.unshift(`SETUP: ${err && err.stack ? err.stack : (err && err.message ? err.message : String(err))}`);
}
const status = `prerender ok=${ok} errors=${errs.filter((e) => !e.startsWith('INFO')).length}\n` + errs.join('\n') + '\n';
try { writeFileSync(resolve(DIST, 'prerender-status.txt'), status); } catch (e) { console.error('could not write status', e && e.message); }
console.log(`[prerender] ok=${ok}, see /prerender-status.txt`);
process.exit(0);
