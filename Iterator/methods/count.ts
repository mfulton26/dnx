export default function count<T>(
  this: Iterator<T>,
  predicate?: (value: T) => unknown,
) {
  const iterable = { [Symbol.iterator]: () => this };
  let result = 0;
  if (predicate === undefined) for (const _ of iterable) result++;
  else for (const value of iterable) if (predicate(value)) result++;
  return result;
}
