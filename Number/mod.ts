/* Autogenerated by /.tools/auto.ts */

import key from "../mod.ts";
import value from "./methods/mod.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

