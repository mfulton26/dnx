import key from "../symbols/isNegative.ts";
import value from "./methods/isNegative.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
