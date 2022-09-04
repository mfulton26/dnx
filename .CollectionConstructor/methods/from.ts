import add from "../../symbols/add.ts";

export default function from<T, C extends { [add](item: T): void }>(
  destination: C,
  source: Iterable<T> | ArrayLike<T>,
): C;
export default function from<T, U, C extends { [add](item: U): void }>(
  destination: C,
  source: Iterable<T> | ArrayLike<T>,
  mapFn: (v: T, k: number) => U,
  thisArg?: unknown,
): C;
export default function from<T, U, C extends { [add](item: U): void }>(
  destination: C,
  source: Iterable<T> | ArrayLike<T>,
  mapFn: (v: T, k: number) => U = (v) => v as unknown as U,
  thisArg: unknown = null,
): C {
  if ("length" in source) {
    const { length } = source;
    for (let i = 0; i < length; i++) {
      destination[add](mapFn.call(thisArg, source[i], i));
    }
  } else {
    let i = 0;
    for (const value of source) {
      destination[add](mapFn.call(thisArg, value, i++));
    }
  }
  return destination;
}
