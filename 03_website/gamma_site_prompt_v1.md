# Gamma Site Prompt — Rajkot Airport × Mukesh Arts (v1)

> **Status 2026-05-24:** Reference only. This v1 prompt over-weights Mukesh Arts in the public wordmark. For new website work, use `airport_site_scope_v2.md` and keep Mukesh Arts as operator credibility rather than the primary commercial brand.

> **Purpose:** Paste-ready, section-by-section prompt for Gamma's "Generate a website" flow. Optimised for Gamma's card-stack site builder (each `SECTION` block = one Gamma site card). Built on confirmed inventory pricing (see `/memory/inventory_pricing.md`) and the working co-brand wordmark (see `/memory/brand_name.md`).
>
> **How to use in Gamma:**
> 1. New → Generate → Website → "Generate from text"
> 2. Paste the GLOBAL DIRECTION block first, then all SECTION blocks together in one shot
> 3. After generation, lock the color palette and font pair before iterating
> 4. Use the Edit-with-AI on individual cards to tighten any section that flattens out
>
> **Source-of-truth rules:**
> - Pricing numbers below are real (per inventory_pricing.md). Do not let Gamma round, average, or invent.
> - Audience stats marked `[TBC]` need Mukesh sir / Ridham confirmation before going live.
> - Wordmark on every section footer: `RAJKOT AIRPORT × MUKESH ARTS`

---

## GLOBAL DIRECTION (paste this at the top of the Gamma prompt)

```
Build a single-page B2B marketing website for an airport advertising operator at Rajkot
International Airport, India. Audience: brand managers, marketing heads, and OOH media
planners at Indian advertisers and agencies. The site exists to (1) establish credibility,
(2) showcase inventory and pricing transparently, and (3) capture qualified inbound leads.

VOICE: Authoritative but not arrogant. Boutique airport media operator, not "India's
leading". Practical, ROI-focused, visual-first. Local pride (Saurashtra/Gujarat roots)
with national ambition. Never use "we are the best" claims without specifics.

DESIGN SYSTEM:
- Palette: Deep navy #0B1F3A (background), Warm gold #C9A24B (accent), Ivory #F5F1E8
  (primary text), Slate #6B7A8F (secondary text), Signal red #D94F4F (CTAs only)
- Type pair: Editorial serif for headlines (e.g. Fraunces, Tiempos, or Canela);
  geometric sans for body (e.g. Inter, Söhne, or Geist)
- Layout: Editorial. Generous whitespace. Full-bleed photography. Large numbers as
  hero typography on stats and pricing. No gradient blobs, no 3D illustrations, no
  rounded-cartoon icons.
- Photography rules: Architectural interiors, signage close-ups, aviation, terminal
  detail, golden-hour exteriors. NEVER stock photos of laughing business people,
  handshake clichés, or generic "team smiling at laptop" imagery.
- Components style: Sharp-corner cards (max 4px radius), thin 1px gold dividers,
  uppercase tracking-wide eyebrows above headlines, monospaced tags for inventory codes.

GLOBAL WORDMARK on header and footer: RAJKOT AIRPORT × MUKESH ARTS
GLOBAL CTA visible in header on scroll: "Request Rate Card"
PRIMARY CONVERSION GOAL: Form fill on Section 11 (Contact)
```

---

## SECTION 1 — HERO

```
Layout: Full-viewport hero. Left 55% = type stack. Right 45% = full-bleed photo
(suggested: HIRASAR terminal exterior at dusk, or arrival corridor LED wall lit).

Eyebrow (uppercase, tracking-wide, gold): RAJKOT INTERNATIONAL · AAI PARTNER
H1 (serif, oversized, 64–80px): "Saurashtra's only premium gateway. Now your most premium media buy."
Subhead (sans, 18–20px, 2 lines max): "70+ digital and static surfaces across India's newest
international airport. Captive audiences. Transparent pricing. No agency markup."

Primary CTA: "Request Rate Card" (filled gold button)
Secondary CTA: "View Inventory" (ghost button, ivory border)

Trust strip below CTAs (small, slate text, comma-separated):
"AAI Partner · ASCO-Certified Operations · GST-Compliant Invoicing"
```

---

## SECTION 2 — THE GATEWAY (Stat Strip)

