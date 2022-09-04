import _from from "../../.CollectionConstructor/methods/from.ts";

import Queue from "../../Queue.ts";
import "../../Queue/add.ts";

export default function from<T>(source: Iterable<T> | ArrayLike<T>): Queue<T>;
export default function from<T, U>(
  source: Iterable<T> | ArrayLike<T>,
  mapFn: (v: T, k: number) => U,
  thisArg?: unknown,
): Queue<U>;
export default function from<T, U>(
  source: Iterable<T> | ArrayLike<T>,
  mapFn: (v: T, k: number) => U = (v) => v as unknown as U,
  thisArg: unknown = null,
): Queue<U> {
  return _from(new Queue<U>(), source, mapFn, thisArg);
}
