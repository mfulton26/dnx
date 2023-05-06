import * as AsyncIterator from "dnx/AsyncIterator.ts";

export default function map<T, R>(
  this: AsyncIterator<T>,
  transform: (value: T) => AsyncIterable<R>,
) {
  let asyncIterator: AsyncIterator<R> | undefined;
  const next = async (): Promise<IteratorResult<R>> => {
    while (true) {
      if (asyncIterator === undefined) {
        const { done, value } = await this.next();
        if (done) return { done: true, value: undefined };
        asyncIterator = transform(value)[Symbol.asyncIterator]();
      }
      const result = await asyncIterator.next();
      if (result.done) {
        asyncIterator = undefined;
        continue;
      }
      return result;
    }
  };
  return AsyncIterator.from({ next });
}
