import { prototype } from "../Iterator.ts";

import key from "../symbols/slices.ts";
import value from "./methods/slices.ts";

declare global {
  interface Iterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(prototype, key, { value });

export default key;
