/* Autogenerated by /.tools/auto.ts */

import key from "../split.ts";
import value from "./methods/split.ts";

declare global {
  interface Array<T> {
    [key]: typeof value;
  }
  interface ReadonlyArray<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Array.prototype, key, { value });

