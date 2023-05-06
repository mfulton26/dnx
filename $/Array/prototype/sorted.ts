import type Collatable from "dnx/Collatable.d.ts";

import compareValues from "dnx/comparisons/compareValues.ts";

export default function sorted<T extends Collatable>(this: readonly T[]) {
  return this.slice().sort((a, b) => compareValues(a, b));
}
