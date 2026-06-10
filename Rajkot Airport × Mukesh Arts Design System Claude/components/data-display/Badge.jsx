import React from "react";

/**
 * Badge — a small mono tag. Two looks:
 *  · solid (default) → off-white plate on imagery (the inventory "code · category" tag)
 *  · outline         → hairline-bordered pill for status / labels on surfaces
 */
export function Badge({ children, variant = "solid", style, ...rest }) {
  const solid = variant === "solid";
  return (
    <span
      {...rest}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        height: solid ? "28px" : "auto",
        padding: solid ? "0 12px" : "4px 11px",
        background: solid ? "rgba(255,250,240,0.88)" : "transparent",
        color: solid ? "#14110D" : "var(--accent-deep)",
        border: solid ? "none" : "1px solid color-mix(in srgb, var(--accent), transparent 50%)",
        borderRadius: solid ? "0" : "999px",
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
