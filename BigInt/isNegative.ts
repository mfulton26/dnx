import key from "../symbols/isNegative.ts";
import value from "./methods/isNegative.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, key, { value });

export default key;
