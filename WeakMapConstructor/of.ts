/* Autogenerated by /.tools/auto.ts */

import key from "../symbols/of.ts";
import value from "./methods/of.ts";

declare global {
  interface WeakMapConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(WeakMap, key, { value });

export default key;