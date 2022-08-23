import key from "../symbols/isPositive.ts";
import value from "./methods/isPositive.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
