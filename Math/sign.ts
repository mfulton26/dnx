import key from "../symbols/sign.ts";
import value from "./methods/sign.ts";

declare global {
  interface Math {
    [key]: typeof value;
  }
}

Object.defineProperty(Math, key, { value });

export default key;
