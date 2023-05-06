import * as AsyncIterator from "dnx/AsyncIterator.ts";

export default function map<T, R>(
  this: AsyncIterator<T>,
  transform: (value: T) => R,
) {
  const next = async (): Promise<IteratorResult<R>> => {
    const { done, value } = await this.next();
    if (done) return { done: true, value: undefined };
    return { done: false, value: transform(value) };
  };
  return AsyncIterator.from({ next });
}
