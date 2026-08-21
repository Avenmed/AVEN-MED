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
 * HTML. Source modules are loaded through Vite's own SSR pipeline (ssrLoadModule),
 * so the app's real transform (@vitejs/plugin-react, import.meta.glob, etc.) applies
 * — the only mechanism guaranteed to transpile this .jsx tree the same way the build
 * does. (jiti was tried first but does not enable JSX transform for .jsx files.) */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { createServer } from 'vite';

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

// FAIL-VISIBLE: every problem is collected and, if anything failed to generate a
// valid head, printed to stderr with a non-zero exit so the Netlify build FAILS and
// the previous good deploy is kept — we never publish a deploy with wrong or
// soft-404 static heads.
let ok = 0;
const errors = [];
let vite;
try {
  vite = await createServer({
    root: ROOT,
    logLevel: 'error',
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
    optimizeDeps: { noDiscovery: true },
  });
  const seo = await vite.ssrLoadModule('/src/seo.js');
  const registry = await vite.ssrLoadModule('/src/content/registry.jsx');
  const resolveSeo = seo.resolveSeo || (seo.default && seo.default.resolveSeo);
  const getPrerenderRoutes = registry.getPrerenderRoutes || (registry.default && registry.default.getPrerenderRoutes);
  if (typeof resolveSeo !== 'function') throw new Error('resolveSeo export not found');
  if (typeof getPrerenderRoutes !== 'function') throw new Error('getPrerenderRoutes export not found');

  const shell = readFileSync(SHELL, 'utf8');
  const routes = getPrerenderRoutes();
  if (!Array.isArray(routes) || !routes.length) throw new Error('no prerender routes returned');

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

      // Emit a FLAT file (dist/<route>.html), not dist/<route>/index.html. Netlify
      // serves /<route> from /<route>.html with a 200 and no redirect, so the served
      // URL matches the canonical exactly; a directory index would 301 to a trailing
      // slash and leave the canonical pointing at the redirecting form.
      if (route === '/') writeFileSync(SHELL, html);
      else { const file = resolve(DIST, `.${route}.html`); mkdirSync(dirname(file), { recursive: true }); writeFileSync(file, html); }
      ok++;
    } catch (e) {
      errors.push(`ROUTE ${route}: ${e && e.message ? e.message : e}`);
    }
  }
} catch (err) {
  errors.unshift(`SETUP: ${err && err.stack ? err.stack : (err && err.message ? err.message : String(err))}`);
} finally {
  if (vite) { try { await vite.close(); } catch (e) { /* ignore */ } }
}

if (errors.length) {
  console.error(`[prerender] FAILED — ${ok} route head(s) written, ${errors.length} error(s):`);
  for (const e of errors) console.error('  ' + e);
  process.exit(1);
}
console.log(`[prerender] ok — generated ${ok} route heads`);
process.exit(0);
