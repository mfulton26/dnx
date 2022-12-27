import key from "../ZERO.ts";

declare global {
  interface BigInt {
    constructor: BigIntConstructor;
  }

  interface BigIntConstructor {
    [key]: bigint;
  }
}

Object.defineProperty(Number, key, { value: 0n });

export default key;
