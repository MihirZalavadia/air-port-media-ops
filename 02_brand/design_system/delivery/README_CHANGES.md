# Rajkot Airport Media × Mukesh Arts — Cinematic Upgrade

Drop-in upgrade for the existing Next.js homepage. Files here mirror your repo
paths exactly — copy each file to the same path under `code/`.

> **Heads-up on how this was produced:** this environment can't write into your
> local project folder or run your Next build, so every file below is provided
> as a drop-in. The behaviour and geometry were validated in a self-contained
> HTML prototype (`prototype/index.html`) before porting to React/TS. Please run
> `npm run build` / `next dev` after copying — no new dependencies are added.

> **⚠️ Rename on drop-in:** the 5 code files ship with a trailing `.txt`
> (`PageLoader.tsx.txt`, `ScrollAnimations.tsx.txt`, `Connectivity.tsx.txt`,
> `InventoryPackages.tsx.txt`, `indiaOutline.ts.txt`). Remove the `.txt` so they
> become `.tsx` / `.ts` in your repo. (The suffix only stops the unrelated
> design-system project this was authored in from trying to compile them.)

---

## File map

Copy → to your repo:

| This package | Your repo |
|---|---|
| `code/src/components/common/PageLoader.tsx` | overwrite existing |
| `code/src/components/common/PageLoader.css` | overwrite existing |
| `code/src/components/common/ScrollAnimations.tsx` | overwrite existing |
| `code/src/components/pages/home/Connectivity.tsx` | overwrite existing |
| `code/src/components/pages/home/Connectivity.css` | **new file** |
| `code/src/components/pages/home/indiaOutline.ts` | **new file** |
| `code/src/components/pages/home/InventoryPackages.tsx` | overwrite existing |
| `code/src/components/pages/home/InventoryShowcase.css` | **new file** |
| `code/src/app/globals.additions.css` | **new** — paste into `globals.css` (see below) |

**One manual step:** append the contents of `globals.additions.css` to the end
of your existing `src/app/globals.css` (or `@import "./globals.additions.css";`
right after the theme block). Everything else is a straight file swap.

No changes are needed in `page.tsx` or `layout.tsx` — component names, exports
and the `#connectivity` / `#inventory` anchor IDs are unchanged.

---

## What changed, per file

### `PageLoader.tsx` + `PageLoader.css` — Priority 2
Rebuilt as a cinematic opening moment (old commented variants dropped):
- Thin **runway / frame lines draw in** (stroke-dashoffset), plus a dashed
  centre runway line and soft red/blue glows.
- Brand lockup (`cover_logo.png` via `next/image`) + kicker + serif
  **"Rajkot Airport × Mukesh Arts"** rise in cleanly.
- A single **aircraft fly-by** — the core pass is **1.15s** (per brief), eased,
  no loops or gimmicks.
- Page is revealed with a **two-panel curtain** that splits away
  (`translateX(±101%)`), not a plain fade.
- Timings: reveal starts ~2.05s, fully gone ~2.95s. Component returns `null`
  once done so it leaves the DOM.

### `Connectivity.tsx` + `Connectivity.css` + `indiaOutline.ts` — Priority 1
Redesigned into a premium animated **route board** driven by an
`IntersectionObserver` + CSS (no extra GSAP plugin). Sequence, in order:
1. Map **card frame draws** (rounded rect stroke).
2. **India outline draws** with a stroke animation, then the filled land fades in.
3. **Rajkot hub** pops in with a clean radiating pulse.
4. **Metro points appear one-by-one** (staggered).
5. **Flight paths draw outward** from Rajkot (staggered).
6. **Aircraft doodles travel** along each curve (native SVG `<animateMotion>` +
   `<mpath>` — resolution-independent, no library).
7. **Hover / tap** a city *or* a route-list row → that route brightens and the
   others fade (`.has-active` + `.active`). Tap again to unpin.
8. The **route list stays in sync** with the selected map route (shared React
   state), and vice-versa.

- The India map is the real **Survey of India** outline (`indiaOutline.ts`,
  viewBox 1000×700). The **north (J&K), north-east and Andaman & Nicobar are all
  preserved — nothing is cropped.** City coordinates were tuned against the
  outline so every metro sits on land with no label collisions (Delhi nudged
  north; Ahmedabad label cleared off the hub).
- Cities are unchanged: Rajkot hub + Delhi, Ahmedabad, Mumbai, Goa, Hyderabad,
  Bengaluru.
- All rules are namespaced under `.connectivity-board-section` /
  `.connectivity-board`, so they don't collide with the old
  `.connectivity-modern` / `.map-card` blocks still in `Home.css`. You can delete
  those legacy blocks from `Home.css` whenever convenient.

