/* Autogenerated by /.tools/auto.ts */

import key from "../isZero.ts";
import value from "./methods/isZero.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

