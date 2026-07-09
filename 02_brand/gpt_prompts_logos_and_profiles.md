# GPT Prompts — Team Profiles & Division Logos

> Written 2026-07-09. Use with ChatGPT (GPT-4o image generation).
> Always ATTACH the reference image mentioned in each prompt — that's what
> locks the fonts, colors, and style.

---

## 1. Team profile photos (one prompt, reuse per person)

Attach: the person's photo from `/Profiles/` + Ridham's photo as style reference.

```
I'm attaching two images. Image 1 is a style reference; Image 2 is the person
to process.

Create a professional corporate headshot of the person in Image 2, matching
Image 1's exact style: square 1:1 format, chest-up framing, centered subject
facing the camera with a confident subtle smile, deep slate-blue studio
backdrop with a soft radial gradient, soft even key lighting from the front
left, crisp focus on the face, subtle color grade with warm skin tones.

Keep the person's face, hairstyle, glasses, and facial hair EXACTLY as in
Image 2 — do not alter identity. Dress them in a well-fitted navy blue
business suit with a light-blue open-collar shirt, no tie.

Output: 1254×1254 px, photorealistic, no text or watermark.
```

Per-person notes:
- **Mayur Patel** — the one that actually needs this (candid office shot,
  portrait crop). Run the prompt as-is.
- **Mukesh Patel** — optional: his photo is already studio-grade but has a
  grey office backdrop; run the prompt if you want all three on the same
  slate-blue backdrop.
- **Ridham Bhuva** — already the style reference; leave as-is.

Website spec the outputs must meet: square (1:1), ≥1200px, same backdrop
across all three, saved as `firstname_lastname.png` into
`raamxmukeshart-main/public/images/team/`.

---

## 2. Current Airport Media logo (exported, no prompt needed)

- `02_brand/logo/mukesh_airport_media_logo.png` — dark wordmark (1002×809, transparent)
- `02_brand/logo/mukesh_airport_media_logo_light.png` — light variant for dark backgrounds

---

## 3. Division logo prompts (same style as Airport Media)

Attach: `mukesh_airport_media_logo.png` with BOTH prompts.

### 3a. Mukesh Art

```
I'm attaching our company logo for "Mukesh AIRPORT MEDIA". Recreate this
exact logo, changing ONLY the bottom subtitle line from "AIRPORT MEDIA" to
"ART".

Everything else must match the attached logo precisely:
- Two mountain-peak / bird-wing shapes at the top: left peak in brand red
  (#E21D2D), right peak in deep indigo blue (#1E2A78), same size, angle,
  spacing, and curved bases
- The wordmark "Mukesh" below the peaks in the SAME serif typeface, same
  weight, same size, same dark ink color, same mixed-case letterforms
- The same horizontal rule line under the wordmark, same thickness, same
  indigo color
- The subtitle "ART" centered under the rule in the SAME letter-spaced
  uppercase sans-serif style and the same indigo blue as the original
  subtitle — scale the letter-spacing so the word sits balanced under the
  wordmark despite being shorter

Flat vector-style graphic, clean edges, transparent background, no shadows,
no gradients, no extra elements. Output as PNG, 2048px wide.
```

### 3b. Mukesh Publicity

```
I'm attaching our company logo for "Mukesh AIRPORT MEDIA". Recreate this
exact logo, changing ONLY the bottom subtitle line from "AIRPORT MEDIA" to
"PUBLICITY".

Everything else must match the attached logo precisely:
- Two mountain-peak / bird-wing shapes at the top: left peak in brand red
  (#E21D2D), right peak in deep indigo blue (#1E2A78), same size, angle,
  spacing, and curved bases
- The wordmark "Mukesh" below the peaks in the SAME serif typeface, same
  weight, same size, same dark ink color, same mixed-case letterforms
- The same horizontal rule line under the wordmark, same thickness, same
  indigo color
- The subtitle "PUBLICITY" centered under the rule in the SAME letter-spaced
  uppercase sans-serif style and the same indigo blue as the original
  subtitle, fitted to the same width the original subtitle occupied

Flat vector-style graphic, clean edges, transparent background, no shadows,
no gradients, no extra elements. Output as PNG, 2048px wide.
```

After generating: also ask GPT for a light/white-text variant of each (for
dark backgrounds), mirroring `mukesh_airport_media_logo_light.png`.

Save results to `02_brand/logo/` as:
- `mukesh_art_logo.png` / `mukesh_art_logo_light.png`
- `mukesh_publicity_logo.png` / `mukesh_publicity_logo_light.png`

Once they exist, they slot into: the group landing division cards, the About
timeline tiles (replacing the SVG recreation), and future letterheads/decks.
