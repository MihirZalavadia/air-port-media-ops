---
name: rajkot-airport-mukesh-arts-design
description: Use this skill to generate well-branded interfaces and assets for Rajkot International Airport × Mukesh Arts (premium airport / out-of-home media), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** Rajkot International Airport × Mukesh Arts — premium B2B airport media (OOH). Editorial, architectural, high-trust. Never generic SaaS, never playful.
- **Entry CSS:** link `styles.css` (imports all tokens + fonts). Themes flip via `data-brand="maroonBlue|redSky"` + `data-theme="day|night"` on `<html>`.
- **Type:** Cormorant Garamond (display, italic emphasis), Inter (body), JetBrains Mono (eyebrows/labels/codes).
- **Color:** deep blue / black / grey structure; **red `#E21D2D` is the single, rare accent**.
- **Geometry:** sharp corners, hairline borders, long-soft shadows, calm motion (no bounce), pills only on chips/toggles.
- **Components** mount from `window.RajkotAirportMukeshArtsDesignSystem_f86af9` after loading `_ds_bundle.js`: Button, Chip, SegmentedControl, Eyebrow, Badge, Card, StatStrip, InventoryCard, Field.
- **UI kit:** `ui_kits/airport_media_site/` is the full sales-site recreation — copy its patterns for any airport-media page.
- **Voice:** confident/consultative, numbers are heroes, unit codes lead, no emoji. Always write "Rajkot International Airport" in full.

See `readme.md` → CONTENT FUNDAMENTALS, VISUAL FOUNDATIONS, and ICONOGRAPHY for the full rules.
