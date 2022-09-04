import _of from "../../.CollectionConstructor/methods/of.ts";

import "../../WeakSet/add.ts";

// deno-lint-ignore ban-types
export default function of<T extends object>(...items: T[]): WeakSet<T> {
  return _of(new WeakSet<T>(), ...items);
}
