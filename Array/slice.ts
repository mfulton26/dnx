/* Autogenerated by /.tools/auto.ts */

import key from "../symbols/slice.ts";
import value from "./methods/slice.ts";

declare global {
  interface Array<T> {
    [key]: typeof value;
  }
  interface ReadonlyArray<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Array.prototype, key, { value });

export default key;
