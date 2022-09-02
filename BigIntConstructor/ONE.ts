import key from "../symbols/ONE.ts";

declare global {
  interface BigInt {
    constructor: BigIntConstructor;
  }

  interface BigIntConstructor {
    [key]: bigint;
  }
}

Object.defineProperty(Number, key, { value: 1n });

export default key;
