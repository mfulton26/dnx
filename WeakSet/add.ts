/* Autogenerated by /.tools/auto.ts */

import key from "../symbols/add.ts";
import value from "./methods/add.ts";

declare global {
  interface WeakSet<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(WeakSet.prototype, key, { value });

export default key;
