import React from "react";

/**
 * StatStrip — the bordered stat row used in the hero and section bands.
 * Big serif figures with a mono uppercase caption, divided by hairline
 * rules. `onPhoto` switches to light type with translucent rules.
 */
export function StatStrip({ stats, onPhoto = false, columns, style }) {
  const cols = columns || stats.length;
  const ruleColor = onPhoto ? "rgba(255,250,240,0.14)" : "var(--rule)";
  const topRule = onPhoto ? "rgba(255,250,240,0.22)" : "var(--rule)";
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
        borderTop: `1px solid ${topRule}`,
        ...style,
      }}
    >
      {stats.map((s, i) => (
        <article
          key={s.label}
          style={{
            padding: "20px 24px 8px 0",
            borderRight: (i + 1) % cols === 0 ? "none" : `1px solid ${ruleColor}`,
          }}
        >
          <strong
            style={{
              display: "block",
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(2rem, 3vw, 2.8rem)",
              lineHeight: 1,
              color: onPhoto ? "#FFFAF0" : "var(--ink)",
            }}
          >
            {s.value}
          </strong>
          <span
            style={{
              display: "block",
              marginTop: "8px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: onPhoto ? "rgba(255,250,240,0.7)" : "var(--muted)",
            }}
          >
            {s.label}
          </span>
        </article>
      ))}
    </div>
  );
}
