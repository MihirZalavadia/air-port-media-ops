# Rajkot Airport Media × Mukesh Arts — Cinematic Upgrade (v2, corrected)

Drop-in upgrade for the existing Next.js homepage. Every path below mirrors your
repo exactly — copy each file to the same path under `code/`.

This is the **corrected package** addressing the 9-point review: missing
prototype, night-theme support, inventory content truth, CSS collision safety,
final file names, integration notes, build safety, lead-form scope, and role/copy
rules.

> **How this was produced:** this environment can't write into your local folder
> or run your Next build, so files are provided as a drop-in. Behaviour + map
> geometry were validated in a self-contained HTML prototype (`prototype/`) — open
> `prototype/index.html` to preview the loader, route board and inventory drawer,
> and use the **Night** button (bottom bar) to check day/night. No new npm deps
> are added; run `npm run build` / `next dev` after copying.

---

## File map — final names

| Package file | Your repo | Action |
|---|---|---|
| `code/src/components/common/PageLoader.tsx` | same | **overwrite** |
| `code/src/components/common/PageLoader.css` | same | **overwrite** |
| `code/src/components/common/ScrollAnimations.tsx` | same | **overwrite** |
| `code/src/components/pages/home/Connectivity.tsx` | same | **overwrite** |
| `code/src/components/pages/home/Connectivity.css` | same | **new** |
| `code/src/components/pages/home/indiaOutline.ts` | same | **new** |
| `code/src/components/pages/home/InventoryPackages.tsx` | same | **overwrite** |
| `code/src/components/pages/home/InventoryShowcase.css` | same | **new** |
| `code/src/app/globals.additions.css` | — | **new** (append to `globals.css`) |

All files ship with their **final extensions** (`.tsx` / `.ts` / `.css`). Ready
for Codex to apply as-is.

---

## Integration notes (exact)

1. **Overwrite** the four existing components + `PageLoader.css` in place. Their
   component names, default exports and the `#connectivity` / `#inventory` anchor
   IDs are unchanged, so **no changes are needed in `page.tsx` or `layout.tsx`.**
2. **Add** the three new CSS files and `indiaOutline.ts`. Each component imports
   its own CSS (`import "./Connectivity.css"`, `import "./InventoryShowcase.css"`,
   `import "./PageLoader.css"`), so no central registration is needed.
3. **`globals.additions.css`** is the only manual step: append its contents to the
   **end of** `src/app/globals.css`, or add `@import "./globals.additions.css";`
   right after your theme block. It defines the `[data-motion]` / `[data-shine]`
   helpers used by `ScrollAnimations.tsx`.
4. **Home.css legacy blocks can stay.** All new classes are namespaced (see below)
   so they do **not** collide with the old `.connectivity-modern`, `.map-card`,
   `.inventory-portfolio`, `.inv-*`, `.inventory-work` or `.inventory-popup` rules.
   You may delete those legacy blocks later for tidiness, but nothing breaks if
   they remain.
5. Image imports use existing assets in `public/images/inventory/` and
   `public/images/home/cover_logo.png` — no new assets required.

---

## 1 · Prototype (included)
`prototype/index.html` is a self-contained visual mirror (vanilla JS) of the three
showpieces. Bottom bar: **Replay loader**, **Replay map**, **Night** (day/night
toggle). It uses the same fonts, tokens, geometry and copy as the React build so
you can sign off the motion + night-mode before applying code.

## 2 · Night-theme support
Everything now reads the shared theme tokens and works under both
`<html data-theme="day">` and `data-theme="night"` (and either `data-brand`).

- **Inventory + drawer + form fields** use `--bg`, `--surface`, `--card-bg`,
  `--ink`, `--ink-2`, `--muted`, `--rule`, `--rule-soft`, `--accent`,
  `--accent-blue` with fallback chains (`--card-bg → --surface → #fff`,
  `--accent-blue → --brand-blue-2 → #1597e5`). No hard-coded light-only text
  remains — headings, chips, inputs and the submit button invert per theme (the
  filled chip/button use `--ink` on `--bg`, so they flip automatically).
- **Intentionally-fixed panels only:** the loader stays dark cinematic; the route
  side panel stays dark; the map card is a deliberately luminous light "map inset."
  Every text layer on those carries a halo/overlay so it reads in either theme.
- Card/image gradients that sit **on photos** keep dark overlays (readable in both
  themes) by design.

## 3 · Inventory content (truth)
Invented surfaces removed (Welcome Plaza Anamorphic, Aerobridge/Apron Wrap,
Baggage Belt Takeover, SHA "Spectacular"). Replaced with confirmed, generic
formats only — **no prices, no invented claims:**

- Digital Display Network
- Static Backlit Boards
- Airport Front Lit Boards
- Security Clearance Backlit
- Laptop Workstation Static Backlit
- Grouped Media Plans (Package 1 / 2 / 3)

