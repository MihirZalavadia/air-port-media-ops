import * as React from "react";

/**
 * The surface primitive — square corners, hairline border, soft hover lift +
 * reddening border. Wrap any panel content (why-pillars, POC cards, logo
 * cards). Disable motion with `interactive={false}`.
 *
 * @startingPoint section="Content" subtitle="Surface card with hover lift" viewport="700x260"
 */
export interface CardProps {
  children: React.ReactNode;
  /** Enable hover lift + reddening border. @default true */
  interactive?: boolean;
  /** Inner padding in px (or any CSS value). @default 32 */
  padding?: number | string;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
