import key from "../ONE.ts";

declare global {
  interface Number {
    constructor: NumberConstructor;
  }

  interface NumberConstructor {
    [key]: number;
  }
}

Object.defineProperty(Number, key, { value: 1 });

export default key;
