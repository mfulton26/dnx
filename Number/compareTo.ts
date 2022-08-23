import key from "../symbols/compareTo.ts";
import value from "./methods/compareTo.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
