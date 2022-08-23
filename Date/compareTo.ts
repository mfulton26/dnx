import key from "../symbols/compareTo.ts";
import value from "./methods/compareTo.ts";

declare global {
  interface Date {
    [key]: typeof value;
  }
}

Object.defineProperty(Date.prototype, key, { value });

export default key;
