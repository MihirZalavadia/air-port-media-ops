# Rajkot Airport × Mukesh Arts — Design System

A premium, B2B out-of-home (OOH) airport-media design system. It powers the public sales website, media kits, and pitch decks for **airport advertising inventory at Rajkot International Airport**, operated by **Mukesh Arts**.

The target feeling is closer to a polished media-owner brand (think the editorial confidence of a JCDecaux property page) with direct regional credibility — premium, modern, corporate, high-trust, visually rich. **Not** generic SaaS, not playful, no blobs or cartoon illustrations.

---

## What this brand is

Mukesh Arts is a Gujarat-based out-of-home advertising operator. As the airport-media partner at **Rajkot International Airport**, it sells advertising inventory across the terminal: digital LED loops, vertical display networks, large-format front-lit boards, and backlit media positioned along the passenger journey.

The website's job is to make airport media feel like **a body of work, not a price sheet** — to qualify serious advertisers, show range and credibility publicly, and gate full inventory depth + commercials behind a short lead form.

Core public name: **Rajkot International Airport × Mukesh Arts.**
Operational media location: **Rajkot International Airport.**
Main office: **Mukesh Art Main Office — PLOT NO. 71, SURVEY NO. 145, JAMBUDIYA, Morbi, Gujarat - 363642.**

> Naming rule: always write **"Rajkot International Airport"** in full. Never "Rajkot Airport" or "Rajkot Air Port" on its own.

---

## Sources used to build this system

This system was reverse-engineered from the client's working repository. If you have access, explore these to design with higher fidelity:

- **GitHub:** `https://github.com/MihirZalavadia/air-port-media-ops`
  - `03_website/growth_os_demo/` — the live Next.js sales-site demo. The visual language here is the source of truth:
    - `app/globals.css` — the full token + component stylesheet (palettes, hero, portfolio cards, toggles, footer).
    - `components/Shell.tsx` — the single-page site structure (nav → hero → manifesto → why → identity → inventory → range → team → CRM → contact → footer) and the inline Mukesh Arts brand mark SVG.
    - `lib/data.ts` — palettes, inventory items, airport stats, POCs, taglines.
    - `public/img/*.png` — real on-site airport-media photography (heroes + inventory).
  - `02_brand/style_guide/visual_spec_v1.md` — the original brand spec (note: it references a Midnight-Blue/Saffron deck palette; the **live web product diverged** to the Mukesh Arts red + blue / red + sky palettes documented here — follow the web tokens).
