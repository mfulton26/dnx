import count from "./count.ts";

import { assertEquals } from "std/testing/asserts.ts";

import integers from "../../integers.ts";

Deno.test("0", expect(new Set().values(), 0));
Deno.test("1", expect(new Set([0]).values(), 1));
Deno.test("2", expect(new Set([0, 1]).values(), 2));
Deno.test("1024", expect(new Set(integers(0, 1023)).values(), 1024));

function expect<T>(iterator: Iterator<T>, expected: number) {
  return () => {
    const actual = count.call(iterator);
    assertEquals(actual, expected);
  };
}
