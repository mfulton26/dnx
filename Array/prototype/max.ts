import $ from "dnx/$.ts";
import "dnx/$/max.ts";

function max<T extends number>(this: readonly T[]) {
  let result = -Infinity;
  for (const value of this) if (value > result) result = value;
  return result;
}

declare global {
  interface Array<T> {
    [$.max]: typeof max;
  }
  interface ReadonlyArray<T> {
    [$.max]: typeof max;
  }
}

Object.defineProperty(Array.prototype, $.drop, { value: max });
