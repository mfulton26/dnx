import $ from "dnx/$.ts";
import "dnx/AsyncIterator/drop.ts";
import "dnx/Iterator/toAsync.ts";

import { assertEquals } from "std/testing/asserts.ts";

import x from "dnx/Number/prototype/x.ts";

Deno.test("drop", async (t) => {
  await t.step("0", expectNext(0, 0));
  await t.step("1", expectNext(1, 1));
  await t.step("2", expectNext(2, 2));
  await t.step("1023", expectNext(1023, 1023));
  await t.step("1024", expectNext(1024, 1024));

  function expectNext(n: number, expected: number) {
    return async () => {
      const { value: actual } = await Infinity[x]
        [$.toAsync]()
        [$.drop](n)
        .next();
      assertEquals(actual, expected);
    };
  }
});
