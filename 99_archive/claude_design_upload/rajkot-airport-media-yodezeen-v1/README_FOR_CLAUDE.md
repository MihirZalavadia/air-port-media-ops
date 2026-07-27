# Rajkot Airport Media x Mukesh Arts - Claude Design Brief

This folder is a focused upload pack for redesigning the current Next.js homepage experience.

Source app:
`C:\Users\mihir\OneDrive\Desktop\Mihir.2.0\airport-media-ops\raamxmukeshart-main`

Do not treat this folder as the live app. It is a design handoff copy.

## Main Goal

Upgrade the existing Rajkot Airport Media x Mukesh Arts website into a premium, cinematic airport media platform. Keep the current business content and homepage structure, but improve the UI, animation, loading experience, connectivity map, and inventory presentation.

Reference mood:
- Yodezeen-style luxury editorial web experience
- cinematic full-screen visuals
- slow, confident reveal animations
- large serif headlines
- thin technical labels
- image-led storytelling
- smooth scrolling
- masked image reveals
- line drawing and flight-route animations
- premium hover states

Reference URLs:
- `https://yodezeen.com/`
- `https://yodezeen.com/projects/interior-design/completed/alba-restaurant`

Do not copy Yodezeen assets or branding. Use it only as a motion and layout reference.

## Design Direction

The site should feel like a high-value airport advertising product, not a basic local business website.

Visual tone:
- premium airport media
- high-trust OOH marketing
- Rajkot International Airport as the business gateway
- Mukesh Arts as experienced execution and relationship strength
- polished but not over-decorated
- rich motion, restrained copy

Avoid:
- generic SaaS look
- blue-white template feel
- random stock graphics
- heavy gradients everywhere
- childish animations
- changing factual business data
- changing section order unless needed for visual polish

## Top Priorities

1. Connectivity map animation
2. Loader animation upgrade
3. Inventory section redesign
4. Sitewide scroll and hover animation polish
5. Keep content tighter and more premium without changing source truth

## Current Tech Stack

Use the existing stack:
- Next.js
- React
- TypeScript
- CSS
- GSAP
- ScrollTrigger
- Lenis smooth scroll

Do not add a new animation framework unless absolutely required.

## Files In This Pack

### Core app files

Look in `code/`:
- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`

### Homepage and animation files

Look in `code/src/components/pages/home/`:
- `Home.css`
- `Hero.tsx`
- `BrandMoment.tsx`
- `About.tsx`
- `InventoryPackages.tsx`
- `Connectivity.tsx`
- `CommercialRange.tsx`
- `ClientsPartnerships.tsx`
- `Team.tsx`
- `Gallery.tsx`
- `Contact.tsx`

Look in `code/src/components/common/`:
- `PageLoader.tsx`
- `PageLoader.css`
- `ScrollAnimations.tsx`
- `SmoothScroller.tsx`
- `Header.tsx`
- `Header.css`
- `Footer.tsx`
- `Footer.css`

### Visual assets

Look in `assets/public/`:
- `images/home/indianmap.svg`
- `images/home/cover_logo.png`
- `images/home/logo.png`
- `images/home/mukeshairportmedialogo.png`
- `images/home/mukesh airport media-Photoroom.png`
- `images/home/herobg.png`
- `images/inventory/air1.png` to `air8.png`
- `images/clients/*`
- `images/team/*`
- `videos/hero_media.mp4`

## Important Code Notes

Some files contain old commented-out versions above the active component. Ignore commented-out old versions. Update only the active exported components and the CSS used by those active components.

The live app uses:
- `ScrollAnimations.tsx` for GSAP reveal behavior
- `SmoothScroller.tsx` for Lenis smooth scroll
- `PageLoader.tsx` and `PageLoader.css` for the current opening loader
- `Connectivity.tsx` for map city data and route rendering
- `InventoryPackages.tsx` for inventory cards and modal
- `Home.css` for most homepage styling

## Connectivity Map Requirements

Upgrade the current map into a premium animated experience.

Desired sequence:
1. Map card border draws in like a technical route board.
2. India outline draws with stroke animation.
3. Rajkot hub appears first with a clean pulse.
4. Metro city points appear one by one.
5. Flight paths draw outward from Rajkot.
6. Small flight doodles travel along routes.
7. On hover or tap, the selected route becomes bright and other routes fade.
8. The route list should sync with map hover state.

Cities:
- Rajkot hub
- Delhi
- Ahmedabad
- Mumbai
- Goa
- Hyderabad
- Bengaluru

Keep the map pride-sensitive. Use a proper full India outline and do not crop the north.

## Inventory Requirements

The inventory section is still the biggest sales opportunity. Redesign it like a premium project portfolio.

Required interaction:
- image-led cards
- one large main image
- 2-3 stacked preview images on hover
- click opens a premium details drawer or modal
- full details are gated behind a lead form
- required fields: name and 10-digit phone number
- default phone country should be India `+91`
- optional fields: company/brand, designation, campaign window

Do not show public package prices.

Tone:
- "wide range of airport media inventory"
- "premium airport visibility"
- "request full media plan"
- "starting from premium airport media options"

## Loader Requirements

Upgrade current loader, do not remove the brand moment.

Desired feel:
- flight fly-by remains
- slightly slower, around 1.1s to 1.2s
- Mukesh Arts / airport media logo appears cleanly
- border lines or runway lines draw in
- page reveals with a cinematic mask or curtain
- avoid loud or gimmicky animation

## Sitewide Animation Requirements

Use GSAP and ScrollTrigger.

Add or improve motion types:
- title mask reveal
- paragraph fade-up
- image clip reveal
- route line draw
- card stagger
- subtle shine or glitter on hover
- premium parallax for large images

Respect `prefers-reduced-motion`.

## Copy Direction

Do not rewrite all text heavily. Tighten where needed.

Messaging should highlight:
- not just marketing, but business understanding
- owner-operated media
- ASCO and airport access strength
- smooth airport visit coordination
- hospitality and relationship-led execution
- reliable ground team
- serious brand partnerships

Ridham role should be:
`Airport ASCO & Manager`

Do not call Ridham a partner in the team intro.

## Expected Claude Output

Please return:
1. A concise design plan.
2. Exact component changes.
3. Exact CSS changes.
4. Any new helper hooks/components needed.
5. Notes for responsive behavior.
6. Notes for reduced-motion support.

Do not generate unrelated pages. Focus on upgrading the existing homepage.

## Suggested Implementation Order

1. Clean or ignore old commented code.
2. Upgrade loader.
3. Upgrade connectivity map.
4. Upgrade inventory section.
5. Upgrade section reveal animations.
6. Polish hover states and mobile behavior.
7. Verify build and visual behavior.

