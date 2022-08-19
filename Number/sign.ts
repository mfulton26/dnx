import key from "../symbols/sign.ts";
import value from "./methods/sign.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
