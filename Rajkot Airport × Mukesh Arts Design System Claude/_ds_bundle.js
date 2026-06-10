/* @ds-bundle: {"format":3,"namespace":"RajkotAirportMukeshArtsDesignSystem_f86af9","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Chip","sourcePath":"components/buttons/Chip.jsx"},{"name":"SegmentedControl","sourcePath":"components/buttons/SegmentedControl.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/data-display/Eyebrow.jsx"},{"name":"InventoryCard","sourcePath":"components/data-display/InventoryCard.jsx"},{"name":"StatStrip","sourcePath":"components/data-display/StatStrip.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"a608d7351b99","components/buttons/Chip.jsx":"778a8df9b6fb","components/buttons/SegmentedControl.jsx":"657cef92cba5","components/data-display/Badge.jsx":"1f18d7dc3129","components/data-display/Card.jsx":"32735df01be6","components/data-display/Eyebrow.jsx":"df323960299b","components/data-display/InventoryCard.jsx":"4850577d878e","components/data-display/StatStrip.jsx":"a6d5b821760a","components/forms/Field.jsx":"4a872cbe7051","ui_kits/airport_media_site/ClientTrust.jsx":"77bcca37716e","ui_kits/airport_media_site/Closing.jsx":"d99e2e12b633","ui_kits/airport_media_site/Connectivity.jsx":"cfaf2789e17e","ui_kits/airport_media_site/Hero.jsx":"e3b793a10439","ui_kits/airport_media_site/Inventory.jsx":"7624c6e46670","ui_kits/airport_media_site/Nav.jsx":"ea517ea73abf","ui_kits/airport_media_site/app.jsx":"22845bf205ad","ui_kits/airport_media_site/data.js":"9e5cf0298da1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RajkotAirportMukeshArtsDesignSystem_f86af9 = window.RajkotAirportMukeshArtsDesignSystem_f86af9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Button — the brand's primary action control.
 * Sharp corners, uppercase mono label, calm hover lift. Variants:
 *  · primary  → solid ink fill, reddens on hover (the default CTA)
 *  · ghost    → transparent + hairline border, border reddens on hover
 *  · link     → underlined red baseline, arrow nudges right on hover
 * Set `onPhoto` for use over dark photography (red fill → off-white on hover).
 */
function Button({
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
    transition: "background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft), gap var(--dur-fast) var(--ease-soft)",
    transform: hover && !disabled && variant !== "link" ? "translateY(-1px)" : "none"
  };
  let variantStyle = {};
  if (variant === "primary") {
    if (onPhoto) {
      variantStyle = {
        background: hover ? "#FFFAF0" : accent,
        borderColor: hover ? "#FFFAF0" : accent,
        color: "#14110D"
      };
    } else {
      variantStyle = {
        background: hover ? accentDeep : "var(--ink)",
        borderColor: hover ? accentDeep : "var(--ink)",
        color: "var(--bg)"
      };
    }
  } else if (variant === "ghost") {
    variantStyle = {
      background: onPhoto && hover ? "rgba(255,250,240,0.08)" : "transparent",
      borderColor: hover ? accent : onPhoto ? "rgba(255,250,240,0.5)" : "var(--rule)",
      color: onPhoto ? "#FFFAF0" : "var(--ink)"
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
      letterSpacing: "0.1em"
    };
  }
  const Tag = href ? "a" : "button";
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, rest, {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variantStyle,
      ...style
    }
  }), children, icon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Chip — a pill-shaped filter toggle (the inventory category filters).
 * Hairline border at rest, border reddens on hover, fills ink when active.
 */
