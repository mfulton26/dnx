import $ from "dnx/$.ts";

const min = Symbol("$.min");

declare module "dnx/$.ts" {
  interface DnxSymbolConstructor {
    min: typeof min;
  }
}

Object.defineProperty($, "min", { value: min });
