import * as Iterator from "dnx/Iterator.ts";

export default function map<T, R>(
  this: Iterator<T>,
  transform: (value: T) => Iterable<R>,
) {
  let iterator: Iterator<R> | undefined;
  const next = (): IteratorResult<R> => {
    while (true) {
      if (iterator === undefined) {
        const { done, value } = this.next();
        if (done) return { done: true, value: undefined };
        iterator = transform(value)[Symbol.iterator]();
      }
      const result = iterator.next();
      if (result.done) {
        iterator = undefined;
        continue;
      }
      return result;
    }
  };
  return Iterator.from({ next });
}
