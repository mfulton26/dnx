import * as Iterator from "dnx/Iterator.ts";

export default function reduce<T>(
  this: Iterator<T>,
  operation: (accumulator: T, value: T) => T,
  initialValue?: T,
): IterableIterator<T>;
export default function reduce<T, U>(
  this: Iterator<T>,
  operation: (accumulator: U, value: T) => U,
  initialValue: U,
): IterableIterator<T>;
export default function reduce<T, U>(
  this: Iterator<T>,
  operation: (accumulator: U, value: T) => U,
  initialValue?: U,
) {
  let accumulator: U;
  let isUninitialized = true;
  const next = (): IteratorResult<U> => {
    if (isUninitialized) {
      if (arguments.length === 1) {
        const { done, value } = this.next();
        if (done) {
          throw new TypeError("Reduce of empty iterator with no initial value");
        }
        accumulator = value as unknown as U;
      } else {
        accumulator = initialValue!;
      }
      isUninitialized = false;
    }
    const { done, value } = this.next();
    if (done) return { done: true, value: undefined };
    return { done: false, value: operation(accumulator, value) };
  };
  return Iterator.from({ next });
}
