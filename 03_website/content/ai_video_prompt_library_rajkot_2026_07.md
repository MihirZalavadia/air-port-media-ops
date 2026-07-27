# AI Video Prompt Library — Rajkot International Airport site films

Goal: replace generic stock loops with AI-generated clips that look like **our**
terminal, by feeding real Rajkot photos as the start/reference frame
(image-to-video). Generate 16:9, 1080p, 5–10s, 24fps. Send outputs raw to
Claude — the ffmpeg pipeline (compress → loop → poster) is already set up.

---

## 1. Where to generate (pick by budget)

| Tool | Why | Image-to-video | Cost (approx) |
|---|---|---|---|
| **Google Veo 3.x** (Gemini app / Flow at labs.google) | Best realism + physics; hero-grade | Yes | Google AI Pro ~₹1,950/mo (1-month is enough; trials common) |
| **Kling 2.x** (klingai.com) | Best free option; strong image-to-video | Yes | Free daily credits; ₹ paid tiers cheap |
| **Runway Gen-4** (runwayml.com) | Precise camera-motion control | Yes | Free credits, then ~$12/mo |
| **Hailuo / MiniMax** (hailuoai.video) | Good motion, generous free credits | Yes | Free tier |
| **Sora** (sora.com) | Strong, storyboards | Yes | Needs ChatGPT Plus |

Recommended split: **two hero-grade shots on Veo**, everything else on
**Kling free credits** with our photos as start frames. Total spend ≈ one
month of Google AI Pro.

## 2. Ground rules (apply to every generation)

- **Start frame = our real photo** wherever one exists (inventory shots
  `04_media_kit/assets` + `public/images/inventory/updated/`, or a frame from
  `hero_media.mp4`). This is what makes it "our airport."
- Ask for: *static or slow camera, 24fps look, natural motion, no on-screen
  text, no watermark, no readable airline or brand logos, faceless or
  distant people only.*
- Negative prompt (where supported): `text, captions, watermark, logo,
  distorted faces, extra fingers, warped signage, flicker`
- Generate 2–3 takes per prompt; judge on: straight lines stay straight,
  signage doesn't "boil," people move naturally.
- Loop trick: prompts that end near their starting composition loop cleanly
  (slow push-in or drift works; avoid big reveals).

## 3. Rajkot terminal look (paste into any prompt as the setting block)

> Setting: modern Indian regional airport terminal interior — warm white and
> cream walls, tall white columns, brown wooden slatted ceiling with large
> oval skylight cutouts, polished grey granite floor with subtle sparkle,
> soft daylight, Gujarati folk-art mural accents on far walls, clean and
> uncrowded, premium calm atmosphere.

---

## 4. The prompts

### A. HERO — Day terminal dolly (backup/alt to our real film)
*Start frame: bright frame from hero_media.mp4.*

> Cinematic slow dolly forward through the departure hall of a modern Indian
> regional airport. [SETTING BLOCK]. A few travellers with trolleys walk
> calmly in the mid-distance, seen from behind. Soft morning light through
> skylights, gentle reflections on the granite floor. Steady gimbal shot,
> 35mm lens, shallow depth, natural color grade, documentary realism. No
> text, no logos, no faces in close-up. 8 seconds, 16:9.

### B. HERO — Night exterior / apron (replaces stock rainy tarmac)

> Night establishing shot of a modern Indian regional airport terminal from
> the apron: warm amber lights glowing through the glass facade, a single
> parked narrow-body aircraft silhouetted at the stand, taxiway edge lights
> in soft bokeh, clear dark-blue sky. Very slow push-in, tripod-steady,
> cinematic anamorphic look, high dynamic range, calm and premium mood. No
> airline livery, no text, no people. 8 seconds, 16:9.

### C. INVENTORY — Digital screen network (replaces FIDS stock)
*Start frame: our ad_2/ad_3 digital-screen photo.*

> Slow lateral tracking shot along an airport corridor where a large wall-
> mounted digital advertising screen glows with abstract colorful motion
> graphics (no readable text). [SETTING BLOCK]. Two blurred travellers pass
> in the foreground, screen light reflecting on the polished floor. 50mm
> lens, shallow focus on the screen, ambient hum of a quiet terminal.
> No readable words on the screen — only color and shapes. 8 seconds, 16:9.

### D. INVENTORY — Backlit boards (replaces footfall stock)
*Start frame: our backlit lightbox photo.*

> Passengers with luggage walk past a large illuminated backlit advertising
> lightbox on the wall of an airport walkway, their silhouettes crossing the
> glowing panel. [SETTING BLOCK]. The lightbox shows a soft gradient image,
> no readable text. Slight long-exposure motion blur on the people, the
> board pin-sharp. Static tripod shot, 8 seconds, 16:9.

### E. INVENTORY — Trolley advertising (replaces Bangkok trolleys)
*Start frame: our trolley photo if available, else generate.*

> A neat row of airport luggage trolleys with advertising panels on their
> baskets stands in the arrivals hall of a modern Indian regional airport;
> a traveller takes one and wheels it toward the baggage belt.
> [SETTING BLOCK — include the black-and-white striped canopy structure
> decorated with hanging marigold garlands over the baggage claim area].
> The ad panels show plain bright colors, no readable text. Slow 15-degree
> orbit, warm daylight. 8 seconds, 16:9.

### F. STATS BAND — Footfall timelapse (for the "1.2M+ passengers" section)

> Time-lapse of passenger flow through an Indian regional airport departure
> hall: streams of travellers with trolleys become soft motion trails while
> the architecture stays sharp. [SETTING BLOCK]. Fixed high-angle camera,
> golden hour light shifting slightly, energetic but elegant. No faces
> resolvable, no text. 8 seconds, 16:9.

### G. BONUS — Aerial establishing (media kit + site)

> Aerial drone shot slowly ascending over a compact modern Indian regional
> airport at dawn: single runway, one small terminal with a curved roof,
> dry Saurashtra scrubland around it, soft haze on the horizon, an ATR
> turboprop taxiing. Gentle upward crane move, cinematic grade. No text,
> no logos. 8 seconds, 16:9.

### H. BONUS — Escalator / gate b-roll (spare section filler)

> Low-angle shot up an airport escalator as two travellers ride toward a
> skylit ceiling; wooden slatted ceiling panels and warm light above.
> [SETTING BLOCK]. Slow tilt following the ascent, 35mm, natural grade,
> serene mood. No faces in close-up, no text. 8 seconds, 16:9.

---

## 5. Handoff

Generate → download highest-quality MP4 → drop them to Claude with a note of
which slot each is for (A–H). They get the standard pass: 1080p CRF-27 loop,
poster extraction, theme scrim check, then deploy to both URLs. Real footage
you shoot at the airport still beats all of this — same handoff.
