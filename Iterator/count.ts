import * as Iterator from "../Iterator.ts";

import key from "../symbols/count.ts";
import value from "./methods/count.ts";

declare global {
  interface Iterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Iterator.prototype, key, { value });

export default key;
