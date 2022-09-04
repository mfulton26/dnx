import _of from "../../.CollectionConstructor/methods/of.ts";

import Deque from "../../Deque.ts";
import "../../Deque/add.ts";

export default function of<T>(...items: T[]): Deque<T> {
  return _of(new Deque<T>(), ...items);
}
