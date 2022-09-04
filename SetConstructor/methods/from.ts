import _from from "../../.CollectionConstructor/methods/from.ts";

import "../../Set/add.ts";

export default function from<T>(source: Iterable<T> | ArrayLike<T>): Set<T>;
export default function from<T, U>(
  source: Iterable<T> | ArrayLike<T>,
  mapFn: (v: T, k: number) => U,
  thisArg?: unknown,
): Set<U>;
export default function from<T, U>(
  source: Iterable<T> | ArrayLike<T>,
  mapFn: (v: T, k: number) => U = (v) => v as unknown as U,
  thisArg: unknown = null,
): Set<U> {
  return _from(new Set<U>(), source, mapFn, thisArg);
}
