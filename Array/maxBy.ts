/* Autogenerated by /.tools/auto.ts */

import key from "../symbols/maxBy.ts";
import value from "./methods/maxBy.ts";

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