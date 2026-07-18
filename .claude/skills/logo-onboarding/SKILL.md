---
name: logo-onboarding
description: Add, replace, or remove client logos on the mukeshart.in partners wall (or any future logo wall). Covers sourcing rules, identity verification, trim/®-removal scripts, SVG rasterization, PartnersPage wiring, and the build-verify-deploy loop. Use whenever the user says to add/update/remove client logos or brands.
---

# Logo onboarding & removal — partners wall pipeline

Library: `raamxmukeshart-main/public/images/clients/` · Page: `raamxmukeshart-main/src/components/pages/partners/PartnersPage.tsx` · Scripts: `raamxmukeshart-main/tools/logos/` (need `pip install pillow numpy scipy`).

## Onboarding a brand

1. **Identify the company first.** Many client-list names are informal ("Inox Casting" was Innox Precision; "Lemel" was Lemel Porcelano, Morbi). Search "<name> Rajkot/Morbi/Gujarat". If identity stays unclear, ASK the user — never put an unverified company's mark on a client wall.
2. **Source, in priority order:**
   1. Client-supplied file (always wins; user pastes images in chat — they land in the image cache and can be installed directly)
   2. Official website header/footer logo (curl with browser User-Agent, `-L`)
   3. Brand's own S3/asset bucket, or Facebook graph avatar: `https://graph.facebook.com/<page>/picture?type=large&width=720&height=720`
   4. IndiaMART (`5.imimg.com/.../Logo/...`) or Tileswale profile logos — usually clean and full-res
   5. Wayback Machine raw fetch: `https://web.archive.org/web/<ts>id_/<url>` (the `id_` suffix returns the original bytes)
   - Never: watermarked aggregators (seeklogo etc.), shopfront photos, thumbnails <200px when anything bigger exists.
   - Known ISP quirk: the user's Vodafone-Idea connection blocks some brand domains (itaca.in, radhikajeweltech.com) with a "Vi Alert" page — use mirrors/S3/Wayback.
3. **Verify visually.** `file` the download (HTML error pages masquerade as .png), then Read the image: right brand, uncropped (watch final letters — Meera's G was clipped), no watermark. Fan identification of many unnamed files out to parallel agents; give them the client list and demand a per-file table.
4. **Normalize:**
   - Name `snake_case.<ext>` matching the brand (`unity_cement.png`); keep the extension truthful to the format.
   - Trim: `python tools/logos/trim_logos.py <file>` — kills baked whitespace (tiny-looking logos are almost always a small mark in a big empty canvas; fully-opaque RGBA needs this script's white-threshold fallback — the OnePlus case).
   - Registered marks: the client wants ®/™ removed. `python tools/logos/scan_marks.py <file>` lists candidates → verify each blob is really a mark (Nova's "• • •" dots and tagline letters match the same shape test — cy < 0.6 and far-right is the usual mark signature) → `python tools/logos/erase_region.py <file> --box L T R B` (add `--color R G B` for flat/dark backgrounds, sampling the surrounding fill; white-on-color marks are invisible to the scanner — find them visually).
   - SVGs: fine to import as-is (like poojara.svg was), but for pixel edits rasterize first: wrap in an HTML `<img style="width:1200px">`, screenshot with headless Edge `--headless --disable-gpu --default-background-color=00000000 --screenshot=out.png --window-size=1200,H`, then treat as PNG.
5. **Wire into the page:** static import at the top of `PartnersPage.tsx` + one entry in `partnerGroups` (name, sector caption, img). Marquee rows derive automatically. Groups taxonomy: Ceramics & Vitrified · Engineering & Industrial · Jewellery & Lifestyle · Automotive · Mobile & Telecom · Healthcare · Services & Technology. If the group count changes, update the "Industries Covered" stat in the hero.
6. **Ship:** `npm run build` in `raamxmukeshart-main`, then verify the export: `roster-card` count = N brands and `marquee-chip` = 2N in `out/partners/index.html`. Commit (logos + tsx together), push to `main` — that deploys BOTH Hostinger (mukeshart.in) and GitHub Pages (mihirzalavadia.github.io/air-port-media-ops). Poll both `/partners/` URLs for a marker; use visible text (brand name) — asset filenames are content-hashed (`media/<name>.<hash>.png`) and CSS is minified, so grep `media/<name>\.` for assets, never a CSS comment.

## Removing a brand

Delete its import + `partnerGroups` entry in `PartnersPage.tsx`, delete the file from the library, rebuild (counts shrink automatically), commit, push, verify the name is gone from both live URLs.

## Display rules (why the wall looks right in both themes)

- Logos always sit on fixed light plates (`#fff`/`#f8fafc`) — never theme surfaces; many marks vanish on the night theme.
- The chip plate hugs each logo's aspect (50px tall, wordmarks stretch to ~118px) — that's what keeps mixed square/wide marks all looking big; never reintroduce a fixed-width square/circle plate.
- Dealer-brand cases (MG/Škoda): plain OEM mark + dealer credit in the sector caption ("Jai Ganesh · Rajkot") until a combined dealer lockup exists.