Filters: **All Media · Digital · Static Boards · Packages**. Copy uses your
requested language ("wide airport media inventory", "request full media plan",
"premium airport visibility").

## 4 · CSS collision safety (namespacing)
No generic `.inv-*` / `.map-card` / `.route-*` names remain. New scopes:

- Connectivity → `.ram-connectivity`, `.ram-map-board`, `.ram-map-card`,
  `.ram-route-panel`, `.ram-route-*`, `.ram-city-*`, `.ram-hub-*`, `.ram-india-*`.
  SVG ids namespaced too (`#ramLandGrad`, `#ram-route-N`) and keyframes prefixed
  `ram-conn-*`.
- Inventory → `.ram-inventory`, `.ram-inv-card`, `.ram-inv-photo`,
  `.ram-inv-drawer`, `.ram-inv-scrim`, `.ram-inv-form`, `.ram-inv-field`, etc.

## 5 · Motion polish — `ScrollAnimations.tsx` + `globals.additions.css`
Extended the existing GSAP/ScrollTrigger system (no new libraries). Opt-in:
`data-motion="up|left|right|zoom|clip|card|mask|fade"`, `data-motion-delay`,
`data-motion-group` + `data-motion-item` (card stagger), `data-parallax="14"`,
`data-draw` (SVG line draw), and CSS `data-shine` (hover shine).

## 6 · Build safety (TypeScript / Next.js)
- No unused imports; `handleClose` is wrapped in `useCallback` and correctly
  listed in the drawer effect's deps.
- Valid React SVG attributes only (`strokeWidth`, `pathLength`, `textAnchor`,
  `stopColor`, `<animateMotion>` + `<mpath href>`, `vectorEffect`).
- All browser APIs (`window.matchMedia`, `IntersectionObserver`, `document`) run
  **inside `useEffect`** — SSR-safe.
- `Connectivity.tsx` guards against a missing `IntersectionObserver` (renders the
  finished board immediately).

## 7 · Accessibility
- Every lead field uses a real `<label htmlFor>`; invalid fields set
  `aria-invalid`; filter chips are `role="tab"` + `aria-selected`.
- Map cities + route rows are keyboard-operable (`role="button"`, `tabIndex=0`,
  Enter/Space, `aria-pressed`, visible `:focus-visible` ring).
- Drawer is `role="dialog"` `aria-modal`, closes on Esc / scrim / ×, locks body
  scroll, and restores it on unmount.
- Hit targets ≥ 44–50px (close button, inputs, chips).

## 8 · Lead form (frontend only)
Required **Name** + **10-digit phone** (digits sanitised, `maxLength=10`) with a
country-code select defaulting to **+91**; optional Company/Brand, Designation,
Campaign window. Inline validation on change/submit. On valid submit the plan
details unlock in place and the lead object hits a clearly-marked
`// TODO (lead capture): persist to CRM / Google Sheet / Excel` block (with a
commented `fetch("/api/leads")` example). **No backend is wired** — nothing is
sent yet.

## 9 · Content & role rules
- **Ridham is "Airport ASCO & Manager," never a partner.** Your active `Team.tsx`
  already states this correctly, so it was left untouched (no factual data
  changed).
- No prices anywhere. Owner-operated / ASCO airport access / relationship-led /
  ready-ground-team messaging lives in the Connectivity route-panel footnote and
  your existing `ClientsPartnerships.tsx`. No new business claims invented.

---

## Responsive behaviour
- **Connectivity:** map + panel is two-column, collapses to one column ≤1080px;
  the SVG scales via its 1000×700 viewBox so the map never crops. ≤720px the card
  drops to 460px min-height and the floating stats move inline.
- **Inventory:** 6-col grid → 4-col ≤1080px → single column ≤720px (wide card
  normalises to 4:3; hover fan-out hidden on small screens). Drawer becomes
  full-width ≤720px and the two-up fields stack.
- **Loader:** fluid brand type (`clamp`), tighter frame inset on small screens,
  viewport-relative fly-by.

## Reduced motion (`prefers-reduced-motion: reduce`)
Handled in **both** CSS and JS:
- **Loader:** no fly-by / no line-draw; brand shows then a quick fade — no curtain
  sweep.
- **Connectivity:** the finished board renders instantly (outline/routes/frame at
  full stroke, land visible, hub/cities/labels shown, **planes hidden**). Hover
  highlighting still works.
- **ScrollAnimations.tsx** early-returns after snapping every `data-motion` /
  `data-parallax` / `data-draw` target to its final state; `globals.additions.css`
  mirrors this and disables the hover shine.
- **Inventory:** transitions/animations reduced to ~0; fan-out stills shown
  statically.
