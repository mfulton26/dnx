import type Collatable from "../Collatable.d.ts";

import compareValues from "./compareValues.ts";

/**
 * Returns the least of the specified values or `undefined` if not values are provided.
 */
export default function minOf<T extends Collatable>(): undefined;
/**
 * Returns the least of the specified values.
 */
export default function minOf<T extends Collatable>(
  ...values: [firstValue: T, ...restValues: T[]]
): T;
/**
 * Returns the least of the specified values or `undefined` if not values are provided.
 */
export default function minOf<T extends Collatable>(
  ...values: T[]
): T | undefined;
export default function minOf<T extends Collatable>(
  ...values: T[]
): T | undefined {
  const iterator = values[Symbol.iterator]();
  let { done, value } = iterator.next();
  if (done) return;
  let min: T = value;
  for (
    { done, value } = iterator.next();
    !done;
    { done, value } = iterator.next()
  ) {
    if (compareValues(value, min) < 0) min = value;
  }
  return min;
}
