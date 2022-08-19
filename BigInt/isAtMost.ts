import key from "../symbols/isAtMost.ts";
import value from "./methods/isAtMost.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, key, { value });

export default key;
