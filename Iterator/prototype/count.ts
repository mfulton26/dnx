export default function count<T>(
  this: IterableIterator<T>,
  predicate?: (value: T) => unknown,
) {
  let result = 0;
  if (predicate === undefined) for (const _ of this) result++;
  else for (const value of this) if (predicate(value)) result++;
  return result;
}
