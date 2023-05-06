import $ from "dnx/$.ts";
import "dnx/$/sign.ts";

export default interface Signable<ReturnType> {
  [$.sign](): ReturnType;
}
