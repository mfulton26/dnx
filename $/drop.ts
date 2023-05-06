import $ from "dnx/$.ts";

const drop = Symbol("$.drop");

declare module "dnx/$.ts" {
  interface DnxSymbolConstructor {
    drop: typeof drop;
  }
}

Object.defineProperty($, "drop", { value: drop });
