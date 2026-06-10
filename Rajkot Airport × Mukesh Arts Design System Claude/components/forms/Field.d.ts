import * as React from "react";

/**
 * A labelled form input — mono uppercase label over a sharp-cornered field
 * with a red focus ring. The building block of the lead-gate and contact
 * forms. Use `multiline` for a textarea, `wide` to span a 2-column form grid.
 *
 * @startingPoint section="Forms" subtitle="Labelled input field" viewport="700x140"
 */
export interface FieldProps {
  /** Mono uppercase label shown above the control. */
  label: string;
  placeholder?: string;
  /** Render a textarea instead of an input. @default false */
  multiline?: boolean;
  /** Textarea rows. @default 4 */
  rows?: number;
  /** Span the full width of a 2-column form grid. @default false */
  wide?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
  type?: string;
  style?: React.CSSProperties;
}

export function Field(props: FieldProps): JSX.Element;
