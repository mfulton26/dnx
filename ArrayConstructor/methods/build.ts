import _build from "../../.CollectionConstructor/methods/build.ts";

import "../../Array/add.ts";

export default function build<T>(generate: () => Iterable<T>): T[] {
  return _build([], generate);
}
