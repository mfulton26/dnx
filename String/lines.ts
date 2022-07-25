import key from "dnx/symbols/lines.ts";
import value from "dnx/String/prototype/lines.ts";

declare global {
  interface String {
    [key]: typeof value;
  }
}

String.prototype[key] = value;

export default key;
