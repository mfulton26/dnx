import _of from "../../.CollectionConstructor/methods/of.ts";

import "../../WeakMap/add.ts";

// deno-lint-ignore ban-types
export default function of<K extends object, V>(
  ...items: (readonly [K, V])[]
): WeakMap<K, V> {
  return _of(new WeakMap<K, V>(), ...items);
}
