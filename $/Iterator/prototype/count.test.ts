import count from "../count.ts";

import { assertEquals } from "std/testing/asserts.ts";

import * as Iterator from "../../Iterator.ts";
import x from "../../Number/x.ts";

Deno.test("default", async (t) => {
  await t.step("0", expect(Iterator.of(), 0));
  await t.step("1", expect(Iterator.of(0), 1));
  await t.step("2", expect(Iterator.of(0, 1), 2));
  await t.step("1023", expect(1023[x], 1023));
  await t.step("1024", expect(1024[x], 1024));

  function expect<T>(iterator: Iterator<T>, expected: number) {
    return () => {
      const actual = iterator[count]();
      assertEquals(actual, expected);
    };
  }
});

Deno.test("predicate", async (t) => {
  await t.step("0", expect(Iterator.of(), 0));
  await t.step("1", expect(Iterator.of(0), 1));
  await t.step("2", expect(Iterator.of(0, 1), 1));
  await t.step("1023", expect(1023[x], 512));
  await t.step("1024", expect(1024[x], 512));

  function expect(iterator: Iterator<number>, expected: number) {
    return () => {
      const actual = iterator[count]((n) => n % 2 === 0);
      assertEquals(actual, expected);
    };
  }
});
