import _of from "../../.CollectionConstructor/methods/of.ts";

import Queue from "../../Queue.ts";
import "../../Queue/add.ts";

export default function of<T>(...items: T[]): Queue<T> {
  return _of(new Queue<T>(), ...items);
}
