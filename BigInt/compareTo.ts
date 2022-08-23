import key from "../symbols/compareTo.ts";
import value from "./methods/compareTo.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, key, { value });

export default key;
