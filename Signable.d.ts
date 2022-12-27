import type sign from "./sign.ts";

export default interface Signable<ReturnType> {
  [sign](): ReturnType;
}
