import key from "../symbols/build.ts";
import value from "./methods/build.ts";

declare global {
  interface ArrayConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(Array, key, { value });

export default key;
