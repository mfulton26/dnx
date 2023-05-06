import * as Iterator from "dnx/Iterator.ts";

export default function map<T, R>(
  this: Iterator<T>,
  transform: (value: T) => R,
) {
  const next = (): IteratorResult<R> => {
    const { done, value } = this.next();
    if (done) return { done: true, value: undefined };
    return { done: false, value: transform(value) };
  };
  return Iterator.from({ next });
}
