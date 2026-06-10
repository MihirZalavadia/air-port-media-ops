import React from "react";

/**
 * Eyebrow — the small mono label that sits above every section heading.
 * Uppercase, wide tracking, with a short leading hairline. Coloured red by
 * default (`accent`); pass tone="blue" for the structural-blue variant.
 */
export function Eyebrow({ children, tone = "accent", style, ...rest }) {
  const color = tone === "blue" ? "var(--brand-blue)" : "var(--accent-deep)";
  return (
    <span
      {...rest}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        color,
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        ...style,
      }}
    >
      <span
        aria-hidden="true"
        style={{ width: "26px", height: "1px", background: "currentColor" }}
      />
      {children}
    </span>
  );
}
