import * as Iterator from "../Iterator.ts";

import key from "../symbols/toIterable.ts";
import value from "./methods/toIterable.ts";

declare global {
  interface Iterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Iterator.prototype, key, { value });

export default key;
