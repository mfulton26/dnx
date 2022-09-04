import _build from "../../.CollectionConstructor/methods/build.ts";

import Queue from "../../Queue.ts";
import "../../Queue/add.ts";

export default function build<T>(generate: () => Iterable<T>): Queue<T> {
  return _build(new Queue<T>(), generate);
}
