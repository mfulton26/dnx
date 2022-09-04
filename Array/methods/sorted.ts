import type Collatable from "../../Collatable.d.ts";

import compareValues from "../../comparisons/compareValues.ts";

export default function sorted<T extends Collatable>(this: T[]) {
  return this.slice().sort((a, b) => compareValues(a, b));
}
