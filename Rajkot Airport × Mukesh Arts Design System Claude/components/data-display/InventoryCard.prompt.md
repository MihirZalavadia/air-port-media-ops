**InventoryCard** — the signature media-owner card: photo with hover veil + shine sweep + zoom, off-white code badge, springing arrow, then code/title/summary/specs below. The unit code always leads, in red mono.

```jsx
<InventoryCard
  code="PKG-01" category="Digital Packages"
  title="Arrival + SHA Digital Loop"
  summary="Broad digital coverage across arrival and waiting zones."
  format="8 ft x 3 ft horizontal LED loop"
  units="18 units"
  location="Arrival belts & Security Hold Area"
  image="assets/img/pkg-01.png"
/>
```

Use `feature` for a wide 21:9 lead card in a grid. Swap `image` yourself on night theme (e.g. pass an `*-night.png`).
