import type Collatable from "dnx/Collatable.d.ts";

import compareValues from "dnx/comparisons/compareValues.ts";

export default function sort<T extends Collatable>(this: T[]) {
  return this.sort((a, b) => compareValues(a, b));
}
