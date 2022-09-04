import type Selectors from "../../Selectors.d.ts";

import compareByDescending from "../../comparisons/compareByDescending.ts";

export default function sortedByDescending<T>(
  this: T[],
  ...selectors: Selectors<T>
) {
  return this.slice().sort(compareByDescending(...selectors).compare);
}
