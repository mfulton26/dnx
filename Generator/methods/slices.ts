import type QueueLikeConstructor from "../../QueueLikeConstructor.d.ts";

export default function* slices<T>(
  this: Generator<T>,
  size: number,
  step = 1,
  { Queue = Array }: { Queue?: QueueLikeConstructor<T> } = {},
) {
  const queue = new Queue();
  for (let n = 0; n < size; n++) {
    const { done, value } = this.next();
    if (done) return;
    queue.push(value);
  }
  yield [...queue];
  while (true) {
    for (let n = 0; n < step; n++) {
      const { done, value } = this.next();
      if (done) return;
      queue.shift();
      queue.push(value);
    }
    yield [...queue];
  }
}
