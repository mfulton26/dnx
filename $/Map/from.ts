import _from from "../../.CollectionConstructor/methods/from.ts";

import "../../Map/add.ts";

export default function from<K, V>(
  source: Iterable<readonly [K, V]> | ArrayLike<readonly [K, V]>,
): Map<K, V>;
export default function from<K, V, L, W>(
  source: Iterable<readonly [K, V]> | ArrayLike<readonly [K, V]>,
  mapFn: (v: readonly [K, V], k: number) => readonly [L, W],
  thisArg?: unknown,
): Map<L, W>;
export default function from<K, V, L, W>(
  source: Iterable<readonly [K, V]> | ArrayLike<readonly [K, V]>,
  mapFn: (v: readonly [K, V], k: number) => readonly [L, W] = (v) =>
    v as unknown as [L, W],
  thisArg: unknown = null,
): Map<L, W> {
  return _from(new Map<L, W>(), source, mapFn, thisArg);
}
