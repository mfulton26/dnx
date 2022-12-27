import key from "../x.ts";
import get from "./getters/x.ts";

declare global {
  interface BigInt {
    [key]: ReturnType<typeof get>;
  }
}

Object.defineProperty(Number.prototype, key, { get });

export default key;