- **PDF:** `Hirasar_July 2023_0.pdf` — airport context reference (Rajkot's Hirasar terminal).

The system in *this* project reflects the **shipped web palette and tone**, plus the redesign direction requested by the client (full "Rajkot International Airport" naming, Connectivity + Client Trust sections, refined inventory tabs, corrected POC roles, updated office address).

---

## CONTENT FUNDAMENTALS

How copy is written across the brand.

**Voice.** Confident, consultative, regionally grounded. We are the operator who knows the terminal and the buyer — never boastful. We earn trust by being specific, not by claiming to be "India's leading" anything.

**Person.** Mostly **we / our** for the operator ("We treat airport media as a portfolio"), and **you / your** for the advertiser ("the campaign window you can defend internally"). Avoid first-person singular.

**Casing.**
- Display headlines: **sentence case**, with one *italic emphasised phrase* set in the serif ("Airport visibility, *engineered.*").
- Eyebrows, labels, codes, buttons, footer meta: **UPPERCASE** with wide letter-spacing, set in the mono font ("INVENTORY · PORTFOLIO", "REQUEST MEDIA KIT").
- Body: normal sentence case.

**Numbers are heroes.** Quote real, specific figures and let them carry the slide/section. "70–80 boards" beats "an extensive inventory." Passenger stats, unit counts, and ₹ amounts are shown in the mono/tabular style. Use the en-dash for ranges (1.25–1.30L) and the `·` middot as a separator ("PKG-01 · 18 units", "Festive · Q3 · launch burst").

**Unit codes lead.** Every inventory item is identified by its code first (PKG-01, AD-3, DIGITAL-FULL, BACKLIT-WS), shown in red/mono. Never bury the code in body text.

**One thought per block.** One headline idea per section. If it needs two thoughts, it's two sections.

**Honesty guardrails (important).** This is a real client brand with active legal sensitivity:
- No fake testimonials, no invented GST/legal claims, no "official partnership" language beyond what's approved.
- Don't publish the full historical client list. Only the approved public-facing clients may be shown (see below).
- Don't fabricate prices. The site qualifies intent first, then shares commercials. Public copy says "starting from ₹2,00,000 / month" and "we don't show every package price publicly."
- POC roles are exact: **Mukesh Patel — Founder / Owner**, **Mayur Patel — Managing Partner**, **Ridham Bhuva — Airport ASCO & Manager** (never "Partner").

**Approved public client names** (rotating display only): Apple, Google, Vivo, Oppo, Jade Blue, Simpolo, Poojara Mobiles, Radhika Jewellers. Support line: "Mukesh Arts has worked across mobile retail, ceramics, jewellery, technology, automotive, casting, and regional corporate campaigns."

**Emoji:** never. This is a corporate OOH brand.

**Example sentences (lift the rhythm, not the exact words):**
- Eyebrow → headline: "WHY THIS FORMAT" → "Airport visibility for brands ready *to be remembered*."
- Manifesto: "Airport media is one of the last formats where a brand still earns time, attention, and a captive audience that is already travelling with intent."
- Reassurance microcopy: "Draft front-end only. Final form routing and contact details connect after owner approval."

---

## VISUAL FOUNDATIONS

The visual motifs and rules of the brand.

**Overall mood.** Editorial, architectural, premium. A serif display face over crisp sans body, thin hairline rules, lots of breathing room, and real airport photography doing the heavy lifting. The palette is restrained: deep blue + black + grey as the structure, red as the single accent.

**Color.**
- Two brand palettes, each with Day + Night: **Maroon/Blue** (deep blue `#1E2A78` + red `#E21D2D`, the corporate route) and **Red/Sky** (sky blue `#1597E5`/`#0B74D1` + red, the lighter web route). Switched via `data-brand` + `data-theme` on `<html>`.
- **Red is rare and intentional** — the one thing the eye lands on (CTA, active state, unit code, the emphasised serif word). Never two competing reds.
- Deep blue / sky blue is the structural brand color (italic emphasis on light sections, the "future/CRM" band, brand-mark arch).
- Surfaces are near-white in Day (`#FFFFFF` on `#F5F6FA`/`#F5FBFF`) and deep navy-black in Night (`#12141E`/`#0E1624`).

**Type.**
- **Cormorant Garamond** (serif, weight 500) for all display — hero H1, section headings, card titles, big numbers, taglines. The emphasised word is *italic* and coloured (red on dark/photo, blue on light).
- **Inter** for body, ledes, form fields, nav links.
- **JetBrains Mono** for eyebrows, labels, unit codes, stats, footer meta, button text — always UPPERCASE, tracking 0.08–0.22em.
- Eyebrows render with a short leading hairline (a `26px` rule before the text via `::before`).

**Backgrounds & imagery.** Full-bleed photographic heroes with a dark left-to-right gradient scrim (`linear-gradient(90deg, rgba(8,7,5,0.85) → 0.15)`) so white type stays legible. Imagery is real, warm-to-neutral airport photography (terminal exteriors at golden hour, lit billboards, passenger flow) — never stock clipart, never illustration. Day/night hero swaps cross-fade between two photos. Section backgrounds alternate between `--bg`, the slightly deeper `--bg-deep`, the dark ink `--ink` band (Range), and the brand-blue "Future/CRM" band.

**Cards.** Square corners (`border-radius: 0`), 1px hairline border (`--rule`), surface background. On hover: border turns red/accent, the card lifts (`translateY(-2px)` for content cards, `-6px` for portfolio cards) and gains a soft long-throw shadow (`--card-shadow` / `--hover-shadow`). Image cards add a **metallic shine sweep** — a skewed light gradient that slides left→right over `0.65–0.85s`, plus a `scale(1.05–1.08)` zoom on the photo and a darkening veil that reveals the title.

**Borders & dividers.** Everything is hairlines: `1px solid var(--rule)` on cards/inputs, `--rule-soft` (a translucent accent) on the nav and footer edges. The signature divider is `--accent-line` — a horizontal gradient that fades transparent → red → blue → transparent.

**Shadows.** Long, soft, low-opacity, large negative spread (e.g. `0 22px 50px -34px rgba(17,17,17,0.28)`). Never a tight 2px drop shadow. Night mode pushes shadows near-black and adds a faint accent ring.

**Corner radii.** Sharp by default — `0px` on cards/buttons/inputs. Tiny `4–6px` only on the brand-mark plate. Full pills (`999px`) only on filter chips, the day/night + palette toggles, and small status dots.

**Buttons & states.**
- **Primary:** solid ink (`--ink`) fill, uppercase mono label; hover → fills red (`--accent-deep`) + `translateY(-1px)`. On hero/photo it inverts to a red fill that flips to off-white on hover.
- **Ghost:** transparent with hairline border; hover → border turns red + lift.
- **Link:** underlined with a red bottom-border; hover increases the gap between label and arrow (the arrow slides right).
- Press/active is communicated by color (filled ink/red), not by shrinking.

**Motion.** Calm and premium — fades, gentle lifts, sheen sweeps, photo zooms. Easing is `cubic-bezier(0.22,0.61,0.24,1)` (out) and `cubic-bezier(0.65,0,0.25,1)` (sweep). No bounce, no spring. Theme switches cross-fade over `0.55s`. The page boots with a one-shot route loader (a red line sweeping a hairline track). All animation is gated behind `prefers-reduced-motion`.

**Transparency & blur.** The sticky nav uses a frosted backdrop (`backdrop-filter: blur(18px) saturate(140%)` over a semi-transparent `--bg`). Photo cards use stacked gradient veils for legibility. Otherwise surfaces are solid.

**Layout.** Centered `1320px` max container with fluid padding (`clamp(20px,4vw,56px)`). Sections use fluid vertical rhythm (`clamp(72px,9vw,140px)`). Section heads are a 2-column "title + supporting paragraph" grid. The nav is sticky and frosted. Hero stat strips and footer use bordered column grids. Everything collapses to single-column at ≤720px; nav links become a horizontal scroll, toggles wrap, the portfolio grid drops to one column.

---

## ICONOGRAPHY

- **Approach:** the brand is photography-led and uses **very few icons**. There is no icon font and no large icon set in the product.
- **Inline SVG, hand-drawn line-art** for the two signature marks: the **Mukesh Arts brand mark** (two arches — red + blue — over a "MUKESH / ART" wordmark) and the **front-view airliner** used inside the day/night flight toggle. These are bespoke; reuse them from `assets/logo/`.
- **UI affordance icons** (the portfolio card's arrow, the eyebrow dash) are drawn as minimal 1.6px-stroke `currentColor` SVG paths or CSS pseudo-elements — outlined, never filled, single-color.
- The original brand spec named **Lucide** (outlined) as the icon set for decks. If you need a general icon (chevron, phone, mail, map-pin, check), use **Lucide via CDN** at a 1.5–1.6px stroke to match — this is the documented, on-brand substitution. Keep icons single-color (`--accent` or `--ink`/`--muted`), never two-tone.
- **No emoji. No unicode-glyph icons.** Separators use the `·` middot, ranges use the en-dash `–`.
- Logos available: `assets/logo/mukesh-arts-mark.svg` (dark wordmark, for light surfaces) and `assets/logo/mukesh-arts-mark-light.svg` (light wordmark, for dark surfaces).

---

## Index / manifest

**Root**
- `styles.css` — design-system entry point (import manifest; link this).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter wrapper.

**`tokens/`** — CSS custom properties (all reached from `styles.css`)
- `fonts.css` — Google Fonts import (Cormorant Garamond, Inter, JetBrains Mono).
- `colors.css` — raw brand constants + 4 theme scopes (maroonBlue/redSky × day/night).
- `typography.css` — font families, weights, fluid type scale, tracking.
- `spacing.css` — spacing scale, radii, control heights, shadows, motion tokens.

**`assets/`**
- `logo/` — Mukesh Arts brand mark (dark + light SVG).
- `img/` — real airport-media photography (heroes + inventory units).

**`guidelines/`** — foundation specimen cards (Design System tab): colors, type, spacing, brand.

**`components/`** — reusable React primitives, mounted from `window.RajkotAirportMukeshArtsDesignSystem_f86af9`:
- `buttons/` — **Button** (primary/ghost/link), **Chip** (pill filter), **SegmentedControl** (premium connected tabs).
- `data-display/` — **Eyebrow**, **Badge**, **Card**, **StatStrip**, **InventoryCard** (the signature media card).
- `forms/` — **Field** (labelled input/textarea with red focus ring).

**`ui_kits/airport_media_site/`** — full-screen recreation of the sales website (nav, hero, inventory portfolio, connectivity, client trust, contact).

See each directory's README/cards for usage. Components mount from `window.RajkotAirportMukeshArtsDesignSystem_f86af9`.
