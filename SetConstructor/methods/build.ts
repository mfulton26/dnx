import _build from "../../.CollectionConstructor/methods/build.ts";

import "../../Set/add.ts";

export default function build<T>(generate: () => Iterable<T>): Set<T> {
  return _build(new Set<T>(), generate);
}
