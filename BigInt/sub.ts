/* Autogenerated by /.tools/auto.ts */

import key from "../symbols/sub.ts";
import value from "./methods/sub.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, key, { value });

export default key;