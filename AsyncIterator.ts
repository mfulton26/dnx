import * as AsyncGenerator from "./AsyncGenerator.ts";

import toAsync from "./Iterator/toAsync.ts";

export const prototype = Object.getPrototypeOf(AsyncGenerator.prototype);

export function from<T>(
  { next }: { next(): Promise<IteratorResult<T>> },
): AsyncIterableIterator<T> {
  return Object.create(prototype, { next: { value: next } });
}

export function of<T>(...items: T[]) {
  return items[Symbol.iterator]()[toAsync]();
}
