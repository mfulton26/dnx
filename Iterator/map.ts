import { prototype } from "../Iterator.ts";

import key from "../symbols/map.ts";
import value from "./prototype/map.ts";

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
