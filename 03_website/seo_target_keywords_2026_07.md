# Target Search Keywords — master reference (2026-07-27)

Client-requested list of searches where mukeshart.in should appear.
**This is the single place to look — how it works, where each keyword
lives, and how to add new ones. No need to research this again.**

---

## 1. How "adding a search to Google" actually works

There is **no button anywhere** (Google, Search Console, GBP) to register
a keyword. Google decides rankings from signals we control:

| Signal | Where it lives | Who edits |
|---|---|---|
| Page titles + meta descriptions | `raamxmukeshart-main/src/lib/seo.ts` (`pageSeo`) + per-page `metadata` exports | Claude |
| Meta keywords list | `seo.ts` → `siteConfig.keywords` (Google mostly ignores this field, but it's free and Bing/others read it) | Claude |
| Structured data (schema.org) | `src/components/common/SeoSchema.tsx` — `alternateName`, `knowsAbout`, `serviceType` | Claude |
| Visible page copy + FAQ | `/airport/` hero, FAQ section (FAQPage schema) | Claude |
| Google Business Profile | Category, services, description, posts, reviews | Mihir/Ridham (guide: `google_setup_guide_2026_07.md`) |
| Reviews mentioning keywords | Partners writing "airport advertising Rajkot" in reviews | Ridham asks partners |
| Time + clicks | Google needs 2–8 weeks of the site being indexed and clicked | Nobody — patience |

**Realistic expectations by keyword type:**
- **Branded ("Mukeshart …")** — will rank #1 within days-to-weeks of
  indexing; nobody else competes for our name.
- **Local ("Rajkot/Hirasar airport …")** — very winnable; we are the
  actual concessionaire and almost nobody else targets these. Weeks.
- **Generic national ("airport advertising", "premium airport media")** —
  competing against TIMDAA, MyHoardings, national OOH agencies with
  years-old domains. Being on page 1 nationally is a long game; we WILL
  appear for these when searched *from Rajkot/Saurashtra* (Google
  localizes results), which is what matters for the client demo.

---

## 2. The client's requested list → status (2026-07-27)

All 27 phrases fall into 7 groups. ✅ = implemented in site code as of
today (meta keywords + schema; most also in titles/copy).

| Group | Phrases (advertisement / advertising / branding / media) | Status |
|---|---|---|
| Generic | Airport Advertisement, Advertising, Branding, Media | ✅ meta keywords; "Airport Branding" added to schema serviceType/knowsAbout; already in home title ("…Premium Airport Branding") |
| Rajkot Airport | all 4 | ✅ title tag, meta, schema, visible copy |
| Hirasar Airport | all 4 | ✅ meta keywords + schema knowsAbout; "Hirasar" already in FAQ/hero copy |
| Rajkot International Airport | all 4 | ✅ meta keywords + schema; also in GBP description draft |
| Premium Airport | all 4 | ✅ meta keywords; "Premium Airport Branding" in home title + schema |
| Mukeshart Hirasar Airport | all 4 | ✅ meta keywords + schema alternateName ("Mukeshart", "Mukeshart Hirasar Airport Media") |
| Mukeshart Rajkot Airport | all 4 | ✅ meta keywords + schema alternateName ("Mukeshart Rajkot Airport") |
| OOH / Mukesh Publicity (Rajkot–Morbi) | OOH marketing Rajkot/Morbi, outdoor advertising Morbi, hoardings Rajkot/Morbi, Mukesh Publicity Rajkot/Morbi, Mukeshart OOH marketing | ✅ added 2026-07-27: meta keywords, /publicity/ title+description ("Rajkot & Morbi"), schema areaServed Morbi |

Key detail: the client writes the brand as one word — **"Mukeshart"** —
which matches the domain. Added as schema `alternateName` so Google
connects that spelling to the business entity.

**Remaining lever (not code): Google Business Profile** — once live, the
GBP category/services/description carry these same phrases into Maps and
the local pack. See §4.

---

## 3. Recipe: adding NEW keywords in future (the 10-minute loop)

When the client sends more phrases:

1. **Meta list:** append to `siteConfig.keywords` in
   `raamxmukeshart-main/src/lib/seo.ts` (keep the dated comment style).
2. **Schema:** if it's a *service* → `serviceType` in `SeoSchema.tsx`;
   a *topic* → `knowsAbout`; a *brand-name variant* → `alternateName`.
3. **Visible copy (the one Google actually weighs most):** if the phrase
   isn't already on a page, add one FAQ entry on `/airport/` that uses it
   naturally ("Do you offer airport branding at Hirasar Airport?…").
   Titles only change for genuinely new themes — don't stuff.
4. **GBP:** add it as a Service on the profile + mention it in the next
   monthly post.
5. Commit + push → auto-deploys. Then GSC → URL Inspection → Request
   indexing for the changed page.
6. **Verify after ~1 week:** GSC → Performance → Queries — the phrase
   appears once Google shows the site for it (impressions ≥ 1).

---

## 4. Where keywords go in Google Business Profile

GBP has **no keyword field**. The phrases enter Google via:
- **Business name:** plain "Mukesh Art" ONLY (keyword-stuffed names get
  suspended — Google policy).
- **Categories:** Advertising agency (primary), Media company (secondary).
- **Services:** add each as a service — Airport advertising · Airport
  branding · Airport trolley branding · Digital screen advertising ·
  Backlit board advertising · Outdoor hoardings & unipoles · Media
  planning.
- **Description:** naturally weave "Rajkot International Airport
  (Hirasar)", "airport advertising", "airport branding".
- **Posts:** monthly post using one target phrase each time.
- **Reviews:** partners naturally mentioning "airport advertising Rajkot".

Full click-by-click setup: `google_setup_guide_2026_07.md` → Guide 2.
Google account: **art.mayurpatel@gmail.com** (client's, owns GSC too).

---

## 5. How to check it's working (monthly, 5 min)

1. **GSC → Performance → Queries** — real searches we appeared for, with
   position. This is the truth, not manual Googling.
2. Manual spot-check: search from an **incognito window** (logged-in
   results are personalized and will lie to you).
3. Branded terms not showing after 2 weeks → re-request indexing in GSC.
