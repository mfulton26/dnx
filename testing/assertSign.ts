import type Signable from "../Signable.d.ts";

import { assertEquals } from "std/testing/asserts.ts";

import sign from "../sign.ts";

import "../Number/sign.ts";
import "../BigInt/sign.ts";

export default function assertSign<T>(
  value: Signable<T>,
  expected: T,
  msg?: string,
) {
  assertEquals(value[sign](), expected, msg);
}
