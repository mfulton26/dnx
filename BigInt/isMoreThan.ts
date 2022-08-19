import key from "../symbols/isMoreThan.ts";
import value from "./methods/isMoreThan.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, key, { value });

export default key;
