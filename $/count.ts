import $ from "dnx/$.ts";

const count = Symbol("$.count");

declare module "dnx/$.ts" {
  interface DnxSymbolConstructor {
    count: typeof count;
  }
}

Object.defineProperty($, "count", { value: count });
