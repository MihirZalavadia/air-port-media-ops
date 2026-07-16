# Website Issues & Pending Work Tracker

> Started 2026-07-10. One line per issue; move to Done with the date when shipped.
> Site: mukeshmediagroup on Netlify (+ GitHub Pages mirror).

## Open — blocking real buyer traffic

| # | Issue | Owner / needs | Notes |
|---|-------|---------------|-------|
| 1 | **Lead capture goes nowhere** — unlock + contact forms save only to the visitor's browser | Mihir (decision: Netlify Forms vs Google Sheet vs Zoho) | Netlify Forms is free & fastest; Zoho aligns with CRM plan |
| 2 | **Placeholder email** `info@example.com` in contact card + footer + seo.ts | Ridham to confirm real email | Also phone `+91 XXXXXXXXXX` in seo.ts |
| 3 | **Plan PDFs missing** — 4 download slots wired, `pdfReady: false` | Mihir (generate via Gamma from deck outlines) | Drop into `public/downloads/`, flip flags |
| 4 | **Domain decision** — client undecided | Mukesh sir / Ridham | See SEO notes below; recommend rajkotairportmedia.com or mukeshmediagroup.com + subpath |

## Open — quality / trust

| # | Issue | Notes |
|---|-------|-------|
| 5 | Ridham's LinkedIn URL pending — team card icon inert until shared | one-line change |
| 6 | AD-15 (SHA backlit) has no site photo — plan card renders without image | never substitute a wrong location's photo |
| 7 | Social links in footer (Instagram/Facebook/LinkedIn) still `#` | company pages don't exist yet — part of social setup workstream |
| 8 | "Exclusive Airport Advertising Rights Holder" wording live — confirm AAI is comfortable with this exact public phrasing | Ridham |
| 9 | Group page has no brand-proof strip — optional logo marquee between Journey and About | proposed, awaiting go-ahead |
| 10 | GH Pages + Netlify both serve the site (duplicate content) — pick primary, redirect/disable the other; update `siteConfig.url` when domain lands | SEO hygiene |

## Open — SEO (ranking for "rajkot outdoor media", "rajkot airport marketing", …)

| # | Task | Impact |
|---|------|--------|
| 11 | Google Business Profile for Mukesh Airport Media (Rajkot) — category "Advertising agency", link site, photos | **Highest** for local queries |
| 12 | Google Search Console: verify property, submit sitemap.xml | Required plumbing |
| 13 | Content pages per keyword theme (e.g. /outdoor-advertising-rajkot/, /airport-advertising-rajkot/) — 400–600 words each, internally linked | The real ranking lever |
| 14 | Backlinks: local directories (Justdial, IndiaMart, Sulekha), aviation/media listings, press note on airport tender win | Authority |
| 15 | Custom domain + consistent NAP (name-address-phone) across site, GBP, directories | Local pack signal |

## Open — security (before/when backend goes live)

| # | Item | Notes |
|---|------|-------|
| 16 | Form endpoint: use Netlify Forms or serverless fn — never embed API keys/secrets in client JS (static export ships everything to the browser) | |
| 17 | Spam protection on forms: honeypot field + rate limit (Netlify Forms has built-in honeypot/Akismet) | |
| 18 | Server-side re-validation of phone/name (client validation is UX, not security) | |
| 19 | HTTPS everywhere (Netlify auto) + HSTS once custom domain lands | |
| 20 | If Zoho/Sheets webhook used: restrict CORS to site origin, use a write-only endpoint | |

## Done

| Date | Item |
|------|------|
| 2026-07-17 | **Lead capture live**: /api/lead.php (server validation, honeypot, throttle) — emails info@mukeshart.in + JSONL log outside webroot; both forms wired. Endpoint verified 405/422/200. |
| 2026-07-16 | OG image created (was 404); schema fixed (Mukesh Art, real phone +91 98253 40818, valid logo); title template "| Mukesh Art"; contact email info@mukeshart.in everywhere |
| 2026-07-14 | **Hosting saga resolved**: mukeshart.in serves from `/home/u366143613/domains/mukeshart.in/public_html`; deploys via rsync-over-SSH GitHub Action (push -> live ~2 min). Root cause: main FTP account chrooted to sibling dir `~/public_html`, unreachable webroot. FTP-chroot junk cleaned via SSH Maintenance workflow. |
| 2026-07-10 | Phone validation (Indian mobile, shared util) on contact + unlock forms |
| 2026-07-10 | Night-theme brand logo plates fixed; group home v2 shipped |
| 2026-07-09 | Serif line-height floor; clip-path descender fix; hero gutters |
| 2026-07-09 | Netlify live; Media Group parent page; /airport/ sub-site; real inventory photos; Mukesh Art rename |