```
Layout: Horizontal 4-tile stat strip on navy background. Each tile = oversized number
in gold serif + label in ivory sans below. Thin gold divider between tiles.

Section eyebrow: THE GATEWAY

Tile 1: "2023" / Operational since
Tile 2: "2.5M+" [TBC] / Annual passenger throughput
Tile 3: "45–90 min" / Average dwell time per passenger
Tile 4: "1 of 1" / International airport in Saurashtra region

Caption below strip (slate, 14px, italic):
"Operated in partnership with the Airports Authority of India under a Year-1 concession.
Audience figures sourced from airport-internal reporting; full methodology in media kit."
```

---

## SECTION 3 — WHY AIRPORT OOH (3-Column Comparison)

```
Layout: 3 equal columns on ivory background. Each column = large numeral (01/02/03) in
gold, headline in serif, 2-sentence body in sans. Thin gold vertical dividers.

Section eyebrow: WHY AIRPORT MEDIA OUTPERFORMS
Section H2: "Three reasons buyers move budget from roadside to runway."

Column 01 — CAPTIVE ATTENTION
"No scroll. No skip. No ad-blocker. Every surface is seen by every passenger walking past it —
a guarantee no digital or roadside format can match."

Column 02 — PREMIUM DWELL
"45–90 minutes of unhurried attention versus 4 seconds at a traffic-light billboard. Long
enough to communicate proposition, not just brand recall."

Column 03 — HALO EFFECT
"Airports signal scale. A brand visible at an international terminal is read as a brand
that has arrived — by consumers, partners, and even your own sales team."
```

---

## SECTION 4 — OUR FOOTPRINT (Map / Floorplan)

```
Layout: Full-width section, navy background. Left 60% = isometric or floor-plan
illustration of Rajkot terminal with 5 numbered zone callouts pinned. Right 40% =
text stack listing the zones with brief inventory counts.

Section eyebrow: OUR FOOTPRINT
Section H2: "End-to-end journey coverage. Arrival to runway, runway to belt."

Right-side zone list (each row: zone name in serif + count in mono):
- Arrival Hall — 12 digital + 3 static surfaces
- Security Hold Area (SHA) — 18 digital surfaces
- Departure Check-in — 6 digital surfaces
- Baggage Belt — 8 digital surfaces
- City-Side Approach — 1 premium unipole

Bottom caption: "10–15 sites · 70+ surfaces · Digital LED, premium static, trolley media."
```

---

## SECTION 5 — INVENTORY OVERVIEW (Tabbed Table)

```
Layout: Ivory background. Tabbed interface with three tabs: DIGITAL · STATIC · TROLLEY.
Default tab = DIGITAL. Each tab reveals a clean table.

Section eyebrow: THE INVENTORY
Section H2: "39 LED surfaces. 2 premium static. One captive corridor."
Subhead: "Pricing is published. No markups, no opacity."

DIGITAL tab table (4 columns: Package, Surfaces, Location Summary, Rate / month):
- Package 1 | 18 × 8'×3' Horizontal LED | Arrival Hall + SHA | ₹4,00,000
- Package 2 | 6 × 8'×4' + 1 × 8'×3' Horizontal LED | Security + Arrival GF | ₹2,00,000
- Package 3 | 8 × 75" + 6 × 65" Vertical LED | Departure + SHA | ₹3,00,000
- ALL-DIGITAL BUNDLE | P1 + P2 + P3 (39 surfaces) | Full journey | ₹9,00,000

STATIC tab table:
- AD-2 | 1 × 30'×10' Frontlit Unipole | City-Side Approach | ₹6,00,000
- AD-15 | 1 × 8'×3' Fabric Backlit | SHA Ground Floor | ₹1,50,000

TROLLEY tab: Placeholder card — "Trolley media inventory and rate card in production.
Speak to us for early-bird Q3 2026 access."

Footnote across all tabs (slate, small): "All rates monthly, exclusive of 18% GST.
Advance payment. 10-second creative slot, repeats every 2 minutes on 18-unit synchronised loop."
```

---

## SECTION 6 — FEATURED PACKAGE: P1 (Editorial Case Card)

