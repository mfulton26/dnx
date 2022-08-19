export default function* map<T, R>(
  this: Iterator<T>,
  transform: (value: T) => R,
) {
  for (const value of { [Symbol.iterator]: () => this }) yield transform(value);
}
