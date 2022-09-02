import div from "./div.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("1 / 1", expect(1 / 1));
Deno.test("1 / 2", expect(1 / 2));
Deno.test("12 / 3", expect(12 / 3));
Deno.test("0 / 1", expect(0 / 1));
Deno.test("1 / 0", expect(1 / 0));

function expect(quotient: number) {
  return (t: Deno.TestContext) => {
    const [dividend, divisor] = t.name.split(/\s*\/\s*/).map(Number);
    assertEquals(div.call(dividend, divisor), quotient);
  };
}
