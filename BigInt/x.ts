import key from "../symbols/x.ts";
import get from "./getters/x.ts";

declare global {
  interface Number {
    [key]: typeof get;
  }
}

Object.defineProperty(Number.prototype, key, { get });

export default key;
