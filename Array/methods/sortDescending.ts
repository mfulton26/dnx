import type Collatable from "../../Collatable.d.ts";

import compareValues from "../../comparisons/compareValues.ts";

export default function sortDescending<T extends Collatable>(this: T[]) {
  return this.sort((a, b) => compareValues(b, a));
}
