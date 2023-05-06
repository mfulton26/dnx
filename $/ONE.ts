import $ from "dnx/$.ts";

const ONE = Symbol("$.ONE");

declare module "dnx/$.ts" {
  interface DnxSymbolConstructor {
    ONE: typeof ONE;
  }
}

Object.defineProperty($, "ONE", { value: ONE });
