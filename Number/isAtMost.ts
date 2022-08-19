import key from "../symbols/isAtMost.ts";
import value from "./methods/isAtMost.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
