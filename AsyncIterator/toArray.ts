/* Autogenerated by /.tools/auto.ts */

import * as AsyncIterator from "../AsyncIterator.ts";

import key from "../symbols/toArray.ts";
import value from "./methods/toArray.ts";

declare global {
  interface AsyncIterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(AsyncIterator.prototype, key, { value });

export default key;