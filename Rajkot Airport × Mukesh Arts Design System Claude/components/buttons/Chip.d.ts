import * as React from "react";

/**
 * A pill-shaped filter toggle — used for the inventory category filters.
 * Fills solid ink when active.
 *
 * @startingPoint section="Buttons" subtitle="Pill filter chip" viewport="700x120"
 */
export interface ChipProps {
  children: React.ReactNode;
  /** Selected state — fills ink. @default false */
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Chip(props: ChipProps): JSX.Element;
