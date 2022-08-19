import { prototype } from "../Iterator.ts";

import key from "../symbols/map.ts";
import value from "./methods/map.ts";

declare global {
  interface Iterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(prototype, key, { value });

export default key;
