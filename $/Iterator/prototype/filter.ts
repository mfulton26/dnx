import * as Iterator from "dnx/Iterator.ts";

export default function filter<T>(
  this: Iterator<T>,
  predicate: (value: T) => unknown,
) {
  const next = (): IteratorResult<T> => {
    for (
      let { done, value } = this.next();
      !done;
      ({ done, value } = this.next())
    ) {
      if (predicate(value)) return { done: false, value };
    }
    return { done: true, value: undefined };
  };
  return Iterator.from({ next });
}
