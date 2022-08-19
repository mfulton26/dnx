import key from "../symbols/safeInteger.ts";
import value from "./methods/safeInteger.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
