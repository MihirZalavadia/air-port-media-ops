# Gamma Deck Generation

Use this once the Gamma API key is stored in `.env.local`:

```powershell
powershell.exe -ExecutionPolicy Bypass -File tools\gamma_generate_deck.ps1 -Config tools\gamma_deck_configs\ad2_product.json
```

Reusable structure:

- `tools/gamma_generate_deck.js` is the main generator.
- `tools/gamma_generate_deck.ps1` is a PowerShell wrapper.
- `tools/gamma_deck_configs/*.json` stores deck settings.
- `04_media_kit/source/gamma_prompts/*.txt` stores deck briefs/prompts.
- Outputs are saved to `04_media_kit/exports/`.

For a new deck:

1. Create a new `.txt` brief in `04_media_kit/source/gamma_prompts/`.
2. Copy a config in `tools/gamma_deck_configs/`.
3. Prefer extending `_base_light_rich_webpage_ai.json` or `_base_light_rich_presentation_ai.json`.
4. Change `promptPath`, `outputStem`, and deck settings if needed.
5. Run the PowerShell command with `-Config`.

Selected reusable visual base:

- Theme: `Gold Leaf`
- Theme ID: `gold-leaf`
- Notes: see `tools/gamma_theme_selection.md`

Recommended modes:

- UI-like premium deck: `textMode: "generate"`, `cardSplit: "auto"`, `imageSource: "placeholder"`.
- UI-like webpage with AI images: `format: "webpage"`, `textMode: "generate"`, `cardSplit: "inputTextBreaks"`, `imageSource: "aiGenerated"`.
- Exact controlled deck: `textMode: "preserve"`, `cardSplit: "inputTextBreaks"`.

API webpage generation with AI images:

```powershell
powershell.exe -ExecutionPolicy Bypass -File tools\gamma_generate_deck.ps1 -Config tools\gamma_deck_configs\ad2_webpage_ai.json
```

Notes:

- Webpage format does not use `cardOptions.dimensions` or header/footer options.
- The config omits `imageOptions.model` so Gamma auto-selects the model, like the UI.
- The config uses `imageOptions.source: "aiGenerated"` and a photorealistic airport-media style.

Manual Gamma UI flow:

1. Go to Gamma paste screen.
2. Select `Webpage`.
3. Set cards to `10 cards` for the richer web-page style version.
4. Set `Image source` to `AI images`.
5. Keep Gamma's recommended/default AI image model unless you specifically want another.
6. Paste `04_media_kit/source/gamma_prompts/ad_2_gamma_ui_webpage_ai_images_10_cards.txt`.
7. Select `Summarize long text or document`.
8. Use the custom theme.
9. Generate.

Manual image-replacement version:

1. Select `Webpage`.
2. Paste `04_media_kit/source/gamma_prompts/ad_2_gamma_ui_webpage_paste_prompt.txt`.
3. Select `Summarize long text or document`.
4. Use the custom theme.
5. Generate, then replace image placeholders manually from the source PPT/PDF.
