import type Collatable from "../../Collatable.d.ts";

import compareValues from "../../comparisons/compareValues.ts";

export default function sortedDescending<T extends Collatable>(this: T[]) {
  return this.slice().sort((a, b) => compareValues(b, a));
}
