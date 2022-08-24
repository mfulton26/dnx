import count from "./count.ts";

import { assertEquals } from "std/testing/asserts.ts";

import integers from "../../integers.ts";

Deno.test("default", async (t) => {
  await t.step("0", expect(new Set().values(), 0));
  await t.step("1", expect(new Set([0]).values(), 1));
  await t.step("2", expect(new Set([0, 1]).values(), 2));
  await t.step("1023", expect(new Set(integers(0, 1022)).values(), 1023));
  await t.step("1024", expect(new Set(integers(0, 1023)).values(), 1024));

  function expect<T>(iterator: Iterator<T>, expected: number) {
    return () => {
      const actual = count.call(iterator);
      assertEquals(actual, expected);
    };
  }
});

Deno.test("predicate", async (t) => {
  await t.step("0", expect(new Set<number>().values(), 0));
  await t.step("1", expect(new Set([0]).values(), 1));
  await t.step("2", expect(new Set([0, 1]).values(), 1));
  await t.step("1023", expect(new Set(integers(0, 1022)).values(), 512));
  await t.step("1024", expect(new Set(integers(0, 1023)).values(), 512));

  function expect(iterator: Iterator<number>, expected: number) {
    const call = count.bind<
      (this: Iterator<number>, predicate?: (value: number) => unknown) => number
    >(iterator);
    return () => {
      const actual = call((n) => n % 2 === 0);
      assertEquals(actual, expected);
    };
  }
});
