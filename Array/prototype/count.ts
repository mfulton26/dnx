import $ from "dnx/$.ts";
import "dnx/$/count.ts";

function count<T>(this: readonly T[], predicate?: (value: T) => unknown) {
  if (predicate === undefined) return this.length;
  let result = 0;
  for (const value of this) if (predicate(value)) result++;
  return result;
}

declare global {
  interface Array<T> {
    [$.count]: typeof count;
  }
  interface ReadonlyArray<T> {
    [$.count]: typeof count;
  }
}

Object.defineProperty(Array.prototype, $.count, { value: count });
