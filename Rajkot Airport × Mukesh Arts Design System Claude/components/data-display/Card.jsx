import React, { useState } from "react";

/**
 * Card — the brand's surface primitive. Square corners, 1px hairline border,
 * surface background. On hover (enabled by default) the border reddens, the
 * card lifts and gains a soft long-throw shadow. Set `interactive={false}`
 * for a static panel.
 */
export function Card({ children, interactive = true, padding = 32, style, ...rest }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      {...rest}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        position: "relative",
        background: "var(--surface)",
        border: `1px solid ${hover ? "var(--accent)" : "var(--rule)"}`,
        borderRadius: "0",
        padding: typeof padding === "number" ? `${padding}px` : padding,
        boxShadow: hover ? "var(--card-shadow)" : "none",
        transform: hover ? "translateY(-2px)" : "none",
        transition:
          "border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
