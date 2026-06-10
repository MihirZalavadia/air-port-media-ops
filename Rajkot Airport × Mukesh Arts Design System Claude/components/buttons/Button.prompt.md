**Button** — the brand's main action control: sharp-cornered, uppercase mono label, calm hover lift. One `primary` per view.

```jsx
<Button variant="primary">Request Media Kit</Button>
<Button variant="ghost">View Inventory</Button>
<Button variant="link" icon={<span>→</span>}>Compare routes</Button>
```

Variants: `primary` (solid ink → reddens on hover), `ghost` (hairline border → reddens), `link` (red underline, arrow nudges right). Props: `size` (`sm`/`md`), `onPhoto` (invert for dark imagery), `href` (render as anchor), `icon`, `disabled`.
