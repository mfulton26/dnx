/* Autogenerated by /.tools/auto.ts */

import * as AsyncIterator from "../AsyncIterator.ts";

import key from "../forEach.ts";
import value from "./methods/forEach.ts";

declare global {
  interface AsyncIterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(AsyncIterator.prototype, key, { value });

