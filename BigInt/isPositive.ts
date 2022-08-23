import key from "../symbols/isPositive.ts";
import value from "./methods/isPositive.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, key, { value });

export default key;
