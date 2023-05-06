import type Selectors from "dnx/Selectors.d.ts";

import compareBy from "dnx/comparisons/compareBy.ts";

export default function sortedBy<T>(
  this: readonly T[],
  ...selectors: Selectors<T>
) {
  return this.slice().sort(compareBy(...selectors).compare);
}
