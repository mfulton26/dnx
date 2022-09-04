import _build from "../../.CollectionConstructor/methods/build.ts";

import "../../Map/add.ts";

export default function build<K, V>(
  generate: () => Iterable<readonly [K, V]>,
): Map<K, V> {
  return _build(new Map<K, V>(), generate);
}
