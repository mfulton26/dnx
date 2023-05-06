import $ from "dnx/$.ts";

const ZERO = Symbol("$.ZERO");

declare module "dnx/$.ts" {
  interface DnxSymbolConstructor {
    ZERO: typeof ZERO;
  }
}

Object.defineProperty($, "ZERO", { value: ZERO });
