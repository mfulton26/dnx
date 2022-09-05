import drop from "../drop.ts";

import { assertEquals } from "std/testing/asserts.ts";

import x from "../../Number/x.ts";

Deno.test("drop", async (t) => {
  await t.step("0", expectNext(0));
  await t.step("1", expectNext(1));
  await t.step("2", expectNext(2));
  await t.step("1023", expectNext(1023));
  await t.step("1024", expectNext(1024));

  function expectNext(expected: number) {
    return (t: Deno.TestContext) => {
      const n = Number(t.name);
      const { value: actual } = Infinity[x][drop](n).next();
      assertEquals(actual, expected);
    };
  }
});
