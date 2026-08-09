# Page-1 Action Plan — client keyword ask (2026-08-09)

Client wants mukeshart.in on **page 1** for: rajkot marketing · rajkot
airport media/marketing · gujarat marketing · airport marketing.
Incognito currently shows nothing for these. This file is the honest
tiering + the exact steps, in priority order.

Companion doc: `seo_target_keywords_2026_07.md` (how keywords work, the
10-min code recipe). This file is the *campaign*; that file is the *manual*.

---

## 1. Honest tiering — what "page 1" can mean, and when

| Keyword | Winnable? | How | Timeline |
|---|---|---|---|
| Rajkot airport marketing / media / advertising | ✅ Yes | Organic + GBP local pack. We're the actual concessionaire; almost no one competes. Ranked briefly in July (new-site boost), lost in the early-Aug Google flux. Will return and stick once off-page signals land. | 2–6 weeks |
| Rajkot marketing | 🟡 Partly | **Local pack, not organic.** Competing with every digital-marketing agency in Rajkot for the organic slots. But the map pack sits at the top of page 1 for this search from Rajkot — a complete, reviewed GBP puts us there (verified ✓ 2026-08-09; Morbi address is a handicap for Rajkot-city searches, see Step 1). | 4–8 weeks (after profile completion + reviews) |
| Airport marketing (generic) | 🟡 Localized only | From Rajkot/Saurashtra, Google localizes → we can appear. Nationally we're against TIMDAA, MyHoardings, Khushi etc. with decade-old domains. The tender's own name — "Airport Marketing & Visitor Management" — belongs in our copy verbatim; it's our most legitimate claim to this phrase. | Localized: weeks. National: 6–12 months |
| Gujarat marketing | 🔴 Not realistic | Statewide generic query with **intent mismatch** — searchers want general marketing agencies, so Google won't surface an airport-media site regardless of our SEO. Set this expectation with the client directly; chasing it wastes effort better spent on the winnable three. | — |

**How to frame it for Mukesh sir:** "Anyone who searches anything with
*airport* + *Rajkot/Hirasar* finds us — that's every buyer who matters.
For broad words like 'Gujarat marketing', we appear on the map instead,
which sits above the regular results." Demo on a phone, in Rajkot,
searching the airport phrases — not 'gujarat marketing' on a desktop.

---

## 2. The steps, in priority order

### Step 1 — Complete the GBP profile (Ridham/Mihir, this week)
**UPDATE 2026-08-09: profile is already VERIFIED ✓** — live knowledge
panel, "You manage this Business Profile", public metrics, no verify
prompt (confirmed via screenshot). Video verification is no longer
needed. What remains is **completeness** — Google shows "Complete your
profile" with a partial strength ring, and complete profiles rank far
better in the map pack:
- **Services:** airport marketing · airport advertising · airport
  branding · trolley branding · digital screen advertising · backlit
  boards · outdoor hoardings & unipoles · media planning.
- **Description** mentioning "Rajkot International Airport (Hirasar)"
  and "airport marketing" naturally.
- **Photos:** real board/screen shots from the Aug Hirasar shoot
  (owner-footage rule satisfied).
- **WhatsApp chat button** (Google is prompting for it), hours, first post.
- Account: art.mayurpatel@gmail.com. Guide: `google_setup_guide_2026_07.md`.

