import React, { useState } from "react";

/**
 * SegmentedControl — the premium connected tab bar that upgrades the
 * inventory category filters. A single hairline-bordered track holds the
 * segments; the active segment fills ink with a thin red top accent.
 * Sharp corners, mono uppercase labels. Scrolls horizontally on overflow.
 */
export function SegmentedControl({ options, value, onChange, style }) {
  const [hover, setHover] = useState(null);
  return (
    <div
      role="tablist"
      style={{
        display: "inline-flex",
        border: "1px solid var(--rule)",
        background: "var(--surface)",
        maxWidth: "100%",
        overflowX: "auto",
        ...style,
      }}
    >
      {options.map((opt, i) => {
        const val = typeof opt === "string" ? opt : opt.value;
        const label = typeof opt === "string" ? opt : opt.label;
        const active = val === value;
        return (
          <button
            key={val}
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(val)}
            onMouseEnter={() => setHover(val)}
            onMouseLeave={() => setHover(null)}
            style={{
              position: "relative",
              flex: "0 0 auto",
              height: "44px",
              padding: "0 22px",
              background: active ? "var(--ink)" : "transparent",
              color: active ? "var(--bg)" : hover === val ? "var(--accent-deep)" : "var(--ink-2)",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              borderRight: i < options.length - 1 ? "1px solid var(--rule)" : "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition:
                "background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft)",
            }}
          >
            {active && (
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "var(--accent)",
                }}
              />
            )}
            {label}
          </button>
        );
      })}
    </div>
  );
}
