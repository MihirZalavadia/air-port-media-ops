# Work Log & Pending Items — as of 2026-08-05

Canonical project-state note (supersedes `work_log_and_pending_2026_08_04.md`).
Next session: read this + CLAUDE.md and continue from §Pending. (Older
context: README.md has the full site flows; 03_website/seo_target_keywords
has the SEO recipe.)

---

## ✅ Shipped this session (2026-08-05)

### Website — Android/mobile polish pass (LIVE, commit 2e33713)
Full implement-render-test pass across all 9 public routes; deployed to
Hostinger (workflow green). Desktop verified pixel-stable.

- **Inventory 2×2 crop fixed**: the historical `height: 430px` block in
  Home.css (~line 6060) was beating the phone `aspect-ratio: 4/3` — card
  images were ~150×410 crops. Unset in the *later* ≤640px block (cascade
  position matters there); phones now get true 4:3 (150×113 @ 393px),
  desktop still measures exactly 430px. Filter chips became a single
  swipeable 44px strip instead of a wrapped stack.
- **Subject-aware film crops** (chosen from ffmpeg contact sheets of all
  6 films, verified on playing frames not posters):
  hero day `40% 50%` / night `30% 50%` (≤768px, classes
  `.hero-video--day/--night`); inventory detail films via
  `data-film="<slug>"` — digital 55%, backlit 50%, outdoor 42%,
  hybrid 45%; home-showcase video slides carry a `focal` field.
  Posters share element+rule with videos, so framing never jumps.
- **Hero compacted**: `100svh` sizing; ≤468px stats back to 2×2 (the
  1-col stack made the hero ~1.5 screens tall).
- **44px touch targets everywhere** (measured, not assumed): chips,
  gallery arrows (always visible on touch), dot pads 34×44 (8px visual
  dot kept; 44-wide pads can't fit 8-up in a 360px stage — accepted),
  team links, theme toggle, menu links, footer/back/contact links,
  plan CTAs, connectivity-map cities (invisible SVG tap pads).
- **Hover gating**: every decorative hover (lifts, zooms, shines, the
  inventory photo-fan, arrow reveal, form-field lift) wrapped in
  `@media (hover: hover) and (pointer: fine)` in place; touch gets
  `:active` pressed states + `:focus-visible` outlines. **House rule
  going forward: new hover effects must follow this pattern.**
- **Gallery**: swipe navigation (no new deps, `touch-action: pan-y`),
  touch-safe pause; full-dwell-on-entry timing untouched.
- **Contact**: the 77px editorial form drop zeroed on phones and on
  /contact/ at all widths (desktop home keeps it); modal + menu use
  `dvh`; menu closes on Escape, safe-area padding on the drawer.
- **Animation parity**: ScrollAnimations rebuilt on `gsap.matchMedia()`
  (≤768px gets ~60% travel, lighter blur — same narrative/easing);
  About.tsx no longer double-binds data-motion over its own timeline;
  ScrollTrigger refreshes after window load.
- **Footer logo breakpoints reconciled**: ≤520px is now 100×81 matching
  the artwork ratio (was 65×86 letterbox, and the logo *grew* below
  390px — inversion removed).
- **Connectivity map**: v3 viewBox crop untouched; the "RAJKOT" hub
  label (first letter was clipped at the crop edge on phones) now sits
  whole below the hub dot, mobile only.
- Verification: 36 route×viewport runs (360/393/412/landscape/tablet)
  zero horizontal overflow; touch flows (filter→card→modal→unlock→
  detail, contact validation→WhatsApp, menu, theme, swipe) all pass;
  reduced-motion leaves everything visible; lead forms + validation
  intact. Lint: 6 pre-existing errors untouched (setState-in-effect ×4,
  unescaped quotes ×2), zero introduced. Build: clean static export.

### Docs / memory
- Session conventions + QA-harness recipe saved to Claude memory
  (`mobile_polish_2026_08`): Playwright headless recipe (wait for
  `body.site-ready`, scroll-through for once-reveals), Home.css cascade
  traps, focal-point sources.

---

## ⏳ PENDING — next session picks up here

### Mihir's clicks (blockers, carried over — ~30 min total)
1. **🔴 Repo → PRIVATE** — github.com Settings → Danger Zone. Public
   repo still exposes client list, pricing, personal details. Decided
   2026-07-27, still not flipped. Do this first. (Note: after flipping,
   deploy verification via the *public* API runs endpoint stops working
   — use `gh auth login` + `gh run list` instead.)
2. **🔴 GitHub Pages → OFF** — Settings → Pages → delete site (old
   published copy still up even though the workflow is gone).
3. **Google Sheet setup** (~15 min, art.mayurpatel login) — follow
   `05_crm_and_outreach/leads_google_sheet_setup.md`. Code side live.
4. **Lead email end-to-end test** (checklist §B in
   03_website/manual_setup_checklist_2026_07.md) if never done.
5. **Admin password** still in plaintext in manual_setup_checklist
   (gitignored) — move to password manager, delete from doc.

### Ridham / Mukesh sir (carried over)
6. **🔴 GBP video verification** — profile invisible until done. 5-min
   phone video at office (signage + letterhead/GST). Then services/
   photos/description per guide → review link to 5–10 partners.
7. Partner logo files: Jai Ganesh MG + Shreenathji Škoda lockups;
   Varmora vector (would upgrade the DRHP restore).
8. **NEW — vertical hero film ask**: a 9:16 phone-framed cut of the day
   and night hero films (even 8 s re-framed from existing masters)
   would let the mobile hero show the terminal properly instead of a
   steered ~28%-wide slice of the 16:9 frame. Everything else is CSS-
   solved. Next phone shoot at Hirasar: shoot verticals of the same
   two scenes.

### Claude next session (no blockers)
9. **GSC Performance check** (~2026-08-11): which client phrases get
   impressions; screenshot-worthy proof for Mukesh sir.
10. **Citations**: JustDial / IndiaMART / Sulekha listing drafts
    (Sulekha already p1 for "rajkot airport advertising").
11. Add Ridham as GSC user (needs his email).
12. Optional CI hardening: Hostinger deploy password-SSH → SSH key.
13. Media production guide flows (Kling/Veo prompts A–H) still
    available if the client wants more hero-grade film.
14. **Real-device sanity check**: ask Ridham to open the airport page
    on his Android — hero framing both themes, 2×2 cards, gallery
    swipe, menu. The polish was verified in emulation (Playwright,
    pointer:coarse); one real-thumb pass closes the loop.

### Waiting on client data (CLAUDE.md §8 — unchanged)
- Exact pricing structure · full inventory map · partner contract
  terms · AAI contract specifics · company legal name + GST · tool
  budget · retainer payment terms.
