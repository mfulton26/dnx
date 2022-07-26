import key from "../symbols/sign.ts";
import value from "./prototype/sign.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

BigInt.prototype[key] = value;

export default key;
