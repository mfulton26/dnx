import key from "../symbols/isAtLeast.ts";
import value from "./methods/isAtLeast.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, key, { value });

export default key;
