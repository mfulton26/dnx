/* Autogenerated by /.tools/auto.ts */

import key from "../symbols/pow.ts";
import value from "./methods/pow.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
