# AVEN MED Website

A practice website for AVEN MED — aesthetic medicine, family care, and wellness in Orland Park, Illinois.

## Pages

- `index.html` — Home
- `services.html` — All 9 services
- `shop.html` — Skincare products
- `gallery.html` — Before & after + videos
- `about.html` — Story, philosophy, the wall mark
- `testimonials.html` — Patient reviews
- `book.html` — Booking widget area + FAQ
- `contact.html` — Address, hours, map, contact form

## Tech

- Plain HTML, CSS, JavaScript — no build step needed
- Google Fonts: Cormorant Garamond + Jost
- Custom inline SVG for the olive sprig logo
- Mobile-responsive (hamburger menu at <860px)
- Scroll reveal animations
- Filterable gallery
- FAQ accordion
- Netlify contact form (works automatically once deployed to Netlify)

## Local Preview

To preview without deploying, open `index.html` in a browser (or right-click in VS Code → "Open with Live Server" if you have the extension).

## Deploy

This folder is set up to deploy via Netlify connected to a GitHub repository:

1. Push to GitHub: `git add . && git commit -m "your message" && git push`
2. Netlify auto-detects the push and rebuilds within ~60 seconds
3. Live at avenmedil.com

## Integrations Needed

The site is functional but uses placeholders for these third-party integrations:

- **Aesthetic Record booking** — Replace booking placeholder in `book.html` with AR widget embed
- **Shopify Buy Buttons** — Replace product buttons in `shop.html` with Shopify embeds
- **Before/after photos** — Replace placeholder SVGs in `gallery.html` with real photos (with consent)
- **Vimeo embeds** — Replace video placeholders in `gallery.html` with real video embeds
- **Google Maps** — Replace map placeholder in `contact.html` with Google Maps embed iframe
- **Social media links** — Update `href="#"` in nav and footer with real Instagram/Facebook/TikTok URLs
- **Real address, phone, email, hours** — Update placeholders throughout footer, contact page, book page

Search the codebase for the word "placeholder" or "Setup needed" to find every integration point.

## Brand

- Colors: Bone `#F6EFE2` · Plaster `#E8DCC8` · Quartz `#FBF6EC` · Brass `#B08D5B` · Olive `#6B6A50` · Warm Ink `#2E2620`
- Typography: Cormorant Garamond (display) + Jost (sans)
- Logo: Custom 7-leaf olive sprig SVG, brass color via CSS

---

© AVEN MED
