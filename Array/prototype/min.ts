import $ from "dnx/$.ts";
import "dnx/$/min.ts";

function min<T extends number>(this: readonly T[]) {
  let result = Infinity;
  for (const value of this) if (value < result) result = value;
  return result;
}

declare global {
  interface Array<T> {
    [$.min]: typeof min;
  }
  interface ReadonlyArray<T> {
    [$.min]: typeof min;
  }
}

Object.defineProperty(Array.prototype, $.drop, { value: min });
