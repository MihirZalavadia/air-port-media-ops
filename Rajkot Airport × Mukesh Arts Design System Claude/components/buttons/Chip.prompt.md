**Chip** — pill-shaped filter toggle for category filtering. Fills solid ink when `active`.

```jsx
<Chip active>All</Chip>
<Chip onClick={() => setFilter("Digital Packages")}>Digital Packages</Chip>
```

For a connected, premium segmented look, prefer `SegmentedControl`. Use loose `Chip`s for multi-select / tag-style filtering.
