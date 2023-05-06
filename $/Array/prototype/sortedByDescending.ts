import type Selectors from "dnx/Selectors.d.ts";

import compareByDescending from "dnx/comparisons/compareByDescending.ts";

export default function sortedByDescending<T>(
  this: readonly T[],
  ...selectors: Selectors<T>
) {
  return this.slice().sort(compareByDescending(...selectors).compare);
}
