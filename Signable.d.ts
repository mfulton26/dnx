import type sign from "./symbols/sign.ts";

export default interface Signable<ReturnType> {
  [sign](): ReturnType;
}
