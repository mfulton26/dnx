/* Autogenerated by /.tools/auto.ts */

import key from "../build.ts";
import value from "./methods/build.ts";

declare global {
  interface MapConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(Map, key, { value });

