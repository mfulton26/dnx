import type Collatable from "../Collatable.d.ts";

import compareTo from "../compareTo.ts";

/**
 * Compares two `Collatable` values.
 */
export default function compareValues<T extends Collatable | null | undefined>(
  a: T,
  b: T,
): number {
  if (a === b) return 0;
  if (a === undefined) return 1;
  if (b === undefined) return -1;
  if (a === null) return -1;
  if (b === null) return 1;
  return a[compareTo](b);
}
