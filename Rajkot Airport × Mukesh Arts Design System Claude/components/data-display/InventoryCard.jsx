import React, { useState } from "react";

/**
 * InventoryCard — the signature portfolio/media-owner card. A full-bleed
 * photo with a darkening veil, an off-white "code · category" badge, a
 * circular arrow that springs in, and a metallic shine sweep on hover. The
 * photo zooms, the card lifts. Below the image: code, title, summary, and an
 * optional spec list. Pass `imageNight` to swap the photo in night theme is
 * handled by the consumer; this primitive shows a single `image`.
 */
export function InventoryCard({
  code,
  category,
  title,
  summary,
  format,
  units,
  location,
  image,
  feature = false,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return (
    <article
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--surface)",
        border: `1px solid ${hover ? "color-mix(in srgb, var(--accent), transparent 30%)" : "var(--rule)"}`,
        borderRadius: "0",
        transform: hover ? "translateY(-6px)" : "none",
        boxShadow: hover ? "var(--hover-shadow)" : "none",
        transition:
          "border-color var(--dur-base) var(--ease-out), transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)",
        ...style,
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: feature ? "21 / 9" : "4 / 3",
          overflow: "hidden",
          isolation: "isolate",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: hover ? "scale(1.08)" : "scale(1)",
            transition: "transform 1s var(--ease-out)",
          }}
        />
        {/* base shade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(8,7,5,0.05) 25%, rgba(8,7,5,0.55) 100%), linear-gradient(90deg, rgba(8,7,5,0.28), transparent 55%)",
            opacity: hover ? 0.5 : 1,
            transition: "opacity var(--dur-slow) var(--ease-soft)",
          }}
        />
        {/* reveal veil */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(8,7,5,0) 30%, rgba(8,7,5,0.78) 100%)",
            opacity: hover ? 1 : 0,
            transition: "opacity var(--dur-slow) var(--ease-soft)",
          }}
        />
        {/* shine sweep */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: hover ? "140%" : "-120%",
            width: "65%",
            height: "100%",
            zIndex: 4,
            background:
              "linear-gradient(100deg, transparent 25%, rgba(255,244,220,0.18) 50%, transparent 75%)",
            transform: "skewX(-18deg)",
            transition: "left 0.85s var(--ease-soft)",
            pointerEvents: "none",
          }}
        />
        {/* badge */}
        <span
          style={{
            position: "absolute",
            top: "18px",
            left: "18px",
            zIndex: 3,
            display: "inline-flex",
            alignItems: "center",
            height: "28px",
            padding: "0 12px",
            background: "rgba(255,250,240,0.88)",
            color: "#14110D",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {code} · {category}
        </span>
        {/* arrow */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            zIndex: 3,
            width: "44px",
            height: "44px",
            display: "grid",
            placeItems: "center",
            borderRadius: "50%",
            background: "rgba(255,250,240,0.92)",
            color: "#14110D",
            transform: hover ? "translate(0,0) scale(1)" : "translate(10px,-10px) scale(0.85)",
            opacity: hover ? 1 : 0,
            transition: "transform 0.45s var(--ease-out), opacity var(--dur-base) var(--ease-soft)",
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h12M12 6l7 6-7 6" />
          </svg>
        </span>
        {/* hover meta */}
        <div
          style={{
            position: "absolute",
            left: "22px",
            right: "22px",
            bottom: "22px",
            zIndex: 3,
            color: "#FFFAF0",
            transform: hover ? "translateY(0)" : "translateY(14px)",
            opacity: hover ? 1 : 0,
            transition: "transform var(--dur-slow) var(--ease-out), opacity var(--dur-base) var(--ease-soft)",
            pointerEvents: "none",
          }}
        >
          <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            {category}
          </span>
          <h4 style={{ margin: "6px 0 0", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "28px", lineHeight: 1.05 }}>
            {title}
          </h4>
        </div>
      </div>

      <div style={{ padding: "24px 26px 26px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent-deep)" }}>
          {code}{units ? ` · ${units}` : ""}
        </span>
        <h3 style={{ margin: "8px 0 12px", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "26px", lineHeight: 1.1, color: "var(--ink)" }}>
          {title}
        </h3>
        {summary && (
          <p style={{ margin: 0, color: "var(--ink-2)", fontSize: "14px", lineHeight: 1.6 }}>{summary}</p>
        )}
        {(format || location) && (
          <dl style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "16px", margin: "20px 0 0", paddingTop: "18px", borderTop: "1px solid var(--rule)" }}>
            {format && (
              <div>
                <dt style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.14em", textTransform: "uppercase" }}>Format</dt>
                <dd style={{ margin: "5px 0 0", color: "var(--ink)", fontSize: "13px", lineHeight: 1.45 }}>{format}</dd>
              </div>
            )}
            {location && (
              <div>
                <dt style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.14em", textTransform: "uppercase" }}>Location</dt>
                <dd style={{ margin: "5px 0 0", color: "var(--ink)", fontSize: "13px", lineHeight: 1.45 }}>{location}</dd>
              </div>
            )}
          </dl>
        )}
      </div>
    </article>
  );
}
