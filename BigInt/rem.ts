/* Autogenerated by /.tools/auto.ts */

import key from "../symbols/rem.ts";
import value from "./methods/rem.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, key, { value });

export default key;