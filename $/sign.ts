import $ from "dnx/$.ts";

const sign = Symbol("$.sign");

declare module "dnx/$.ts" {
  interface DnxSymbolConstructor {
    sign: typeof sign;
  }
}

Object.defineProperty($, "sign", { value: sign });
