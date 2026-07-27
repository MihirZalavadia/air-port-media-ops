# Media Production Guide — real video + photos + AI (2026-07-22)

Goal: turn (1) your real outdoor inventory video, (2) the masters in
`/04_media_kit/assets/photography_2026_07/`, and (3) the AI prompt library into site-grade films
and photos. Split of labour: **you shoot/generate and drop files;
Claude processes, wires, and deploys.**

## Step 1 — Drop the real video (5 min, do first)

1. Copy the outdoor video **at original quality** into
   `airport-media-ops/raw_media_drop/`
   (straight from the phone/camera via cable or Google Drive — **not
   WhatsApp**, which crushes it to 480p mush).
2. Name it so the slot is obvious: `outdoor_ad2_unipole.mp4` (or tell
   Claude what it shows).
3. Tell Claude it's there. Claude then: trims to the best 8–12s loop,
   stabilise-checks, 1080p compress (~2–4 MB), poster frame, and wires it
   as the **Landmark Outdoor Boards page hero** (the one slot that still
   has no film — outdoor kept real photos until now, and this IS real).
   Same file also becomes b-roll for the media kit and Ridham's LinkedIn.

**Shooting more clips while you're at it (each 10–20s, phone is fine):**
hold steady or one slow walk-move per clip, shoot 4K if the phone offers
it, landscape only, golden hour (5–7pm) flatters the boards, and grab:
the AD-2 unipole from the approach road (driving-by passenger POV),
each frontlit board straight-on then 3/4 angle, the terminal entrance
with trolleys moving, any digital screen playing content indoors.

## Step 2 — Photos: what's worth doing (Claude does it)

The `/04_media_kit/assets/photography_2026_07/` masters are already live on the site as webp.
Remaining value:
1. **Any new photos** → drop in `raw_media_drop/` → Claude trims,
   color-balances, converts to webp, and wires them.
2. **Weak/low-res shots** → free AI upscale: install **Upscayl**
   (upscayl.org, free desktop app) → drag photo → "Digital Art /
   General" model → 4x → drop the result in `raw_media_drop/`. Or ask
   Claude which files are below par and only upscale those.
3. Nothing else needed — don't re-export the masters; originals beat
   re-compressed copies.

## Step 3 — AI videos from YOUR photos (1 hour, one sitting)

The prompt library: `03_website/content/ai_video_prompt_library_rajkot_2026_07.md`.
Feed **your real photo as the start frame** so the AI animates OUR
terminal, not a random one. Exact pairings:

| Start frame (from /04_media_kit/assets/photography_2026_07/) | Prompt | Fills slot |
|---|---|---|
| `package 1/` best belt-screen photo | **C** (digital screen corridor) | Digital Screen Network hero |
| `STATIC BACKLIT SECURITY CLEARANCE/` photo | **D** (backlit silhouettes) | Backlit Boards hero |
| `package 2/` or trolley-visible shot | **E** (trolley ads) | Hybrid Plans hero |
| `AD - 2 ..._Updated.png` | **B variant** — "same board at night, warm floodlights, light traffic passing" | Night hero / outdoor at night |
| any wide hall photo | **F** (footfall timelapse) | Stats band (future) |

Workflow per clip: klingai.com (free daily credits; Google sign-in) →
Image to Video → upload start frame → paste prompt → generate 2–3 takes
→ keep the take where straight lines stay straight and signage doesn't
wobble. Hero-grade upgrade: Veo 3 via one month of Google AI Pro
(₹1,950) — same prompts, same start frames.

## Step 4 — Hand everything back

Drop all keepers in `raw_media_drop/` labeled by slot
(`C_digital.mp4`, `D_backlit.mp4`, `night_ad2.mp4`, …) and say "process
the drop folder". Claude runs the pipeline (loop trim → 1080p compress →
poster → theme scrim check), swaps out the remaining generic stock,
rebuilds, and deploys both hosts. Real footage always outranks AI;
AI outranks stock.

## Step 5 — QA (2 min after deploy)

Hard-refresh mukeshart.in/airport/ and the four inventory pages in both
themes; films should paint a poster instantly and loop smoothly. Report
any clip that stutters — usually just a re-trim.
