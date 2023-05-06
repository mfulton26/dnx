import * as AsyncIterator from "dnx/AsyncIterator.ts";

export default function reduce<T>(
  this: AsyncIterator<T>,
  operation: (accumulator: T, value: T) => T,
  initialValue?: T,
): AsyncIterableIterator<T>;
export default function reduce<T, U>(
  this: AsyncIterator<T>,
  operation: (accumulator: U, value: T) => U,
  initialValue: U,
): AsyncIterableIterator<T>;
export default function reduce<T, U>(
  this: AsyncIterator<T>,
  operation: (accumulator: U, value: T) => U,
  initialValue?: U,
) {
  let accumulator: U;
  let isUninitialized = true;
  const next = async (): Promise<IteratorResult<U>> => {
    if (isUninitialized) {
      if (arguments.length === 1) {
        const { done, value } = await this.next();
        if (done) {
          throw new TypeError(
            "Reduce of empty async iterator with no initial value",
          );
        }
        accumulator = value as unknown as U;
      } else {
        accumulator = initialValue!;
      }
      isUninitialized = false;
    }
    const { done, value } = await this.next();
    if (done) return { done: true, value: undefined };
    return { done: false, value: operation(accumulator, value) };
  };
  return AsyncIterator.from({ next });
}
