import toIterable from "../toIterable.ts";

export default function* map<T, R>(
  this: Iterator<T>,
  transform: (value: T) => R,
) {
  for (const value of this[toIterable]()) yield transform(value);
}
