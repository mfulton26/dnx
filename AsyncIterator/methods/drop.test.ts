import drop from "../drop.ts";

import { assertEquals } from "std/testing/asserts.ts";

import integers from "../../integers.ts";
import toAsync from "../../Iterator/toAsync.ts";

Deno.test("0", expectNext(0));
Deno.test("1", expectNext(1));
Deno.test("2", expectNext(2));
Deno.test("1023", expectNext(1023));
Deno.test("1024", expectNext(1024));

function expectNext(expected: number) {
  return async (t: Deno.TestContext) => {
    const n = Number(t.name);
    const { value: actual } = await integers()[toAsync]()[drop](n).next();
    assertEquals(actual, expected);
  };
}
