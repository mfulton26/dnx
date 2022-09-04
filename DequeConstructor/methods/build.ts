import _build from "../../.CollectionConstructor/methods/build.ts";

import Deque from "../../Deque.ts";
import "../../Deque/add.ts";

export default function build<T>(generate: () => Iterable<T>): Deque<T> {
  return _build(new Deque<T>(), generate);
}
