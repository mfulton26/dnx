/* Autogenerated by /.tools/auto.ts */

import key from "../sortedByDescending.ts";
import value from "./methods/sortedByDescending.ts";

declare global {
  interface Array<T> {
    [key]: typeof value;
  }
  interface ReadonlyArray<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Array.prototype, key, { value });

