/* Autogenerated by /.tools/auto.ts */

import key from "../symbols/mod.ts";
import value from "./methods/mod.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, key, { value });

export default key;