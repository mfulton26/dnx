/* Autogenerated by /.tools/auto.ts */

import key from "../isPositive.ts";
import value from "./methods/isPositive.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

