import type Selectors from "../../Selectors.d.ts";

import compareBy from "../../comparisons/compareBy.ts";

export default function sortedBy<T>(this: T[], ...selectors: Selectors<T>) {
  return this.slice().sort(compareBy(...selectors).compare);
}
