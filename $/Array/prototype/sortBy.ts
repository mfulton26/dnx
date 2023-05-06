import type Selectors from "dnx/Selectors.d.ts";

import compareBy from "dnx/comparisons/compareBy.ts";

export default function sortBy<T>(this: T[], ...selectors: Selectors<T>) {
  return this.sort(compareBy(...selectors).compare);
}
