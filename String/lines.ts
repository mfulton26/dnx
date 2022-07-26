import key from "../symbols/lines.ts";
import value from "./prototype/lines.ts";

declare global {
  interface String {
    [key]: typeof value;
  }
}

String.prototype[key] = value;

export default key;
