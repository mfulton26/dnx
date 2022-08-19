export default function count<T>(
  this: ReadonlyArray<T>,
  predicate?: (value: T) => unknown,
) {
  if (predicate === undefined) return this.length;
  let result = 0;
  for (const value of this) if (predicate(value)) result++;
  return result;
}
