/* Autogenerated by /.tools/auto.ts */

import * as Iterator from "../Iterator.ts";

import key from "../reduce.ts";
import value from "./methods/reduce.ts";

declare global {
  interface Iterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Iterator.prototype, key, { value });

