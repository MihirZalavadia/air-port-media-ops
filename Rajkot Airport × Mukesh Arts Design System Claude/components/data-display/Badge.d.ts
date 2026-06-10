import * as React from "react";

/**
 * Small mono tag. `solid` is the off-white plate used over photography (the
 * inventory code · category tag); `outline` is a hairline pill for status
 * labels on light/dark surfaces.
 *
 * @startingPoint section="Content" subtitle="Tag / status badge" viewport="700x100"
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "solid" */
  variant?: "solid" | "outline";
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
