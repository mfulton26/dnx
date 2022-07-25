export default function* map<T, R>(
  this: IterableIterator<T>,
  transform: (value: T) => R,
) {
  for (const value of this) yield transform(value);
}
