import * as React from "react";

/**
 * Premium connected tab bar / segmented control — the refined replacement for
 * loose filter chips. One hairline track; the active segment fills ink with a
 * thin red top accent. Scrolls horizontally rather than wrapping.
 *
 * @startingPoint section="Navigation" subtitle="Segmented control / tabs" viewport="700x120"
 */
export interface SegmentedControlProps {
  /** Segment options — strings, or `{ value, label }` objects. */
  options: Array<string | { value: string; label: string }>;
  /** Currently selected value. */
  value: string;
  /** Called with the newly selected value. */
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
