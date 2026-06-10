**SegmentedControl** — premium connected tab bar that upgrades loose filter chips into a single hairline track. Active segment fills ink with a red top accent; overflows scroll horizontally (never wrap).

```jsx
const [cat, setCat] = useState("All");
<SegmentedControl
  options={["All", "Digital Packages", "Static Boards", "Passenger Journey", "Custom Plans"]}
  value={cat}
  onChange={setCat}
/>
```

Use for inventory categories and any single-select view switch. For multi-select tag filtering, use loose `Chip`s instead.
