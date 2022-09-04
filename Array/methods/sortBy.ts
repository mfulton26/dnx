import type Selectors from "../../Selectors.d.ts";

import compareBy from "../../comparisons/compareBy.ts";

export default function sortBy<T>(this: T[], ...selectors: Selectors<T>) {
  return this.sort(compareBy(...selectors).compare);
}