function Chip({
  children,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
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
      transition: "background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft)",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Chip.jsx", error: String((e && e.message) || e) }); }

// components/buttons/SegmentedControl.jsx
try { (() => {
const {
  useState
} = React;
/**
 * SegmentedControl — the premium connected tab bar that upgrades the
 * inventory category filters. A single hairline-bordered track holds the
 * segments; the active segment fills ink with a thin red top accent.
 * Sharp corners, mono uppercase labels. Scrolls horizontally on overflow.
 */
function SegmentedControl({
  options,
  value,
  onChange,
  style
}) {
  const [hover, setHover] = useState(null);
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "inline-flex",
      border: "1px solid var(--rule)",
      background: "var(--surface)",
      maxWidth: "100%",
      overflowX: "auto",
      ...style
    }
  }, options.map((opt, i) => {
    const val = typeof opt === "string" ? opt : opt.value;
    const label = typeof opt === "string" ? opt : opt.label;
    const active = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(val),
      onMouseEnter: () => setHover(val),
      onMouseLeave: () => setHover(null),
      style: {
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
        transition: "background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft)"
      }
    }, active && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "var(--accent)"
      }
    }), label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small mono tag. Two looks:
 *  · solid (default) → off-white plate on imagery (the inventory "code · category" tag)
 *  · outline         → hairline-bordered pill for status / labels on surfaces
 */
function Badge({
  children,
  variant = "solid",
  style,
  ...rest
}) {
  const solid = variant === "solid";
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
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
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Card — the brand's surface primitive. Square corners, 1px hairline border,
 * surface background. On hover (enabled by default) the border reddens, the
 * card lifts and gains a soft long-throw shadow. Set `interactive={false}`
 * for a static panel.
 */
function Card({
  children,
  interactive = true,
  padding = 32,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: "relative",
      background: "var(--surface)",
      border: `1px solid ${hover ? "var(--accent)" : "var(--rule)"}`,
      borderRadius: "0",
      padding: typeof padding === "number" ? `${padding}px` : padding,
      boxShadow: hover ? "var(--card-shadow)" : "none",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft)",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the small mono label that sits above every section heading.
 * Uppercase, wide tracking, with a short leading hairline. Coloured red by
 * default (`accent`); pass tone="blue" for the structural-blue variant.
 */
function Eyebrow({
  children,
  tone = "accent",
  style,
  ...rest
}) {
  const color = tone === "blue" ? "var(--brand-blue)" : "var(--accent-deep)";
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      color,
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "26px",
      height: "1px",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/data-display/InventoryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * InventoryCard — the signature portfolio/media-owner card. A full-bleed
 * photo with a darkening veil, an off-white "code · category" badge, a
 * circular arrow that springs in, and a metallic shine sweep on hover. The
 * photo zooms, the card lifts. Below the image: code, title, summary, and an
 * optional spec list. Pass `imageNight` to swap the photo in night theme is
 * handled by the consumer; this primitive shows a single `image`.
 */
function InventoryCard({
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
  return /*#__PURE__*/React.createElement("article", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface)",
      border: `1px solid ${hover ? "color-mix(in srgb, var(--accent), transparent 30%)" : "var(--rule)"}`,
      borderRadius: "0",
      transform: hover ? "translateY(-6px)" : "none",
      boxShadow: hover ? "var(--hover-shadow)" : "none",
      transition: "border-color var(--dur-base) var(--ease-out), transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: feature ? "21 / 9" : "4 / 3",
      overflow: "hidden",
      isolation: "isolate"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transform: hover ? "scale(1.08)" : "scale(1)",
      transition: "transform 1s var(--ease-out)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(8,7,5,0.05) 25%, rgba(8,7,5,0.55) 100%), linear-gradient(90deg, rgba(8,7,5,0.28), transparent 55%)",
      opacity: hover ? 0.5 : 1,
      transition: "opacity var(--dur-slow) var(--ease-soft)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(8,7,5,0) 30%, rgba(8,7,5,0.78) 100%)",
      opacity: hover ? 1 : 0,
      transition: "opacity var(--dur-slow) var(--ease-soft)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: hover ? "140%" : "-120%",
      width: "65%",
      height: "100%",
      zIndex: 4,
      background: "linear-gradient(100deg, transparent 25%, rgba(255,244,220,0.18) 50%, transparent 75%)",
      transform: "skewX(-18deg)",
      transition: "left 0.85s var(--ease-soft)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
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
      textTransform: "uppercase"
    }
  }, code, " \xB7 ", category), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
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
      transition: "transform 0.45s var(--ease-out), opacity var(--dur-base) var(--ease-soft)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h12M12 6l7 6-7 6"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "22px",
      right: "22px",
      bottom: "22px",
      zIndex: 3,
      color: "#FFFAF0",
      transform: hover ? "translateY(0)" : "translateY(14px)",
      opacity: hover ? 1 : 0,
      transition: "transform var(--dur-slow) var(--ease-out), opacity var(--dur-base) var(--ease-soft)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontFamily: "var(--font-mono)",
      fontSize: "10.5px",
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, category), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "6px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: 1.05
    }
  }, title))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 26px 26px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10.5px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--accent-deep)"
    }
  }, code, units ? ` · ${units}` : ""), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "8px 0 12px",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "26px",
      lineHeight: 1.1,
      color: "var(--ink)"
    }
  }, title), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--ink-2)",
      fontSize: "14px",
      lineHeight: 1.6
    }
  }, summary), (format || location) && /*#__PURE__*/React.createElement("dl", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: "16px",
      margin: "20px 0 0",
      paddingTop: "18px",
      borderTop: "1px solid var(--rule)"
    }
  }, format && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
    style: {
      color: "var(--muted)",
      fontFamily: "var(--font-mono)",
      fontSize: "10.5px",
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, "Format"), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: "5px 0 0",
      color: "var(--ink)",
      fontSize: "13px",
      lineHeight: 1.45
    }
  }, format)), location && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
    style: {
      color: "var(--muted)",
      fontFamily: "var(--font-mono)",
      fontSize: "10.5px",
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, "Location"), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: "5px 0 0",
      color: "var(--ink)",
      fontSize: "13px",
      lineHeight: 1.45
    }
  }, location)))));
}
Object.assign(__ds_scope, { InventoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/InventoryCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatStrip.jsx
try { (() => {
/**
 * StatStrip — the bordered stat row used in the hero and section bands.
 * Big serif figures with a mono uppercase caption, divided by hairline
 * rules. `onPhoto` switches to light type with translucent rules.
 */
function StatStrip({
  stats,
  onPhoto = false,
  columns,
  style
}) {
  const cols = columns || stats.length;
  const ruleColor = onPhoto ? "rgba(255,250,240,0.14)" : "var(--rule)";
  const topRule = onPhoto ? "rgba(255,250,240,0.22)" : "var(--rule)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
      borderTop: `1px solid ${topRule}`,
      ...style
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("article", {
    key: s.label,
    style: {
      padding: "20px 24px 8px 0",
      borderRight: (i + 1) % cols === 0 ? "none" : `1px solid ${ruleColor}`
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "clamp(2rem, 3vw, 2.8rem)",
      lineHeight: 1,
      color: onPhoto ? "#FFFAF0" : "var(--ink)"
    }
  }, s.value), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "8px",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: onPhoto ? "rgba(255,250,240,0.7)" : "var(--muted)"
    }
  }, s.label))));
}
Object.assign(__ds_scope, { StatStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatStrip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Field — a labelled form input. Mono uppercase label above a sharp-cornered
 * input on the page background; focus reddens the border with a soft red
 * focus ring. Set `multiline` for a textarea, `wide` to span a 2-col grid.
 */
function Field({
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
    transition: "border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)"
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: "8px",
      gridColumn: wide ? "1 / -1" : "auto",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)",
      fontFamily: "var(--font-mono)",
      fontSize: "10.5px",
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({}, rest, {
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...control,
      resize: "vertical"
    }
  })) : /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: control
  })));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// ui_kits/airport_media_site/ClientTrust.jsx
