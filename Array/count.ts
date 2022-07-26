import key from "../symbols/count.ts";
import value from "./prototype/count.ts";

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
