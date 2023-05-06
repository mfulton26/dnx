import $ from "dnx/$.ts";

const map = Symbol("$.map");

declare module "dnx/$.ts" {
  interface DnxSymbolConstructor {
    map: typeof map;
  }
}

Object.defineProperty($, "map", { value: map });