```
Layout: Magazine-style split. Left 50% = full-bleed photograph of an arrival LED wall lit
at night. Right 50% = white card with structured spec block.

Section eyebrow: PACKAGE 1 / FLAGSHIP
H2: "Arrival corridor takeover. 18 surfaces. One loop."

Card content (right side):
- Format: 8'×3' Horizontal LED
- Count: 18 surfaces
- Placement: 12 in Arrival Hall, 6 in Security Hold Area
- Inventory codes (in mono, comma-separated): AD-12, AD-14, AD-19, AD-20, AD-21, AD-22, AD-33, AD-34, AD-35, AD-36, AD-37, AD-38
- Loop: 10s creative, 2-min rotation
- Rate (large gold serif): ₹4,00,000 / month + GST

CTA at base of card: "Reserve Package 1" (filled gold button)
```

---

## SECTION 7 — FEATURED PACKAGE: P3 (Mirror layout, alternate package)

```
Layout: Mirror of Section 6 — Right 50% photo (vertical LED at departure check-in or
SHA lounge), Left 50% spec card.

Section eyebrow: PACKAGE 3 / VERTICAL
H2: "Departure and lounge dwell. 14 vertical screens."

Card content:
- Format: 75" + 65" Vertical LED
- Count: 14 surfaces (8 × 75", 6 × 65")
- Placement: Departure Check-in, SHA escalator, Jet Set Café, Synergy Lounge, gates, belt
- Inventory codes: AD-10, AD-16, AD-23, AD-24, AD-43, AD-44, AD-45, AD-46, AD-47, AD-48
- Rate (large gold serif): ₹3,00,000 / month + GST

CTA: "Reserve Package 3"

(Note: Skip P2 and Static slides on website — they live in the downloadable media kit
PDF, not the public site. Site shows hero packages only; full inventory is in the PDF.)
```

---

## SECTION 8 — THE TAKEOVER (Hero Pricing Block)

```
Layout: Full-width, navy background. Single hero pricing tile centered. Massive type.
No photo. White space carries the weight.

Section eyebrow: ALL-DIGITAL BUNDLE
H2 (small, above hero number): "When you want the whole airport."

Hero pricing (centered, gold serif, 120px+):
"₹9,00,000"
Subline (ivory sans, 20px): "per month + GST"

Below hero (slate, 16px, 3 lines):
"Package 1 + Package 2 + Package 3. 39 LED surfaces. Arrival, security, departure,
lounge, belt. Built for category launches, brand takeovers, and Diwali / wedding-season
peaks."

Dual CTA: "Reserve Bundle" (gold filled) · "Talk to Sales" (ghost ivory)
```

---

## SECTION 9 — AUDIENCE INTELLIGENCE (Two-Column Editorial)

```
Layout: Ivory background. Two-column editorial — Left 40% = serif H2 + lead paragraph,
Right 60% = bulleted audience profile cards (3 stacked).

Section eyebrow: WHO YOU REACH
H2: "Not a passenger count. A demographic moat."

Lead paragraph (left):
"Rajkot is the gateway to Saurashtra — a region with one of India's deepest NRI
corridors, a concentration of family-owned business wealth, and a leisure flow tied
to Gujarat's cultural calendar. The audience is not generic 'flyer'. It is specific,
spendy, and unreachable through digital alone."

Right-side audience cards (each card: type, % share [TBC], 2-sentence description):

CARD 1 — NRI CORRIDOR FLYERS · [TBC]% share
"Returnees from the UK, US, and Gulf. Premium auto, real estate, jewellery, and
financial services convert hardest here. They are visiting family — emotionally
primed, time-rich, and price-insensitive."

CARD 2 — SAURASHTRA HNI BUSINESS TRAVEL · [TBC]% share
"Family-business owners and senior management from Rajkot, Jamnagar, Bhuj, and
Junagadh corridors. Decision-makers for B2B categories — industrial, fintech,
commercial real estate."

CARD 3 — LEISURE & FESTIVAL FLOW · [TBC]% share
"Spikes around Diwali, Navratri, and wedding season. High-volume, high-mood states —
ideal for consumer launches and seasonal category pushes."

Footnote: "[TBC] markers will be replaced with airport-verified figures in the
downloadable media kit."
```

---

## SECTION 10 — WHY US (3 Trust Pillars)

