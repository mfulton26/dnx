export default function toIterable<T>(this: Iterator<T>): Iterable<T> {
  return { [Symbol.iterator]: () => this };
}
