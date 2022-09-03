import * as AsyncIterator from "../../AsyncIterator.ts";

export default function filter<T>(
  this: AsyncIterator<T>,
  predicate: (value: T) => unknown,
) {
  const next = async (): Promise<IteratorResult<T>> => {
    for (
      let { done, value } = await this.next();
      !done;
      ({ done, value } = await this.next())
    ) {
      if (predicate(value)) return { done: false, value };
    }
    return { done: true, value: undefined };
  };
  return AsyncIterator.from({ next });
}
