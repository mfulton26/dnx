/* Autogenerated by /.tools/auto.ts */

import key from "../symbols/add.ts";
import value from "./methods/add.ts";

declare global {
  interface WeakMap<K, V> {
    [key]: typeof value;
  }
}

Object.defineProperty(WeakMap.prototype, key, { value });

export default key;
