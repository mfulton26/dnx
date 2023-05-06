import $ from "dnx/$.ts";

const max = Symbol("$.max");

declare module "dnx/$.ts" {
  interface DnxSymbolConstructor {
    max: typeof max;
  }
}

Object.defineProperty($, "max", { value: max });
