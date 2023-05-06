import type Selectors from "dnx/Selectors.d.ts";

import compareByDescending from "dnx/comparisons/compareByDescending.ts";

export default function sortByDescending<T>(
  this: T[],
  ...selectors: Selectors<T>
) {
  return this.sort(compareByDescending(...selectors).compare);
}
