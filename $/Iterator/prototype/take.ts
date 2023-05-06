import * as Iterator from "dnx/Iterator.ts";

export default function take<T>(this: Iterator<T>, n: number) {
  let count = 0;
  const next = (): IteratorResult<T> => {
    if (count === n) return { done: true, value: undefined };
    count++;
    return this.next();
  };
  return Iterator.from({ next });
}
