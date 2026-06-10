import React, { useState } from "react";

/**
 * Field — a labelled form input. Mono uppercase label above a sharp-cornered
 * input on the page background; focus reddens the border with a soft red
 * focus ring. Set `multiline` for a textarea, `wide` to span a 2-col grid.
 */
export function Field({
  label,
  placeholder,
  multiline = false,
  rows = 4,
  wide = false,
  value,
  onChange,
  type = "text",
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const control = {
    width: "100%",
    background: "var(--bg)",
    border: `1px solid ${focus ? "var(--accent)" : "var(--rule)"}`,
    borderRadius: "0",
    color: "var(--ink)",
    padding: "12px 14px",
    fontFamily: "var(--font-sans)",
    fontSize: "14px",
    boxShadow: focus ? "0 0 0 3px color-mix(in srgb, var(--accent), transparent 82%)" : "none",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
  };
  return (
    <label style={{ display: "grid", gap: "8px", gridColumn: wide ? "1 / -1" : "auto", ...style }}>
      <span style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: "10.5px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>
        {label}
      </span>
      {multiline ? (
        <textarea
          {...rest}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ ...control, resize: "vertical" }}
        />
      ) : (
        <input
          {...rest}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={control}
        />
      )}
    </label>
  );
}
