/* Autogenerated by /.tools/auto.ts */

import key from "../split.ts";
import value from "./methods/split.ts";

declare global {
  interface String {
    [key]: typeof value;
  }
}

Object.defineProperty(String.prototype, key, { value });

