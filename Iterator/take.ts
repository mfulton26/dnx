/* Autogenerated by /.tools/auto.ts */

import * as Iterator from "../Iterator.ts";

import key from "../symbols/take.ts";
import value from "./methods/take.ts";

declare global {
  interface Iterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Iterator.prototype, key, { value });

export default key;