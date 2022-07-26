import { prototype } from "../Iterator.ts";

import key from "../symbols/slices.ts";
import value from "./prototype/slices.ts";

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
