import * as Iterator from "../../Iterator.ts";

export default function drop<T>(this: Iterator<T>, n: number) {
  let count = 0;
  const next = (): IteratorResult<T> => {
    for (; count < n; count++) {
      const { done } = this.next();
      if (done) return { done: true, value: undefined };
    }
    return this.next();
  };
  return Iterator.from({ next });
}
