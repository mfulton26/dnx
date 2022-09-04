import _build from "../../.CollectionConstructor/methods/build.ts";

import "../../WeakSet/add.ts";

// deno-lint-ignore ban-types
export default function build<T extends object>(
  generate: () => Iterable<T>,
): WeakSet<T> {
  return _build(new WeakSet<T>(), generate);
}
