/* Autogenerated by /.tools/auto.ts */

import * as Iterator from "../Iterator.ts";

import key from "../symbols/indexed.ts";
import value from "./methods/indexed.ts";

declare global {
  interface Iterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Iterator.prototype, key, { value });

export default key;