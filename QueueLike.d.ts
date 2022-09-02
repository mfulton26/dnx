export default interface QueueLike<T> {
  push(item: T): void;
  shift(): T | undefined;
  [Symbol.iterator](): Iterator<T>;
}
