import key from "../symbols/isZero.ts";
import value from "./methods/isZero.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, key, { value });

export default key;
