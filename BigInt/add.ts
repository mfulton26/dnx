/* Autogenerated by /.tools/auto.ts */

import key from "../add.ts";
import value from "./methods/add.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, key, { value });

