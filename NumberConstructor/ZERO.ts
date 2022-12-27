import key from "../ZERO.ts";

declare global {
  interface Number {
    constructor: NumberConstructor;
  }

  interface NumberConstructor {
    [key]: number;
  }
}

Object.defineProperty(Number, key, { value: 0 });

export default key;
