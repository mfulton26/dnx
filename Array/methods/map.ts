export default function map<T, R>(
  this: ReadonlyArray<T>,
  transform: (value: T) => R,
) {
  const result: R[] = [];
  for (const value of this) result.push(transform(value));
  return result;
}