try { (() => {
/* Client trust — rotating circular display of approved public clients
   (horizontal scroll on mobile), campaign category chips, support copy.
   Plus the operator-credibility "Why Us" / Growth Layer section. */

function ClientTrust() {
  const {
    Eyebrow
  } = window.DS;
  const clients = window.SITE.FEATURED_CLIENTS;
  const types = window.SITE.CAMPAIGN_TYPES;
  const n = clients.length;
  const radius = 210;
  return /*#__PURE__*/React.createElement("section", {
    className: "section clients",
    id: "clients"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Clients \xB7 Brand trust"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Brands that have ", /*#__PURE__*/React.createElement("em", null, "travelled with us"), ".")), /*#__PURE__*/React.createElement("p", {
    className: "section-head-right"
  }, "Mukesh Arts has worked across mobile retail, ceramics, jewellery, technology, automotive, casting, and regional corporate campaigns.")), /*#__PURE__*/React.createElement("div", {
    className: "client-orbit",
    "aria-hidden": "false"
  }, /*#__PURE__*/React.createElement("div", {
    className: "orbit-ring"
  }, clients.map((c, i) => {
    const angle = 360 / n * i;
    return /*#__PURE__*/React.createElement("span", {
      key: c,
      className: "orbit-node",
      style: {
        transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "orbit-chip"
    }, c));
  })), /*#__PURE__*/React.createElement("div", {
    className: "orbit-core"
  }, /*#__PURE__*/React.createElement("span", {
    className: "orbit-core-k"
  }, "Trusted across"), /*#__PURE__*/React.createElement("strong", null, "8 sectors"), /*#__PURE__*/React.createElement("span", {
    className: "orbit-core-s"
  }, "Selected public clients"))), /*#__PURE__*/React.createElement("div", {
    className: "client-scroll"
  }, clients.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: "scroll-chip"
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "campaign-types"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ct-label"
  }, "Campaign categories"), /*#__PURE__*/React.createElement("div", {
    className: "ct-chips"
  }, types.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "ct-chip"
  }, t))))));
}
function WhyUs() {
  const {
    Eyebrow,
    Card
  } = window.DS;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "why-us",
    style: {
      background: "var(--bg-deep)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "blue"
  }, "Why us \xB7 Growth layer"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Built for advertiser trust, airport execution, ", /*#__PURE__*/React.createElement("em", null, "and faster campaign decisions"), ".")), /*#__PURE__*/React.createElement("p", {
    className: "section-head-right"
  }, "Mukesh Arts brings local OOH execution strength, airport protocol coordination, client handling, and creative understanding under one operating partner.")), /*#__PURE__*/React.createElement("div", {
    className: "why-grid"
  }, window.SITE.WHY_US.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.n
  }, /*#__PURE__*/React.createElement("span", {
    className: "why-card-num"
  }, c.n), /*#__PURE__*/React.createElement("h3", null, c.t), /*#__PURE__*/React.createElement("p", null, c.p))))));
}
window.ClientTrust = ClientTrust;
window.WhyUs = WhyUs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/airport_media_site/ClientTrust.jsx", error: String((e && e.message) || e) }); }

