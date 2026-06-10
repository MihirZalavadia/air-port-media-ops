import React, { useState } from "react";

/**
 * Chip — a pill-shaped filter toggle (the inventory category filters).
 * Hairline border at rest, border reddens on hover, fills ink when active.
 */
export function Chip({ children, active = false, onClick, style, ...rest }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        height: "38px",
        padding: "0 18px",
        background: active ? "var(--ink)" : "transparent",
        color: active ? "var(--bg)" : "var(--ink)",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        border: `1px solid ${active ? "var(--ink)" : hover ? "var(--accent)" : "var(--rule)"}`,
        borderRadius: "999px",
        cursor: "pointer",
        transition:
          "background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft)",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
