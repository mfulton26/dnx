import toIterable from "../toIterable.ts";

export default function count<T>(
  this: Iterator<T>,
  predicate?: (value: T) => unknown,
) {
  let result = 0;
  if (predicate === undefined) for (const _ of this[toIterable]()) result++;
  else for (const value of this[toIterable]()) if (predicate(value)) result++;
  return result;
}
