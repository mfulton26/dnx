/* Autogenerated by /.tools/auto.ts */

import key from "../symbols/from.ts";
import value from "./methods/from.ts";

declare global {
  interface WeakSetConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(WeakSet, key, { value });

export default key;
