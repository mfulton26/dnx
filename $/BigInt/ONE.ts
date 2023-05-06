import $ from "dnx/$.ts";
import "dnx/$/ONE.ts";

declare global {
  interface BigInt {
    constructor: BigIntConstructor;
  }

  interface BigIntConstructor {
    [$.ONE]: bigint;
  }
}

Object.defineProperty(BigInt, $.ONE, { value: 1n });
