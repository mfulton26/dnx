import * as Iterator from "../Iterator.ts";

import key from "../symbols/toArray.ts";
import value from "./methods/toArray.ts";

declare global {
  interface Iterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Iterator.prototype, key, { value });

export default key;
