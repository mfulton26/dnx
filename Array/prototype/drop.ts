import $ from "dnx/$.ts";
import "dnx/$/drop.ts";

function drop<T>(this: readonly T[], n: number) {
  return this.slice(n);
}

declare global {
  interface Array<T> {
    [$.drop]: typeof drop;
  }
  interface ReadonlyArray<T> {
    [$.drop]: typeof drop;
  }
}

Object.defineProperty(Array.prototype, $.drop, { value: drop });
