import type Selectors from "../Selectors.d.ts";

import Collator from "../Collator.ts";
import compareValuesBy from "./compareValuesBy.ts";

/**
 * Returns a reversed `Collator` using the specified selectors.
 */
export default function compareByDescending<T>(
  ...selectors: Selectors<T>
): Collator<T> {
  return new Collator((a: T, b: T) => compareValuesBy(b, a, ...selectors));
}
