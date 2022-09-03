import count from "../count.ts";

import { assertEquals } from "std/testing/asserts.ts";

import * as AsyncIterator from "../../AsyncIterator.ts";
import integers from "../../integers.ts";
import toAsync from "../../Iterator/toAsync.ts";

Deno.test("default", async (t) => {
  await t.step("0", expect(AsyncIterator.of(), 0));
  await t.step("1", expect(AsyncIterator.of(0), 1));
  await t.step("2", expect(AsyncIterator.of(0, 1), 2));
  await t.step("1023", expect(integers(0, 1022)[toAsync](), 1023));
  await t.step("1024", expect(integers(0, 1023)[toAsync](), 1024));

  function expect<T>(asyncIterator: AsyncIterator<T>, expected: number) {
    return async () => {
      const actual = await asyncIterator[count]();
      assertEquals(actual, expected);
    };
  }
});

Deno.test("predicate", async (t) => {
  await t.step("0", expect(AsyncIterator.of<number>(), 0));
  await t.step("1", expect(AsyncIterator.of(0), 1));
  await t.step("2", expect(AsyncIterator.of(0, 1), 1));
  await t.step("1023", expect(integers(0, 1022)[toAsync](), 512));
  await t.step("1024", expect(integers(0, 1023)[toAsync](), 512));

  function expect(asyncIterator: AsyncIterator<number>, expected: number) {
    return async () => {
      const actual = await asyncIterator[count]((n) => n % 2 === 0);
      assertEquals(actual, expected);
    };
  }
});
