/* Autogenerated by /.tools/auto.ts */

import * as AsyncIterator from "../AsyncIterator.ts";

import key from "../countBig.ts";
import value from "./methods/countBig.ts";

declare global {
  interface AsyncIterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(AsyncIterator.prototype, key, { value });

