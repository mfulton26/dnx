import type QueueLikeConstructor from "dnx/QueueLikeConstructor.d.ts";

import * as Iterator from "dnx/Iterator.ts";

export default function slices<T>(
  this: Iterator<T>,
  size: number,
  step = 1,
  { Queue = Array }: { Queue?: QueueLikeConstructor<T> } = {},
) {
  const queue = new Queue();
  let isEmpty = true;
  const next = (): IteratorResult<T[]> => {
    if (isEmpty) {
      for (let n = 0; n < size; n++) {
        const { done, value } = this.next();
        if (done) return { done: true, value: undefined };
        queue.push(value);
      }
      isEmpty = false;
      return { done: false, value: [...queue] };
    }
    for (let n = 0; n < step; n++) {
      const { done, value } = this.next();
      if (done) return { done: true, value: undefined };
      queue.shift();
      queue.push(value);
    }
    return { done: false, value: [...queue] };
  };
  return Iterator.from({ next });
}
