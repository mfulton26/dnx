import key from "../symbols/compareTo.ts";
import value from "./methods/compareTo.ts";

declare global {
  interface String {
    [key]: typeof value;
  }
}

Object.defineProperty(String.prototype, key, { value });

export default key;
