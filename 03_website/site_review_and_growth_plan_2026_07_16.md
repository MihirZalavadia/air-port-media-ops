# Deep Review — mukeshart.in (2026-07-16)

> Audit of the live site + roadmap for reach and CRM. Findings verified
> against the live pages and the codebase, not assumptions.

## A. What looks off right now

### Broken / wrong (fix this week)

| # | Finding | Impact | Fix effort |
|---|---------|--------|-----------|
| 1 | **OG image 404** — every page references `/images/og/rajkot-airport-media.jpg`, file doesn't exist. WhatsApp/LinkedIn shares show NO preview image — and WhatsApp is our main share channel | High | 30 min (design 1200×630 from brand assets) |
| 2 | **Schema has placeholder phone** `+91 XXXXXXXXXX` in JSON-LD (Google reads this as the business phone) + stale name "Rajkot Airport x Mukesh Art" + logo path `/images/logo.png` (404) | High for local SEO | 15 min |
| 3 | **Title template suffix** — every page gets "… \| Rajkot Airport Media" appended; wrong brand on `/` and `/publicity/` (e.g. "Mukesh Publicity \| Rajkot Airport Media") | Medium | 5 min |
| 4 | **seo.ts phone placeholder** — same +91 XXXX shows anywhere siteConfig.phone is used | Medium | 1 min once real number confirmed (use +91 98253 40818?) |
| 5 | **NAP inconsistency** — footer says Morbi address, schema says Rajkot. Google Business needs ONE canonical name-address-phone | Medium | decision needed (Morbi office vs Rajkot service area) |

### Gaps (not broken, but leaving money on the table)

| # | Finding | Impact |
|---|---------|--------|
| 6 | **No analytics at all** — zero visibility into visitors, sources, or which inventory gets attention. Can't measure "reach" without it | High — install GA4 (free) |
| 7 | **Lead forms save only to the visitor's browser** — a filled unlock/contact form is a lead we never see (contact form at least pushes to WhatsApp) | Highest business gap |
| 8 | **Plan PDFs missing** — 4 download slots wired but inert; the gate promises "plan PDF" and can't deliver | High for buyer trust |
| 9 | **Footer socials are `#`** — Instagram/Facebook/LinkedIn pages don't exist yet | Medium |
| 10 | Airport page HTML is ~250KB + 5.5MB hero video — heavy on mobile data; no video poster. Fine on WiFi, sluggish on 4G | Medium |
| 11 | Netlify mirror still auto-deploys (canonicals point to mukeshart.in so it's SEO-safe) — keep as free staging or disable | Low |
| 12 | Ridham's LinkedIn tile inert (waiting on his URL) | Low |

## B. Reach plan — how the site starts producing

### Now (this month, ₹0)
1. **Google Business Profile** — the single biggest lever for "rajkot airport advertising / outdoor media rajkot" searches (map pack ranks above organic). Follow `domain_gbp_setup_guide.md` Part E. Then 3–5 reviews from existing partners.
2. **Search Console** — verify domain, submit sitemap, request indexing of the 3 key pages.
3. **Fix items 1–5 above** — especially OG image (every WhatsApp share of the site currently looks naked) and schema phone.
4. **GA4** — free, one script tag; gives visitors/sources/page interest. Also track clicks on "Chat on WhatsApp" as conversions.
5. **Socials minimum viable**: LinkedIn company page + Instagram, footer links go real. Post the site-photo gallery content — the AD-2/terminal shots are genuinely good feed material.
6. **Citations**: Justdial, IndiaMart, Sulekha with identical NAP.

### Next (60–90 days, small budget)
7. **Content pages per keyword theme** — Google ranks pages, not sites: `/airport-advertising-rajkot/` FAQ-style page (what it costs, how booking works, who it suits), `/hoardings-rajkot/`. Reuses copy we already have; each internally linked.
8. **Case study after the first campaign win** — one page with real photos + (approved) client name; becomes THE trust asset and link magnet.
9. **Google Ads test** (₹3–5k/month): exact-match "airport advertising rajkot", "hoardings in rajkot" — tiny volume but pure intent; the lead math works at these ticket sizes.
10. **Backlink asks**: existing brand partners' vendor pages, Rajkot business associations, a press note about the airport tender to local news (Sandesh/Divya Bhaskar digital).

## C. CRM roadmap

### Phase 0 — stop losing leads (this month, ₹0)
Forms currently write to the visitor's own browser. Now that hosting has PHP:
- **Small PHP endpoint on Hostinger** (`/api/lead.php`): receives form POST → emails info@mukeshart.in + appends to a Google Sheet. Both forms point to it. Honeypot + server-side phone validation.
- Every lead then exists in 2 places (inbox + sheet) with timestamp, source page, and category interest. The sheet IS the interim CRM.

### Phase 1 — real pipeline (when leads flow, ~₹800–1,100/mo total)
- **Zoho Bigin** (~₹400/user/mo, 2 users: Mayur + Ridham) — pipeline-first CRM, WhatsApp integration, mobile app. Simpler than full Zoho CRM and 3× cheaper; clean upgrade path.
- Pipeline stages: `New enquiry → Qualified → Site visit → Proposal sent → Negotiation → Won / Lost`
- Web forms post directly to Bigin (web-to-lead), auto-assign to Mayur, auto-WhatsApp acknowledgment template.
- Weekly ritual: 30-min pipeline review with Mukesh sir (fits the 90-day plan cadence).

### Phase 2 — scale (aligned with 90-day plan)
- Upgrade to **Zoho CRM Standard** if workflows outgrow Bigin (quotes, GST invoicing via Zoho Books, campaign attribution).
- Lead source tracking: UTM tags on GBP link, ads, LinkedIn posts → CRM shows which channel pays.
- Inventory availability sheet (Airtable per original plan) linked from CRM deals — stops double-booking screens.

## Decisions needed from Mukesh sir / Ridham
1. Public phone number for schema/GBP — use +91 98253 40818 everywhere? 
2. One official address for NAP (Morbi office vs Rajkot service-area)
3. Go-ahead + budget nod for Bigin when Phase 1 triggers (>10 leads/month)
4. Social handles naming (mukeshartmedia? mukeshmediagroup?)
