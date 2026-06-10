**Field** — labelled input. Mono uppercase label over a sharp-cornered field with a red focus ring. Powers the lead-gate and contact forms.

```jsx
<form style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
  <Field label="Name" placeholder="Marketing lead name" />
  <Field label="Company" placeholder="Brand / agency" />
  <Field label="Inventory interest" wide placeholder="Digital package, front-lit board…" />
  <Field label="Message" multiline wide rows={4} />
</form>
```

Lay fields out in a 2-col grid; use `wide` for full-width rows and the submit button.
