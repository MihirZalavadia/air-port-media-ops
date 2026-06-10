import * as React from "react";

/**
 * The small mono label above section headings — uppercase, wide-tracked,
 * with a short leading hairline.
 *
 * @startingPoint section="Content" subtitle="Section eyebrow label" viewport="700x100"
 */
export interface EyebrowProps {
  children: React.ReactNode;
  /** Accent (red) or structural blue. @default "accent" */
  tone?: "accent" | "blue";
  style?: React.CSSProperties;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
