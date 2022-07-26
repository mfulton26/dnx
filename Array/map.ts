import key from "../symbols/map.ts";
import value from "./prototype/map.ts";

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
