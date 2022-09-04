import type Selectors from "../../Selectors.d.ts";

import compareByDescending from "../../comparisons/compareByDescending.ts";

export default function sortByDescending<T>(
  this: T[],
  ...selectors: Selectors<T>
) {
  return this.sort(compareByDescending(...selectors).compare);
}
