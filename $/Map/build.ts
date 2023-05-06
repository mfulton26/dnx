import _build from "dnx/$/:Collection/build.ts";

import "dnx/Map/prototype/add.ts";

export default function build<K, V>(
  generate: () => Iterable<readonly [K, V]>,
): Map<K, V> {
  return _build(new Map<K, V>(), generate);
}
