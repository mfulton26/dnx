import $ from "dnx/$.ts";
import "dnx/$/add.ts";

function add<T>(this: T[], item: T) {
  this.push(item);
  return this;
}

declare global {
  interface Array<T> {
    [$.add]: typeof add;
  }
  interface ReadonlyArray<T> {
    [$.add]: typeof add;
  }
}

Object.defineProperty(Array.prototype, $.add, { value: add });
