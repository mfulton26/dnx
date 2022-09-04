import type Collatable from "../../Collatable.d.ts";

import compareValues from "../../comparisons/compareValues.ts";

export default function sort<T extends Collatable>(this: T[]) {
  return this.sort((a, b) => compareValues(a, b));
}
