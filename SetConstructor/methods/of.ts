import _of from "../../.CollectionConstructor/methods/of.ts";

import "../../Set/add.ts";

export default function of<T>(...items: T[]): Set<T> {
  return _of(new Set<T>(), ...items);
}
