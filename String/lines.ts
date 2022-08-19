import key from "../symbols/lines.ts";
import value from "./methods/lines.ts";

declare global {
  interface String {
    [key]: typeof value;
  }
}

Object.defineProperty(String.prototype, key, { value });

export default key;
