import $ from "dnx/$.ts";
import "dnx/$/map.ts";

function map<T, R>(this: readonly T[], transform: (value: T) => R) {
  const result: R[] = [];
  for (const value of this) result.push(transform(value));
  return result;
}

declare global {
  interface Array<T> {
    [$.map]: typeof map;
  }
  interface ReadonlyArray<T> {
    [$.map]: typeof map;
  }
}

Object.defineProperty(Array.prototype, $.drop, { value: map });
