/* Autogenerated by /.tools/auto.ts */

import key from "../symbols/pow.ts";
import value from "./methods/pow.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, key, { value });

export default key;