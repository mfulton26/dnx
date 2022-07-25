import key from "dnx/symbols/map.ts";
import value from "dnx/Iterator/prototype/map.ts";

import { prototype } from "dnx/Iterator.ts";

declare global {
  interface IterableIterator<T> {
    [key]: typeof value;
  }
  interface Generator<T> {
    [key]: typeof value;
  }
}

prototype[key] = value;

export default key;
