/* Autogenerated by /.tools/auto.ts */

import key from "../symbols/build.ts";
import value from "./methods/build.ts";

declare global {
  interface StringConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(String, key, { value });

export default key;