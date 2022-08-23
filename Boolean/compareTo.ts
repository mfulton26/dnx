import key from "../symbols/compareTo.ts";
import value from "./methods/compareTo.ts";

declare global {
  interface Boolean {
    [key]: typeof value;
  }
}

Object.defineProperty(Boolean.prototype, key, { value });

export default key;
