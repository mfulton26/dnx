import $ from "dnx/$.ts";

const add = Symbol("$.add");

declare module "dnx/$.ts" {
  interface DnxSymbolConstructor {
    add: typeof add;
  }
}

Object.defineProperty($, "add", { value: add });
