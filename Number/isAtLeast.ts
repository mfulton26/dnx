import key from "../symbols/isAtLeast.ts";
import value from "./methods/isAtLeast.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
