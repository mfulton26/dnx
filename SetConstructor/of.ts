/* Autogenerated by /.tools/auto.ts */

import key from "../of.ts";
import value from "./methods/of.ts";

declare global {
  interface SetConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(Set, key, { value });

