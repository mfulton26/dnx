import key from "../symbols/integer.ts";
import value from "./methods/integer.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
