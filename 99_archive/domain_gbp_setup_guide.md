# Domain + Google Business Setup — mukeshart.com

> SUPERSEDED 2026-07-23 for the Google steps: domain ended up as
> **mukeshart.in on Hostinger** (not .com/Netlify). Use
> google_setup_guide_2026_07.md for Search Console + Business Profile.

> Written 2026-07-11. Target structure (already how the site is built):
> `mukeshart.com` → Mukesh Media Group home · `/airport/` → airport site · `/publicity/` → outdoor site

## Part A — Buy the domain (15 min, ~₹900–1,500/yr)

1. Check availability first: mukeshart.com may be taken — verify at the registrar.
   Fallbacks in order of preference: `mukeshart.in`, `mukeshartmedia.com`, `mukeshmediagroup.com`.
2. Buy at any of: Hostinger / GoDaddy India / Namecheap / Cloudflare (₹ billing, GST invoice available on Hostinger & GoDaddy).
3. Turn ON: auto-renew, WHOIS privacy. Nothing else — no hosting add-ons (Netlify hosts us free).

## Part B — Connect to Netlify (20 min)

1. Netlify → your site → **Domain management** → **Add a domain** → enter `mukeshart.com`.
2. Choose ONE of:
   - **Easiest:** "Use Netlify DNS" → Netlify shows 4 nameservers → paste them into the registrar's nameserver settings. Everything else is automatic.
   - Manual: at the registrar add `A @ 75.2.60.5` and `CNAME www <site-name>.netlify.app`.
3. Wait for DNS to propagate (minutes–24h). Netlify auto-issues the HTTPS certificate.
4. In Netlify: enable **Force HTTPS** and set `mukeshart.com` as the primary domain (www redirects to it).

## Part C — Code updates after DNS is live (I do this, 5 min)

1. `siteConfig.url` → `https://mukeshart.com` (fixes sitemap + canonicals + OG URLs).
2. Retire the GitHub Pages mirror (delete `deploy-pages.yml`) so Google sees exactly one site.
3. Push → Netlify redeploys.

## Part D — Google Search Console (15 min, needs the domain live)

1. search.google.com/search-console → **Add property** → type "Domain" → `mukeshart.com`.
2. Verify via DNS TXT record (Netlify DNS → add record; registrar DNS → same).
3. **Sitemaps** → submit `https://mukeshart.com/sitemap.xml`.
4. Request indexing for `/`, `/airport/`, `/publicity/`.

## Part E — Google Business Profile (1 hour + verification wait)

1. business.google.com → **Add business** → name: **"Mukesh Art — Media & Advertising"**
   (use the real, established business name — GBP rules require the actual name; divisions go in services/description, not the title).
2. Category: **Advertising agency** (primary). Secondary: Media company, Sign shop (fits Mukesh Art heritage).
3. Address: the real office (Morbi address from the footer) — customers-visit ON only if true; otherwise set as **service-area business** covering Rajkot, Morbi, Saurashtra.
4. Phone: +91 98253 40818 · Website: `https://mukeshart.com`.
5. Verify (postcard/phone/video — whatever Google offers).
6. After verification, fill EVERYTHING:
   - Services: Airport advertising, Outdoor hoardings, Billboard advertising, Digital screen advertising, Terminal branding.
   - Description: use the group hero copy (Brand Beyond Boundaries paragraph).
   - Photos: 10+ real site photos from `/updated images/` (boards, screens, airport).
   - Link `/airport/` and `/publicity/` in Products/Posts.
7. Ask 3–5 happy existing partners for Google reviews mentioning "airport advertising Rajkot" naturally. Reviews are the #1 local ranking lever.

## Part F — Citations (spread over a week)

Same Name-Address-Phone everywhere: Justdial, IndiaMart, Sulekha, Bing Places.

## Domain-name recommendation

**mukeshart.com is a good primary** — it's the established legal/local business name, matches invoices and citations (NAP consistency), and the site structure already mirrors it (`/airport/`, `/publicity/`). Trade-off: the umbrella brand is "Mukesh Media Group", so if the group identity becomes the public face later, `mukeshmediagroup.com` would fit better. Practical answer: **buy both** (₹1,800/yr total), make mukeshart.com primary, redirect mukeshmediagroup.com to it. Skip exact-match keyword domains (rajkotoutdoormedia.com etc.) — near-zero SEO value now; content + GBP do that work.

⚠️ Spelling check before purchase: it's mukesh**art**.com — confirm with Mukesh sir whether he wants `mukeshart.com` or `mukesh-art.com`; unhyphenated is standard.
