export default function toAsyncIterable<T>(
  this: AsyncIterator<T>,
): AsyncIterable<T> {
  return { [Symbol.asyncIterator]: () => this };
}