// ui_kits/airport_media_site/Closing.jsx
try { (() => {
/* Team POCs, contact form, and footer (updated office address). */
function getInitials(name) {
  return name.split(" ").slice(0, 2).map(p => p[0]).join("");
}
function Team() {
  const {
    Eyebrow,
    Card
  } = window.DS;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "team"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Owner-side POCs"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Clear contacts, without a homepage ", /*#__PURE__*/React.createElement("em", null, "built around faces"), ".")), /*#__PURE__*/React.createElement("p", {
    className: "section-head-right"
  }, "The public brand stays focused on the airport media offer. Serious leads route through the form and are matched to the right owner-side person.")), /*#__PURE__*/React.createElement("div", {
    className: "team-grid"
  }, window.SITE.POCS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "poc-initials"
  }, getInitials(p.name)), /*#__PURE__*/React.createElement("span", {
    className: "poc-role"
  }, p.role), /*#__PURE__*/React.createElement("h3", null, p.name), /*#__PURE__*/React.createElement("p", null, p.focus))))));
}
function Contact() {
  const {
    Eyebrow,
    Button,
    Field
  } = window.DS;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "contact",
    style: {
      background: "var(--bg-deep)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Request media kit"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      marginTop: 16
    }
  }, "Tell us the campaign window. We'll suggest ", /*#__PURE__*/React.createElement("em", null, "the right inventory path"), "."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Share a brief and an owner-side response follows within one working day with the right media kit and availability.")), /*#__PURE__*/React.createElement("form", {
    className: "contact-form",
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    placeholder: "Full name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Brand / company",
    placeholder: "Brand / company"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Phone / WhatsApp",
    placeholder: "+91"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    placeholder: "name@brand.com"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Campaign window",
    placeholder: "Festive \xB7 Q3 \xB7 launch"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Inventory interest",
    placeholder: "Digital, static, full plan"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    multiline: true,
    wide: true,
    rows: 4,
    placeholder: "Campaign brief, preferred dates, or notes"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    style: {
      gridColumn: "1/-1",
      justifySelf: "start"
    }
  }, "Request Media Kit")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "foot-brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark"
  }, /*#__PURE__*/React.createElement("img", {
    className: "mark-dark",
    src: "../../assets/logo/mukesh-arts-mark.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "mark-light",
    src: "../../assets/logo/mukesh-arts-mark-light.svg",
    alt: ""
  })), /*#__PURE__*/React.createElement("h3", null, "Rajkot International Airport \xD7 Mukesh Arts")), /*#__PURE__*/React.createElement("p", null, "Premium airport media across Rajkot International Airport, operated by Mukesh Arts. Digital, static, and backlit inventory with consultative campaign planning.")), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h6", null, "Sections"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#why-us"
  }, "Why Airport")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#connectivity"
  }, "Connectivity")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#inventory"
  }, "Inventory")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#clients"
  }, "Clients")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Contact")))), /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("h6", null, "Reach"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Mukesh Art Main Office")), /*#__PURE__*/React.createElement("li", null, "Plot No. 71, Survey No. 145,", /*#__PURE__*/React.createElement("br", null), "Jambudiya, Morbi, Gujarat \u2014 363642"), /*#__PURE__*/React.createElement("li", {
    style: {
      marginTop: 8
    }
  }, "Operational media: Rajkot International Airport"), /*#__PURE__*/React.createElement("li", null, "Owner-side response within 1 working day")))), /*#__PURE__*/React.createElement("div", {
    className: "foot-base"
  }, /*#__PURE__*/React.createElement("span", null, "Airport media \xB7 Rajkot International Airport \xD7 Mukesh Arts"), /*#__PURE__*/React.createElement("span", null, "Concept site \xB7 ", new Date().getFullYear()))));
}
window.Team = Team;
window.Contact = Contact;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/airport_media_site/Closing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/airport_media_site/Connectivity.jsx
try { (() => {
/* Connectivity — custom route map graphic with Rajkot as the hub.
   Pure SVG (scales responsively via viewBox), dark blue with red routes. */
function Connectivity() {
  const {
    Eyebrow
  } = window.DS;
  const hub = {
    x: 232,
    y: 286,
    label: "Rajkot Int'l",
    code: "RAJ"
  };
  const cities = [{
    x: 772,
    y: 96,
    city: "Delhi",
    code: "DEL"
  }, {
    x: 880,
    y: 220,
    city: "Mumbai",
    code: "BOM"
  }, {
    x: 900,
    y: 350,
    city: "Pune",
    code: "PNQ"
  }, {
    x: 824,
    y: 470,
    city: "Hyderabad",
    code: "HYD"
  }, {
    x: 688,
    y: 520,
    city: "Bengaluru",
    code: "BLR"
  }];
  const path = c => {
    const mx = (hub.x + c.x) / 2;
    const my = Math.min(hub.y, c.y) - 70;
    return `M ${hub.x} ${hub.y} Q ${mx} ${my} ${c.x} ${c.y}`;
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section connectivity",
    id: "connectivity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "blue"
  }, "Connectivity"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Connected to India's key ", /*#__PURE__*/React.createElement("em", null, "metro markets"), ".")), /*#__PURE__*/React.createElement("p", {
    className: "section-head-right"
  }, "Rajkot International Airport connects Gujarat's business corridor with India's major metro markets \u2014 making airport media valuable for both regional and national brands.")), /*#__PURE__*/React.createElement("div", {
    className: "route-frame"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1000 580",
    className: "route-svg",
    role: "img",
    "aria-label": "Route map from Rajkot International Airport to Delhi, Mumbai, Pune, Hyderabad and Bengaluru"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "hubGlow",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--accent)",
    stopOpacity: "0.55"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--accent)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("g", {
    className: "route-grid"
  }, [120, 240, 360, 480].map(y => /*#__PURE__*/React.createElement("line", {
    key: "h" + y,
    x1: "40",
    y1: y,
    x2: "960",
    y2: y
  })), [160, 320, 480, 640, 800].map(x => /*#__PURE__*/React.createElement("line", {
    key: "v" + x,
    x1: x,
    y1: "40",
    x2: x,
    y2: "540"
  }))), cities.map((c, i) => /*#__PURE__*/React.createElement("path", {
    key: c.code,
    d: path(c),
    className: "route-line",
    style: {
      animationDelay: `${i * 0.4}s`
    }
  })), /*#__PURE__*/React.createElement("circle", {
    cx: hub.x,
    cy: hub.y,
    r: "64",
    fill: "url(#hubGlow)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: hub.x,
    cy: hub.y,
    r: "9",
    className: "route-hub"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: hub.x,
    cy: hub.y,
    r: "9",
    className: "route-hub-pulse"
  }), /*#__PURE__*/React.createElement("text", {
    x: hub.x,
    y: hub.y + 34,
    className: "route-hub-label",
    textAnchor: "middle"
  }, hub.label.toUpperCase()), /*#__PURE__*/React.createElement("text", {
    x: hub.x,
    y: hub.y + 54,
    className: "route-hub-code",
    textAnchor: "middle"
  }, hub.code, " \xB7 HUB"), cities.map(c => {
    const left = c.x > hub.x + 300 ? false : c.x < 760;
    return /*#__PURE__*/React.createElement("g", {
      key: c.code,
      className: "route-node"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: c.x,
      cy: c.y,
      r: "5.5",
      className: "route-dot"
    }), /*#__PURE__*/React.createElement("text", {
      x: c.x,
      y: c.y - 16,
      textAnchor: "middle",
      className: "route-city"
    }, c.city), /*#__PURE__*/React.createElement("text", {
      x: c.x,
      y: c.y + 26,
      textAnchor: "middle",
      className: "route-code"
    }, c.code));
  })))));
}
window.Connectivity = Connectivity;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/airport_media_site/Connectivity.jsx", error: String((e && e.message) || e) }); }

