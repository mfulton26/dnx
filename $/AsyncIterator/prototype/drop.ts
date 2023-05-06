import * as AsyncIterator from "dnx/AsyncIterator.ts";

export default function drop<T>(this: AsyncIterator<T>, n: number) {
  let count = 0;
  const next = async (): Promise<IteratorResult<T>> => {
    for (; count < n; count++) {
      const { done } = await this.next();
      if (done) return { done: true, value: undefined };
    }
    return this.next();
  };
  return AsyncIterator.from({ next });
}
