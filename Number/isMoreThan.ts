/* Autogenerated by /.tools/auto.ts */

import key from "../symbols/isMoreThan.ts";
import value from "./methods/isMoreThan.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;