import key from "dnx/symbols/slices.ts";
import value from "dnx/Iterator/prototype/slices.ts";

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
