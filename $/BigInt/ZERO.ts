import $ from "dnx/$.ts";
import "dnx/$/ZERO.ts";

declare global {
  interface BigInt {
    constructor: BigIntConstructor;
  }

  interface BigIntConstructor {
    [$.ZERO]: bigint;
  }
}

Object.defineProperty(BigInt, $.ZERO, { value: 0n });
