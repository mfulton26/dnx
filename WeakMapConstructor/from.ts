/* Autogenerated by /.tools/auto.ts */

import key from "../from.ts";
import value from "./methods/from.ts";

declare global {
  interface WeakMapConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(WeakMap, key, { value });

