import * as React from "react";

/**
 * The signature portfolio/media-owner inventory card — a full-bleed photo
 * with darkening veils, an off-white `code · category` badge, a springing
 * circular arrow, and a metallic shine sweep on hover (photo zooms, card
 * lifts). Below: code, title, summary, and an optional Format/Location spec
 * list. Set `feature` for a wide 21:9 hero card.
 *
 * @startingPoint section="Content" subtitle="Airport inventory / media card" viewport="700x520"
 */
export interface InventoryCardProps {
  /** Unit code, e.g. "PKG-01". Shown in red mono, leads the card. */
  code: string;
  /** Category, e.g. "Digital Packages". */
  category: string;
  title: string;
  summary?: string;
  /** Spec value, e.g. "8 ft x 3 ft horizontal LED loop". */
  format?: string;
  /** Unit count, e.g. "18 units". Appended after the code. */
  units?: string;
  location?: string;
  /** Photo URL. */
  image: string;
  /** Wide 21:9 hero variant. @default false */
  feature?: boolean;
  style?: React.CSSProperties;
}

export function InventoryCard(props: InventoryCardProps): JSX.Element;
