/* Autogenerated by /.tools/auto.ts */

import * as Iterator from "../Iterator.ts";

import key from "../toAsync.ts";
import value from "./methods/toAsync.ts";

declare global {
  interface Iterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Iterator.prototype, key, { value });

