import key from "dnx/symbols/slices.ts";
import value from "dnx/Array/prototype/slices.ts";

declare global {
  interface Array<T> {
    [key]: typeof value;
  }
  interface ReadonlyArray<T> {
    [key]: typeof value;
  }
}

Array.prototype[key] = value;

export default key;
