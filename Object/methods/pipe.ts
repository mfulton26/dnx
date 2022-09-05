export default function pipe<T, R>(this: T, transform: (value: T) => R): R {
  return transform(this);
}
