import type Collatable from "../Collatable.d.ts";

import Collator from "../Collator.ts";
import compareValues from "./compareValues.ts";

/**
 * Returns a `Collator` that compares values using reversed natural ordering.
 */
export default function reverseOrder<T extends Collatable>(): Collator<T> {
  return new Collator((a: T, b: T) => compareValues(b, a));
}
