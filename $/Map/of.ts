import _of from "../../.CollectionConstructor/methods/of.ts";

import "../../Map/add.ts";

export default function of<K, V>(...items: (readonly [K, V])[]): Map<K, V> {
  return _of(new Map<K, V>(), ...items);
}
