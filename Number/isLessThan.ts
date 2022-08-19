import key from "../symbols/isLessThan.ts";
import value from "./methods/isLessThan.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
