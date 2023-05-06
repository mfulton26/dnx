import * as AsyncIterator from "dnx/AsyncIterator.ts";

export default function take<T>(this: AsyncIterator<T>, n: number) {
  let count = 0;
  const next = async (): Promise<IteratorResult<T>> => {
    if (count === n) return { done: true, value: undefined };
    count++;
    return await this.next();
  };
  return AsyncIterator.from({ next });
}
