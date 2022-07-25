interface Queue<T> {
  push(item: T): void;
  shift(): T | undefined;
  [Symbol.iterator](): Iterator<T>;
}

interface QueueConstructor<T> {
  new (): Queue<T>;
}

export default function* slices<T>(
  this: Iterator<T>,
  size: number,
  step = 1,
  { Queue = Array }: { Queue?: QueueConstructor<T> } = {},
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
