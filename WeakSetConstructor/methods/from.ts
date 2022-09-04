import _from from "../../.CollectionConstructor/methods/from.ts";

import "../../WeakSet/add.ts";

// deno-lint-ignore ban-types
export default function from<T extends object>(
  source: Iterable<T> | ArrayLike<T>,
): WeakSet<T>;
// deno-lint-ignore ban-types
export default function from<T, U extends object>(
  source: Iterable<T> | ArrayLike<T>,
  mapFn: (v: T, k: number) => U,
  thisArg?: unknown,
): WeakSet<U>;
// deno-lint-ignore ban-types
export default function from<T, U extends object>(
  source: Iterable<T> | ArrayLike<T>,
  mapFn: (v: T, k: number) => U = (v) => v as unknown as U,
  thisArg: unknown = null,
): WeakSet<U> {
  return _from(new WeakSet<U>(), source, mapFn, thisArg);
}