```
Layout: Navy background. 3 horizontal pillars, each = gold icon (line-art, single-weight)
+ serif headline + 2-sentence body.

Section eyebrow: WHY WORK WITH US
H2: "Built on partnership. Run with compliance. Sold by people who know the corridor."

PILLAR 1 — AAI PARTNERSHIP
"We hold the official Airport Marketing & Visitor Management concession at Rajkot
International, in partnership with the Airports Authority of India. Every surface
is permitted, audited, and revenue-shared with the airport."

PILLAR 2 — ASCO-CERTIFIED COMPLIANCE
"Our operations are led by an Airport Security Compliance Officer (ASCO-certified)
with on-site presence. Creative approvals, installation safety, and airport-protocol
compliance are handled in-house, not outsourced."

PILLAR 3 — SAURASHTRA SPECIALISTS
"Two decades of local OOH experience in the region. We know which categories work,
which months matter, and which placements convert — because we built the inventory
from scratch."
```

---

## SECTION 11 — CONTACT / LEAD CAPTURE

```
Layout: Two-column, ivory background. Left 50% = headline + supporting copy + direct
contact details. Right 50% = lead form in white card.

Section eyebrow: NEXT STEPS
H2 (serif, 48px): "Tell us what you're launching. We'll send a rate card within 24 hours."
Subhead: "No discovery-call gauntlet. Real pricing, real availability, real timeline."

Left-side direct contact block:
- Mukesh [Surname TBC] — Managing Partner
- Ridham Bhuva — Partner & Operations (ASCO-certified)
- partnerships@[brand].in
- +91-XXXXXXXXXX (Ridham, WhatsApp)
- Rajkot International Airport, Hirasar, Gujarat

Form fields (right-side card):
- Full Name (required)
- Brand / Company (required)
- Role (dropdown: Brand Manager / Media Planner / Agency / Other)
- Email (required)
- Phone / WhatsApp
- Campaign window (dropdown: Within 30 days / 30–90 days / 90+ days / Exploring)
- Budget range (dropdown: <₹2L/mo · ₹2–5L · ₹5–10L · ₹10L+ · Bundle)
- Message (optional, 3-line textarea)
- Submit CTA: "Request Rate Card" (filled gold, full-width button)

Form micro-copy below submit: "We respond within 1 working day. Your details are not
sold or shared. No automated drip campaigns."
```

---

## SECTION 12 — FOOTER

```
Layout: Slim 3-column footer on darkest navy (#070F1F). Top thin gold divider.

Column 1 — WORDMARK + tagline:
"RAJKOT AIRPORT × MUKESH ARTS"
"India's boutique airport media operator. Building the multi-airport playbook from Saurashtra outward."

Column 2 — SITE NAV:
- Inventory · Pricing · Why Us · Media Kit (PDF download) · Contact

Column 3 — TRUST + LEGAL:
- AAI Partner · ASCO Certified · GST-Compliant
- © 2026 [Legal Entity Name TBC] · CIN [TBC] · GST [TBC]
- Privacy · Terms

Footer base line: "Built for the next decade of Indian airport media."
```

---

## POST-GENERATION CHECKLIST (Run after Gamma spits the first draft)

- [ ] Verify all 6 pricing numbers match inventory_pricing.md verbatim (no rounding)
- [ ] Replace every `[TBC]` with confirmed figure or remove the claim
- [ ] Swap any generic Gamma stock photos for real shots from /04_media_kit/assets/
- [ ] Lock palette (#0B1F3A / #C9A24B / #F5F1E8) in Gamma theme settings
- [ ] Lock font pair before iterating any section
- [ ] Test mobile preview — pricing tiles must not wrap mid-number
- [ ] Confirm sticky-header CTA "Request Rate Card" scrolls to Section 11 form
- [ ] Add favicon (mini wordmark mark) and Open Graph image (Section 1 hero crop)
- [ ] Connect form to a real inbox or Zoho CRM webhook before publishing

---

## ITERATION PROMPTS (paste into Gamma's per-card Edit-with-AI when a section flattens)

- "Increase typographic hierarchy — make the H2 50% larger, reduce body to 16px."
- "This section feels like a generic SaaS card. Make it feel editorial — single column, full-bleed photo, magazine-style."
- "Replace the icons with thin single-weight line icons in gold #C9A24B only. No filled shapes."
- "The numbers are too small — make the price/stat the loudest element on the slide, larger than the headline."
- "Remove all 'we are passionate / committed / trusted' language. Replace with specific verifiable claims."
```
