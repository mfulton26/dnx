import _from from "../../.CollectionConstructor/methods/from.ts";

import "../../WeakMap/add.ts";

// deno-lint-ignore ban-types
export default function from<K extends object, V>(
  source: Iterable<readonly [K, V]> | ArrayLike<readonly [K, V]>,
): WeakMap<K, V>;
// deno-lint-ignore ban-types
export default function from<K, V, L extends object, W>(
  source: Iterable<readonly [K, V]> | ArrayLike<readonly [K, V]>,
  weakmapFn: (v: readonly [K, V], k: number) => readonly [L, W],
  thisArg?: unknown,
): WeakMap<L, W>;
// deno-lint-ignore ban-types
export default function from<K, V, L extends object, W>(
  source: Iterable<readonly [K, V]> | ArrayLike<readonly [K, V]>,
  weakmapFn: (v: readonly [K, V], k: number) => readonly [L, W] = (v) =>
    v as unknown as [L, W],
  thisArg: unknown = null,
): WeakMap<L, W> {
  return _from(new WeakMap<L, W>(), source, weakmapFn, thisArg);
}
