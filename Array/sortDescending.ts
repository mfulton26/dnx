/* Autogenerated by /.tools/auto.ts */

import key from "../sortDescending.ts";
import value from "./methods/sortDescending.ts";

declare global {
  interface Array<T> {
    [key]: typeof value;
  }
  interface ReadonlyArray<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Array.prototype, key, { value });

