/* Autogenerated by /.tools/auto.ts */

import key from "../lineIterator.ts";
import value from "./methods/lineIterator.ts";

declare global {
  interface String {
    [key]: typeof value;
  }
}

Object.defineProperty(String.prototype, key, { value });

