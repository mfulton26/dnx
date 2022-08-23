import toIterable from "../toIterable.ts";

export default function countBig<T>(
  this: Iterator<T>,
  predicate?: (value: T) => unknown,
) {
  let result = 0n;
  if (predicate === undefined) for (const _ of this[toIterable]()) result++;
  else for (const value of this[toIterable]()) if (predicate(value)) result++;
  return result;
}
