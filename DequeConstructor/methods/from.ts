import _from from "../../.CollectionConstructor/methods/from.ts";

import Deque from "../../Deque.ts";
import "../../Deque/add.ts";

export default function from<T>(source: Iterable<T> | ArrayLike<T>): Deque<T>;
export default function from<T, U>(
  source: Iterable<T> | ArrayLike<T>,
  mapFn: (v: T, k: number) => U,
  thisArg?: unknown,
): Deque<U>;
export default function from<T, U>(
  source: Iterable<T> | ArrayLike<T>,
  mapFn: (v: T, k: number) => U = (v) => v as unknown as U,
  thisArg: unknown = null,
): Deque<U> {
  return _from(new Deque<U>(), source, mapFn, thisArg);
}
