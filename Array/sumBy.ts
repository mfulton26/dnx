/* Autogenerated by /.tools/auto.ts */

import key from "../symbols/sumBy.ts";
import value from "./methods/sumBy.ts";

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