import key from "../symbols/isLessThan.ts";
import value from "./methods/isLessThan.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, key, { value });

export default key;