### `InventoryPackages.tsx` + `InventoryShowcase.css` — Priority 3
Rebuilt as a premium project portfolio:
- Large, **image-led cards** (first card runs wide), one main airport-media image
  each, with a subtle hover **shine sweep** and image zoom.
- On hover, **3 preview "site stills" fan out** from the corner.
- Click opens a **premium right-side drawer** (slide-in + scrim, Esc to close,
  body scroll locked).
- **Full details are gated behind a lead form.** Required: **Name** and a
  **10-digit phone** (digits-only, sanitised, `maxLength=10`) with a country-code
  select **defaulting to +91**. Optional: **Company/Brand, Designation, Campaign
  window**. Inline validation on blur/submit; valid submit unlocks the plan
  details in place.
- **No backend** — on submit the lead object is `console.log`-ed with a clear
  `// TODO: persist to CRM / Google Sheet / Excel` marker
  (`POST /api/leads` stub noted in code).
- Copy uses the requested language: *"wide range of airport media,"* *"request
  full media plan,"* *"premium airport visibility."* Placement names are standard
  airport OOH surfaces (Arrival Hall, Security Hold Area, Baggage Belt, Departure
  Concourse, Aerobridge/Apron, Welcome Plaza). **No prices shown.**
- Namespaced under `.inventory-showcase` / `.ram-drawer` / `.ram-scrim` — no
  collision with the legacy `.inventory-portfolio` / `.inventory-work` /
  `.inventory-popup` rules in `Home.css`.

### `ScrollAnimations.tsx` + `globals.additions.css` — Priority 4
Extended the existing GSAP/ScrollTrigger system (still **no new libraries**).
Opt-in data attributes:
- `data-motion="up|left|right|zoom|clip|card|fade|mask"` — single reveal.
  `mask` is a clean bottom-up **title mask reveal**; `clip` is an **image clip
  reveal**; `fade` is a **soft paragraph fade-up**.
- `data-motion-delay="0.12"` — per-element delay.
- `data-motion-group` + `data-motion-item` — **card stagger**.
- `data-parallax="14"` — **premium parallax** (scrubbed % travel). Put it on a
  large image *inside* a taller container (e.g. the hero video, gallery images).
- `data-draw` — **route/line draw** for any SVG `<path>` on scroll (e.g. the
  ClientsPartnerships connecting curve).
- `data-shine` (CSS, from `globals.additions.css`) — **subtle hover shine** on any
  positioned block (cards, CTAs, media).

### Copy tightening — Priority 5
- Connectivity + Inventory copy rewritten to premium, business-aware language
  (above).
- **Ridham is "Airport ASCO & Manager," never a partner** — your current active
  `Team.tsx` already has this correct, so it was left intact.
- Owner-operated media / ASCO airport access / relationship-led execution /
  ready ground team messaging already lives in your active `ClientsPartnerships.tsx`
  and the new Connectivity route-panel footnote — no factual business data was
  changed and no new claims were invented. `About.tsx` / `Team.tsx` were left as-is
  intentionally (they already align).

---

## Responsive behaviour
- **Connectivity:** two-column board (map + panel) collapses to a single column
  ≤1080px; the SVG scales via its 1000×700 viewBox so the map never crops. ≤720px
  the card shrinks to 460px min-height and the floating stats move inline.
- **Inventory:** 6-col grid → 4-col ≤1080px → single column ≤720px (the wide card
  normalises to 4:3, the hover fan-out is hidden on touch). The drawer becomes
  full-width ≤720px and its optional two-up fields stack.
- **Loader:** brand type is fluid (`clamp`), the frame inset tightens on small
  screens, and the fly-by is viewport-relative.
- Hit targets (chips, list rows, close button, form controls) are ≥42–50px.

## Reduced-motion (`prefers-reduced-motion: reduce`)
Handled in **both** CSS and JS:
- **Loader:** no fly-by, no line-draw; brand shows, then a quick fade (~0.3s) —
  no curtain sweep.
- **Connectivity:** the finished board renders instantly — outline/routes/frame
  at full stroke, land visible, hub/cities/labels shown, **planes hidden**. Hover
  highlighting still works.
- **ScrollAnimations:** `ScrollAnimations.tsx` early-returns after snapping all
  `data-motion` / `data-parallax` / `data-draw` targets to their final state;
  `globals.additions.css` mirrors this and disables the hover shine.
- **Inventory:** transitions/animations reduced to ~0; fan-out stills shown
  statically.

---

## Preview
Open **`prototype/index.html`** in a browser for a live, self-contained preview of
the loader, connectivity route board and inventory drawer (vanilla mirror of the
React behaviour). Use the bottom "Replay loader / Replay map" buttons to re-watch
the sequences.
