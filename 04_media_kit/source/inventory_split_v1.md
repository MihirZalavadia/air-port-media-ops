# Inventory Split v1 — Rajkot Airport Media

> Groups every asset we actually have in `/04_media_kit/assets/` into 4 sellable categories.
> Each category = one card cluster on the website's Inventory section + one downloadable Gamma PDF.
> Pricing source: existing Mukesh ART proposal PDFs (verified 2026-05-17). `[TBC]` = ask Ridham before publishing.

---

## The 4-part split

| # | Category | What's in it | Units | Monthly (+GST) |
|---|----------|--------------|-------|----------------|
| 1 | **Digital Screen Network** | Packages 1, 2, 3 + all-digital bundle | 39 LED screens | ₹2L–₹4L per package · ₹9L bundle |
| 2 | **Landmark Outdoor Boards** | AD-2 to AD-6 frontlit boards (city side / approach) | 5 boards | AD-2: ₹6L · AD-3–6: [TBC] |
| 3 | **In-Terminal Backlit Boards** | Static backlits: Security Clearance, Laptop Workstation, AD-15 SHA | 3+ placements | AD-15: ₹1.5L · others [TBC] |
| 4 | **Hybrid Journey Plans** | Curated digital + static combos (launch / dominance plans) | mix | built from 1–3 |

---

## 1. Digital Screen Network

**Positioning:** "39 LED screens across the full passenger journey — 10-second slot, 2-minute loop."
Buyer: brands wanting motion creative, flexible scheduling, multiple creatives per slot.

| Plan | Units | Format | Zones | Monthly |
|------|-------|--------|-------|---------|
| Package 1 | 18 | 8'×3' horizontal LED | Arrival belts + SHA gates | ₹4,00,000 |
| Package 2 | 7 | 6× 8'×4' + 1× 8'×3' horizontal LED | Check-in, X-ray, mezzanine, arrival exit | ₹2,00,000 |
| Package 3 | 14 | 8× 75" + 6× 65" vertical LED | Check-in, SHA cafés/lounges, belts | ₹3,00,000 |
| **All-digital bundle** | **39** | all | full journey | **₹9,00,000** |

- Unit codes: P1 = AD_12/14/19–22/33–38 · P2 = AD_8/9/29–32/41 · P3 = AD_10/16/23/24/43–48
- Source assets: `Package - 1 (18 unit).pdf`, `Package-2 (7 UNIT).pdf`, `Package-3 14 UNIT.pdf`
- Deck outline already exists: `deck_a_digital_signage_v1.md` → **this becomes the Gamma PDF for category 1**

## 2. Landmark Outdoor Boards

**Positioning:** "Big-format frontlit boards at the airport approach — seen by every traveller, dropper, and taxi on the city side."
Buyer: real estate, jewellery, hospitals, auto — categories that buy landmark visibility.

| Board | Format | Location | Monthly |
|-------|--------|----------|---------|
| AD-2 | 30'×10' frontlit unipole | City side, main approach | ₹6,00,000 |
| AD-3 | frontlit board | [TBC from PDF] | [TBC] |
| AD-4 | frontlit board | [TBC from PDF] | [TBC] |
| AD-5 | frontlit board | [TBC from PDF] | [TBC] |
| AD-6 | frontlit board | [TBC from PDF] | [TBC] |

- Source assets: `AD-2 AIRPORT FRONT LIT BOARD.pdf` … `AD-6 AIRPORT  FRONT LIT BOARD.pdf`
- Gamma prompts already exist for AD-2 (`ad_2_*` prompt files) — extend the same template to AD-3–6.

## 3. In-Terminal Backlit Boards

**Positioning:** "Always-on static presence at the highest-dwell chokepoints — security clearance and work zones."
Buyer: brands wanting 24/7 unmissable presence without digital loop sharing; trust categories (BFSI, healthcare, education).

| Placement | Format | Location | Monthly |
|-----------|--------|----------|---------|
| Security Clearance backlit | static backlit | Security hold entry | [TBC] |
| Laptop Workstation backlit | static backlit | Work station zone | [TBC] |
| AD-15 | 8'×3' fabric backlit | SHA Ground Floor | ₹1,50,000 |

- Source assets: `STATIC BACKLIT SECURITY CLEARANCE.pdf`, `static backlit Laptop Work Station.pdf`
- Key sell: static = your creative is *always* visible, no 2-minute rotation.

## 4. Hybrid Journey Plans

**Positioning:** "One buy, whole airport — digital motion + static permanence bookending the passenger journey."
These are curated bundles, not new inventory. Draft plans (pricing = sum of parts until Mukesh sir approves bundle discounts):

| Plan (working name) | Composition | Indicative monthly |
|---------------------|-------------|--------------------|
| **Launch Plan** | Package 2 (bookend screens) + AD-15 backlit | ₹3,50,000 |
| **Dominance Plan** | All-digital bundle + AD-2 unipole | ₹15,00,000 |
| **Arrival Plan** | Package 1 + Security Clearance backlit | ₹4,00,000 + [TBC] |

- Bundle discount policy: **needs Mukesh sir's sign-off** before any hybrid price goes public. Until then, show "Talk to us for plan pricing" on the website instead of numbers.

---

## What each category needs before it goes live on the site

| Category | Gamma PDF | Status |
|----------|-----------|--------|
| 1. Digital Screen Network | Deck A (digital signage) | Outline ready → generate in Gamma |
| 2. Landmark Outdoor Boards | Deck B (frontlit boards) | AD-2 prompts exist; need AD-3–6 specs + rates from Ridham |
| 3. In-Terminal Backlit Boards | Deck C (backlit placements) | Need rates for 2 of 3 units |
| 4. Hybrid Journey Plans | Deck D (plans) | Blocked on bundle-discount decision |

## Website integration (next build step)

- Inventory section (`InventoryPackages.tsx`) → 4 category cards using this split (replaces the placeholder "Arrival + SHA Digital Loop" cards)
- Each card → category detail view: hero image, unit table, zone map, "Download plan PDF" button
- PDFs live in `/public/downloads/` as `mukesh_airport_media_<category>_v1.pdf` (exported from Gamma)
- Every page carries the master-deck trust block: 1.25–1.30 lakh monthly passenger visits · 28 daily movements · ASCO-certified ops · figures operator-confirmed

## Ask Ridham (blockers)

1. Rates + sizes + exact locations for AD-3, AD-4, AD-5, AD-6
2. Rates for Security Clearance backlit and Laptop Workstation backlit
3. Whether hybrid bundles get a discount vs sum-of-parts (Mukesh sir call)
4. Trolley advertising — no PDF exists in assets; is it sellable yet? If yes it becomes category 5 or folds into Hybrid.
