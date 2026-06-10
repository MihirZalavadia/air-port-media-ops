import * as React from "react";

interface Stat {
  value: string;
  label: string;
}

/**
 * The bordered stat row — big serif figures over mono uppercase captions,
 * divided by hairlines. Use in the hero (`onPhoto`) and in light section
 * bands.
 *
 * @startingPoint section="Content" subtitle="Airport stat strip" viewport="700x160"
 */
export interface StatStripProps {
  /** Each stat: `{ value, label }`. */
  stats: Stat[];
  /** Light type + translucent rules, for placement over photography. @default false */
  onPhoto?: boolean;
  /** Override column count (defaults to stats.length). */
  columns?: number;
  style?: React.CSSProperties;
}

export function StatStrip(props: StatStripProps): JSX.Element;