// ui_kits/airport_media_site/Hero.jsx
try { (() => {
/* Hero — full-bleed airport media background, eyebrow, H1, subcopy, CTAs, stat strip */
function Hero({
  theme
}) {
  const {
    Button,
    Eyebrow,
    StatStrip
  } = window.DS;
  const Arrow = () => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-photo day",
    style: {
      backgroundImage: `url(${window.SITE.IMG("hero-day")})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-photo night",
    style: {
      backgroundImage: `url(${window.SITE.IMG("hero-night")})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container hero-content"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: "var(--accent)"
    }
  }, "Rajkot International Airport Media"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1"
  }, "Airport media visibility,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "engineered by Mukesh Arts.")), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Digital screens, static hoardings, backlit media, and campaign packages across Rajkot International Airport \u2014 inventory you can shortlist and a path to a CRM-tracked relationship."), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onPhoto: true,
    href: "#contact",
    icon: /*#__PURE__*/React.createElement(Arrow, null)
  }, "Request Media Kit"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onPhoto: true,
    href: "#inventory"
  }, "View Inventory"))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 22
    }
  }, /*#__PURE__*/React.createElement(StatStrip, {
    onPhoto: true,
    stats: window.SITE.AIRPORT_STATS
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/airport_media_site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/airport_media_site/Inventory.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inventory — lead-gated. Gate form first; once unlocked, a SegmentedControl
   filters a grid of InventoryCards (portfolio/media-owner styling). */
function Inventory({
  theme
}) {
  const {
    Eyebrow,
    Button,
    Field,
    SegmentedControl,
    InventoryCard
  } = window.DS;
  const [unlocked, setUnlocked] = React.useState(false);
  const [cat, setCat] = React.useState("All");
  const all = window.SITE.INVENTORY;
  const featured = all.slice(0, 4);
  const visible = cat === "All" ? all : all.filter(i => i.category === cat);
  const imgFor = item => window.SITE.IMG(theme === "night" && item.imageNight ? item.imageNight : item.image);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "inventory"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Inventory \xB7 Portfolio"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Inventory presented like ", /*#__PURE__*/React.createElement("em", null, "a body of work"), ".")), /*#__PURE__*/React.createElement("p", {
    className: "section-head-right"
  }, "We show range, credibility, and starting level publicly. Full board, references, and commercials unlock once a buyer shares their campaign window.")), !unlocked ? /*#__PURE__*/React.createElement("div", {
    className: "gate-preview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gate-collage"
  }, featured.map((item, i) => /*#__PURE__*/React.createElement("article", {
    key: item.code,
    className: i === 0 ? "collage-feature" : ""
  }, /*#__PURE__*/React.createElement("div", {
    className: "gate-layer",
    style: {
      backgroundImage: `url(${imgFor(item)})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "gate-collage-meta"
  }, /*#__PURE__*/React.createElement("span", null, item.category), /*#__PURE__*/React.createElement("h4", null, item.title))))), /*#__PURE__*/React.createElement("form", {
    className: "gate-form",
    onSubmit: e => {
      e.preventDefault();
      setUnlocked(true);
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      gridColumn: "1/-1"
    }
  }, "Buyer info first"), /*#__PURE__*/React.createElement("h3", null, "Unlock the full inventory board"), /*#__PURE__*/React.createElement("p", null, "Serious buyers share their campaign window before seeing full inventory depth \u2014 the lead routes straight to owner-side follow-up."), /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    placeholder: "Marketing lead name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Company",
    placeholder: "Brand / agency"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Phone / WhatsApp",
    placeholder: "+91"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Campaign window",
    placeholder: "Festive \xB7 Q3 \xB7 launch burst"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Inventory interest",
    wide: true,
    placeholder: "Digital package, front-lit board, full airport plan"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    style: {
      gridColumn: "1/-1"
    }
  }, "Unlock Demo Inventory"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    options: ["All", ...window.SITE.CATEGORIES],
    value: cat,
    onChange: setCat
  })), /*#__PURE__*/React.createElement("div", {
    className: "portfolio"
  }, visible.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.code,
    className: `work-cell ${item.feature && cat === "All" ? "span-all" : ""}`
  }, /*#__PURE__*/React.createElement(InventoryCard, _extends({}, item, {
    image: imgFor(item),
    feature: item.feature && cat === "All"
  }))))))));
}
window.Inventory = Inventory;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/airport_media_site/Inventory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/airport_media_site/Nav.jsx
try { (() => {
/* Top navigation — brand mark, primary nav, palette + day/night toggles, CTA */
function Logo() {
  return /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "brand",
    "aria-label": "Rajkot International Airport \xD7 Mukesh Arts"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark"
  }, /*#__PURE__*/React.createElement("img", {
    className: "mark-dark",
    src: "../../assets/logo/mukesh-arts-mark.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "mark-light",
    src: "../../assets/logo/mukesh-arts-mark-light.svg",
    alt: ""
  })), /*#__PURE__*/React.createElement("span", {
    className: "brand-text"
  }, /*#__PURE__*/React.createElement("b", null, "Rajkot International Airport"), /*#__PURE__*/React.createElement("small", null, "\xD7 Mukesh Arts \xB7 Airport Media")));
}
function PaletteToggle({
  brand,
  onToggle
}) {
  const isRedSky = brand === "redSky";
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `pill-toggle ${isRedSky ? "is-red-sky" : ""}`,
    onClick: onToggle,
    "aria-label": "Switch palette",
    title: "Switch palette"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pill-dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pill-label"
  }, /*#__PURE__*/React.createElement("small", null, "Palette"), /*#__PURE__*/React.createElement("b", null, isRedSky ? "Red / Sky" : "Maroon / Blue")));
}
function ThemeToggle({
  theme,
  onToggle
}) {
  const isNight = theme === "night";
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "pill-toggle",
    onClick: onToggle,
    "aria-pressed": isNight,
    "aria-label": "Switch day / night",
    title: "Switch day / night"
  }, /*#__PURE__*/React.createElement("span", {
    className: `scene ${isNight ? "night" : ""}`,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "scene-orb"
  }), /*#__PURE__*/React.createElement("span", {
    className: "scene-line"
  })), /*#__PURE__*/React.createElement("span", {
    className: "pill-label"
  }, /*#__PURE__*/React.createElement("small", null, isNight ? "Night" : "Day"), /*#__PURE__*/React.createElement("b", null, isNight ? "Runway" : "Takeoff")));
}
function Nav({
  theme,
  brand,
  toggleTheme,
  toggleBrand
}) {
  const {
    Button
  } = window.DS;
  const links = [["#why", "Why Airport"], ["#connectivity", "Connectivity"], ["#inventory", "Inventory"], ["#clients", "Clients"], ["#why-us", "Growth Layer"], ["#contact", "Contact"]];
  return /*#__PURE__*/React.createElement("header", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav-inner"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links",
    "aria-label": "Primary"
  }, links.map(([href, label]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "nav-end"
  }, /*#__PURE__*/React.createElement(PaletteToggle, {
    brand: brand,
    onToggle: toggleBrand
  }), /*#__PURE__*/React.createElement(ThemeToggle, {
    theme: theme,
    onToggle: toggleTheme
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#contact"
  }, "Request Media Kit"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/airport_media_site/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/airport_media_site/app.jsx
try { (() => {
/* App root — owns palette (brand) + theme state, flips <html> data attrs. */
function App() {
  const [theme, setTheme] = React.useState("day");
  const [brand, setBrand] = React.useState("maroonBlue");
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.brand = brand;
  }, [theme, brand]);
  const {
    Nav,
    Hero,
    Connectivity,
    ClientTrust,
    WhyUs,
    Inventory,
    Team,
    Contact,
    Footer
  } = window;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    theme: theme,
    brand: brand,
    toggleTheme: () => setTheme(t => t === "night" ? "day" : "night"),
    toggleBrand: () => setBrand(b => b === "maroonBlue" ? "redSky" : "maroonBlue")
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    theme: theme
  }), /*#__PURE__*/React.createElement(Connectivity, null), /*#__PURE__*/React.createElement(WhyUs, null), /*#__PURE__*/React.createElement(Inventory, {
    theme: theme
  }), /*#__PURE__*/React.createElement(ClientTrust, null), /*#__PURE__*/React.createElement(Team, null), /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/airport_media_site/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/airport_media_site/data.js
try { (() => {
/* Airport media site — demo data (plain JS, exposed on window.SITE).
   Mirrors lib/data.ts from the source repo, with the redesign updates:
   full "Rajkot International Airport" naming, connectivity routes,
   public client list, campaign types, and corrected POC roles. */
window.SITE = {
  IMG: name => `../../assets/img/${name}.png`,
  AIRPORT_STATS: [{
    value: "1.25–1.30L",
    label: "Passenger visits / month"
  }, {
    value: "4,200–4,400",
    label: "Passenger visits / day"
  }, {
    value: "28",
    label: "Daily flight movements"
  }, {
    value: "₹2L+",
    label: "Starting inventory range"
  }],
  // NEW — connectivity routes from the Rajkot hub
  AIRPORT_CONNECTIONS: [{
    city: "Delhi",
    code: "DEL"
  }, {
    city: "Mumbai",
    code: "BOM"
  }, {
    city: "Pune",
    code: "PNQ"
  }, {
    city: "Hyderabad",
    code: "HYD"
  }, {
    city: "Bengaluru",
    code: "BLR"
  }],
  // NEW — approved public-facing clients only
  FEATURED_CLIENTS: ["Apple", "Google", "Vivo", "Oppo", "Jade Blue", "Simpolo", "Poojara Mobiles", "Radhika Jewellers"],
  // NEW — campaign category chips
  CAMPAIGN_TYPES: ["Events", "Campaigns", "Private Campaigns", "Corporate Campaigns", "Temporary Agency Campaigns"],
  WHY_US: [{
    n: "01",
    t: "Local OOH execution",
    p: "On-ground production, mounting, and rollout strength built over years of Saurashtra outdoor campaigns."
  }, {
    n: "02",
    t: "Airport protocol",
    p: "ASCO coordination, site access, and approvals handled the way only an on-site operating partner can."
  }, {
    n: "03",
    t: "Faster decisions",
    p: "Creative and media understanding in one team, so campaign windows close without agency ping-pong."
  }],
  CATEGORIES: ["Digital Packages", "Static Boards", "Passenger Journey", "Custom Plans"],
  INVENTORY: [{
    code: "PKG-01",
    title: "Arrival + SHA Digital Loop",
    category: "Digital Packages",
    format: "8 ft x 3 ft horizontal LED loop",
    units: "18 units",
    location: "Arrival belts & Security Hold Area gates",
    summary: "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
    image: "pkg-01",
    feature: true
  }, {
    code: "PKG-03",
    title: "Vertical Display Network",
    category: "Digital Packages",
    format: "8× 75in + 6× 65in vertical displays",
    units: "14 units",
    location: "Check-in, SHA, cafes, lounges, gates",
    summary: "Portrait display network for product-led campaigns and eye-level airport visibility.",
    image: "pkg-03"
  }, {
    code: "AD-3",
    title: "Departure Entry Front-Lit Board",
    category: "Static Boards",
    format: "30 ft x 10 ft front-lit board",
    units: "1 board",
    location: "Terminal city-side departure entry",
    summary: "Departure-side static inventory for brands that want road-facing airport visibility.",
    image: "ad-3",
    imageNight: "ad-3-night"
  }, {
    code: "DIGITAL-FULL",
    title: "Full-Airport Digital Bundle",
    category: "Passenger Journey",
    format: "All digital formats across PKG 1–3",
    units: "39 surfaces",
    location: "Full airport journey",
    summary: "A complete digital campaign path from check-in to gate areas and arrival movement.",
    image: "digital-full"
  }, {
    code: "BACKLIT-WS",
    title: "Laptop Workstation Backlit",
    category: "Passenger Journey",
    format: "Static backlit workstation unit",
    units: "Selected unit",
    location: "Laptop workstation area",
    summary: "A close-view indoor placement suited to business travellers and high-intent dwell time.",
    image: "backlit-ws"
  }, {
    code: "PLAN",
    title: "Custom Airport Campaign Plan",
    category: "Custom Plans",
    format: "Digital, static & backlit recommendation",
    units: "Built per campaign",
    location: "Matched to audience, timing & objective",
    summary: "A consultative package when the buyer knows the goal but needs help choosing inventory.",
    image: "pkg-01"
  }],
  POCS: [{
    name: "Mukesh Patel",
    role: "Founder / Owner",
    focus: "Commercial direction, long-term relationships, and owner-level approvals."
  }, {
    name: "Mayur Patel",
    role: "Managing Partner",
    focus: "Client coordination, campaign follow-through, and business operations."
  }, {
    name: "Ridham Bhuva",
    role: "Airport ASCO & Manager",
    focus: "Airport protocol, site visits, approvals, and operations coordination."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/airport_media_site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.InventoryCard = __ds_scope.InventoryCard;

__ds_ns.StatStrip = __ds_scope.StatStrip;

__ds_ns.Field = __ds_scope.Field;

})();
