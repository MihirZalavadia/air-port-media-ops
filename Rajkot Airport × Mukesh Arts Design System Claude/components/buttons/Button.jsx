import React, { useState } from "react";

/**
 * Button — the brand's primary action control.
 * Sharp corners, uppercase mono label, calm hover lift. Variants:
 *  · primary  → solid ink fill, reddens on hover (the default CTA)
 *  · ghost    → transparent + hairline border, border reddens on hover
 *  · link     → underlined red baseline, arrow nudges right on hover
 * Set `onPhoto` for use over dark photography (red fill → off-white on hover).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  onPhoto = false,
  href,
  icon,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);

  const accent = "var(--accent)";
  const accentDeep = "var(--accent-deep)";
  const height = size === "sm" ? "38px" : "44px";
  const pad = size === "sm" ? "0 16px" : "0 22px";

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    height,
    padding: pad,
    fontFamily: "var(--font-mono)",
    fontSize: size === "sm" ? "11.5px" : "12.5px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    border: "1px solid transparent",
    borderRadius: "0",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft), gap var(--dur-fast) var(--ease-soft)",
    transform: hover && !disabled && variant !== "link" ? "translateY(-1px)" : "none",
  };

  let variantStyle = {};
  if (variant === "primary") {
    if (onPhoto) {
      variantStyle = {
        background: hover ? "#FFFAF0" : accent,
        borderColor: hover ? "#FFFAF0" : accent,
        color: "#14110D",
      };
    } else {
      variantStyle = {
        background: hover ? accentDeep : "var(--ink)",
        borderColor: hover ? accentDeep : "var(--ink)",
        color: "var(--bg)",
      };
    }
  } else if (variant === "ghost") {
    variantStyle = {
      background: onPhoto && hover ? "rgba(255,250,240,0.08)" : "transparent",
      borderColor: hover ? accent : onPhoto ? "rgba(255,250,240,0.5)" : "var(--rule)",
      color: onPhoto ? "#FFFAF0" : "var(--ink)",
    };
  } else if (variant === "link") {
    variantStyle = {
      height: "auto",
      padding: "0 0 4px",
      gap: hover ? "12px" : "8px",
      background: "transparent",
      borderBottom: `1px solid ${accent}`,
      borderRadius: 0,
      color: hover ? accentDeep : "var(--ink)",
      textTransform: "uppercase",
      fontSize: "12px",
      letterSpacing: "0.1em",
    };
  }

  const Tag = href ? "a" : "button";
  const tagProps = href ? { href } : { type, disabled };

  return (
    <Tag
      {...tagProps}
      {...rest}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variantStyle, ...style }}
    >
      {children}
      {icon}
    </Tag>
  );
}
