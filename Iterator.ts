import * as Generator from "./Generator.ts";

export const prototype = Object.getPrototypeOf(Generator.prototype);

export function from<T>(
  { next }: { next(): IteratorResult<T> },
): IterableIterator<T> {
  return Object.create(prototype, { next: { value: next } });
}