⚠️ **Address nuance to raise with the client:** the profile is anchored
at Jambudiya, **Morbi** (shows "Advertising agency in Jambudiya,
Gujarat"). Proximity is a top-3 local ranking factor, so the Rajkot map
pack will favor Rajkot-addressed competitors. The service area covering
Rajkot helps, but if the company has a *real* office in Rajkot or at
the airport, using that address would materially improve
"rajkot marketing"-type map results. Never fake an address —
suspension risk. → Ask Mukesh sir/Ridham.

### Step 2 — On-page "marketing" pass (Claude, 30 min + deploy)
The site copy says *advertising / media / branding* everywhere but the
client's searches say **marketing** — the word barely exists in visible
copy. Per the recipe in the companion doc:
- `seo.ts` keywords: append "Rajkot marketing", "Gujarat airport
  marketing", "airport marketing company Gujarat", "airport marketing
  Rajkot", "Hirasar airport marketing".
- **Visible copy (weighs most):** 2 new FAQ entries on `/airport/` using
  "airport marketing" and "Rajkot airport marketing" naturally. Work the
  literal tender phrase in: *"official Airport Marketing concession at
  Rajkot International Airport (Hirasar), in partnership with AAI"*.
- Home title: consider "Rajkot Airport Marketing & Advertising | Mukesh
  Art" — one natural use, no stuffing.
- Schema: "Airport Marketing" → serviceType; "Gujarat" already in
  areaServed via address — verify.
- Deploy → GSC → request re-indexing for / and /airport/.

### Step 3 — Directory piggyback (Ridham, 1–2 hrs total)
For broad terms, directories ALREADY hold the page-1 organic slots.
Being listed inside them = being on page 1 without outranking anyone:
- **Sulekha** — ranks page 1 for "rajkot airport advertising" today. Free listing.
- **JustDial** — dominates "rajkot marketing"-type queries.
- **IndiaMART** — B2B buyers search here directly.
- Use identical Name/Address/Phone as GBP (NAP consistency), link to
  mukeshart.in (each is also a backlink — our domain currently has ~zero).

### Step 4 — Reviews with keywords (Ridham, can start NOW)
Profile is live, so this is unblocked: ask 5–10 friendly partners for
Google reviews that naturally mention "airport advertising in Rajkot" /
"airport marketing".
Reviews + keywords in reviews are a top-3 local-pack ranking factor.
Never scripted/fake — real clients, nudged wording only.

### Step 5 — One earned press mention (Mihir drafts, Ridham sends)
Media4Growth covers OOH contract news (they covered the *previous*
Rajkot airport rights holder). "Mukesh Art operating media at Rajkot
International Airport" is legitimately newsworthy. One published story =
authoritative backlink + brand-name association with "airport" +
"Rajkot" in Google's entity graph. Also: ask 2–3 of the 29 partners to
add a "Media partner: Mukesh Art, Rajkot Airport" link on their sites.

### Steps 6–10 — Brand entity building (added 2026-08-09, client-shareable)
Instagram business account linked from GBP's Social-profiles field,
monthly GBP photos, "Add missing information" completion, LinkedIn
company page. Full client-facing wording in `seo_client_update_2026_08.md`
§ "Recommended next". Rationale: entity signals + branded search volume
(which is also the only honest route into Google's autocomplete
suggestions).

### Website performance (from PSI/Lighthouse audit 2026-08-09)
Lighthouse on the local build (live blocked by Hostinger bot-wall;
PSI-equivalent): desktop perf 79, **mobile perf 38** — SEO 100, BP 96,
a11y 94. Page weight 7.7MB. Ranked fixes:
1. **Both hero films download regardless of theme** — hero_night.mp4
   (1.9MB) + hero_media.mp4 (1.8MB) both load; only the active theme's
   film should (preload=none / mount-on-theme). Biggest single win.
2. **Below-fold images not lazy** — ~25 × ~0.2MB webps load upfront;
   add loading="lazy" outside the hero. Mobile LCP 13.2s → target <2.5s.
3. **No .htaccess cache headers** — /_next/static/* is content-hashed,
   safe for `immutable, max-age=1yr`; videos/images long-cache too.
4. Minor: heading-order, label/name mismatch (a11y); maximum-scale=1.3
   flagged by a11y audit but is a deliberate mobile-polish choice
   (ZoomLock) — leave unless client complains.
Status: NOT yet implemented — needs a careful pass respecting the
theme-swap film conventions in [[site-video-film-layer]].

### Ongoing — Measure (monthly, 5 min)
GSC → Performance → Queries is the truth, not manual Googling.
Aug 11 check as planned: impressions per phrase + average position.
Screenshot monthly → becomes the progress artifact for Mukesh sir.

---

## 3. What NOT to do
- ❌ Keyword-stuff the GBP business name ("Mukesh Art Airport Marketing
  Rajkot") — suspension risk, Google policy.
- ❌ Buy backlink packages / Fiverr SEO — new domain + spam links =
  penalty risk exactly when we're being re-evaluated.
- ❌ Rewrite site copy weekly chasing rankings — Google needs stable
  signals; one good pass, then patience.
- ❌ Promise the client "gujarat marketing page 1" — intent mismatch
  makes it unwinnable; reframe instead (see §1).

## Sequence summary
Week 1: GBP completion — services/description/photos/WhatsApp (Ridham)
+ marketing copy pass (Claude — ✅ shipped 2026-08-09, deployed green)
+ GSC re-index request + first review asks (unblocked, profile verified).
Week 2: Sulekha/JustDial/IndiaMART listings.
Week 3–4: Media4Growth pitch + partner backlinks.
Aug 11 + monthly: GSC query report.
