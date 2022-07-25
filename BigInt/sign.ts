import key from "dnx/symbols/sign.ts";
import value from "dnx/BigInt/prototype/sign.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

BigInt.prototype[key] = value;

export default key;
