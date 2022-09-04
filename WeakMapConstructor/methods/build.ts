import _build from "../../.CollectionConstructor/methods/build.ts";

import "../../WeakMap/add.ts";

// deno-lint-ignore ban-types
export default function build<K extends object, V>(
  generate: () => Iterable<readonly [K, V]>,
): WeakMap<K, V> {
  return _build(new WeakMap<K, V>(), generate);
}
