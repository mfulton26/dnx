/* Autogenerated by /.tools/auto.ts */

import key from "../pipe.ts";
import value from "./methods/pipe.ts";

declare global {
  interface Object {
    [key]: typeof value;
  }
}

Object.defineProperty(Object.prototype, key, { value });

