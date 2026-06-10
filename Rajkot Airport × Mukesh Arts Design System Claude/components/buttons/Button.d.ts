import * as React from "react";

/**
 * The brand's primary action control — sharp corners, uppercase mono label,
 * calm hover lift. Use `primary` for the main CTA (one per view), `ghost` as
 * the secondary, `link` for inline forward navigation. Set `onPhoto` over
 * dark imagery.
 *
 * @startingPoint section="Buttons" subtitle="Primary / ghost / link CTA" viewport="700x200"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "ghost" | "link";
  /** Control height. @default "md" */
  size?: "sm" | "md";
  /** Invert styling for placement over dark photography. @default false */
  onPhoto?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string;
  /** Optional trailing icon node (e.g. an arrow SVG). */
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
