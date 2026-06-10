# Codex Handoff - Airport Media Ops

Last updated: 2026-06-10

## Current Priority

Airport media website for **Rajkot Airport Media x Mukesh Art**. Mukesh Arts personal/basic website is not the current priority.

## Current Website

Path:

```text
03_website/growth_os_demo
```

Stack:

- Next.js 14 app router
- Main page shell in `components/Shell.tsx`
- Content/data in `lib/data.ts`
- Global design system CSS in `app/globals.css`
- Public image assets in `public/img`

Run locally:

```powershell
cd 03_website/growth_os_demo
npm.cmd run dev
```

Build:

```powershell
cd 03_website/growth_os_demo
npm.cmd run build
```

## Latest Website Direction

Public brand:

- `Rajkot Airport Media x Mukesh Art`

Important UI features already implemented:

- Light-blue airport blueprint loader
- Airplane flash/cutout loading effect
- Co-brand logo mark in header/footer
- Day/night theme toggle
- Floating brand bubbles with `Partnered with 50+ national and international brands`
- Lead-gated inventory preview
- Full inventory workboard after unlock
- Multi-image inventory hover galleries
- Real India map asset from Natural Earth public-domain data
- Rajkot hub and metro route points over the India map
- Natural Earth credit in map frame

## Key Content Rules

- Do not expose detailed package prices publicly.
- Public commercial line: `Wide airport media inventory, starting from INR 2,00,000 / month.`
- Keep Mukesh Art as co-brand/operator, not a personal-heavy homepage.
- No fake testimonials, fake legal claims, fake GST details, or unsupported official claims.
- Approved public brand names for trust bubbles:
  - Apple
  - Google
  - Vivo
  - Oppo
  - Jade Blue
  - Simpolo
  - Poojara Mobiles
  - Radhika Jewellers

## Owner-Side POCs

- Mukesh Patel - Founder / Owner
- Mayur Patel - Managing Partner
- Ridham Bhuva - Airport ASCO & Manager

## Inventory Data

Digital packages:

- `PKG-01`: 18 units, 8 ft x 3 ft horizontal LED loop, Arrival + SHA.
- `PKG-02`: 7 units, 6 x 8 ft x 4 ft plus 1 x 8 ft x 3 ft, Departure + Mezzanine + Arrival.
- `PKG-03`: 14 units, 8 x 75 inch plus 6 x 65 inch vertical displays.
- `DIGITAL-FULL`: 39 digital surfaces across Package 1/2/3.

Static boards:

- `AD-2` to `AD-6`: 30 ft x 10 ft front-lit boards across city-side approach, departure, and arrival routes.

Backlit:

- `BACKLIT-SC`: Security Clearance Backlit Media.
- `BACKLIT-WS`: Laptop Workstation Backlit Media.

Custom:

- `PLAN`: Digital/static/backlit recommendation based on campaign window, buyer category, and budget.

## Important Files Added/Updated

Website:

- `03_website/growth_os_demo/components/Shell.tsx`
- `03_website/growth_os_demo/lib/data.ts`
- `03_website/growth_os_demo/app/globals.css`
- `03_website/growth_os_demo/app/layout.tsx`
- `03_website/growth_os_demo/public/img/india-natural-earth.svg`

Prompt/docs:

- `03_website/rj_airport_marketing_site_plan_prompt_v1.md`
- `CODEX_HANDOFF.md`

Design-system reference folder kept in repo:

```text
Rajkot Airport x Mukesh Arts Design System Claude/
```

Note: The actual folder name on disk uses the multiplication symbol between `Airport` and `Mukesh`.

## Map Source

India outline generated from Natural Earth public-domain country data:

```text
https://www.naturalearthdata.com/
```

Generated asset:

```text
03_website/growth_os_demo/public/img/india-natural-earth.svg
```

Keep the credit line in the map UI:

```text
India outline: Natural Earth public domain data.
```

## Current Git Intent

Commit and push the latest website code, the Natural Earth SVG map asset, the Codex handoff markdown, the updated website prompt markdown, and the design-system reference folder.
