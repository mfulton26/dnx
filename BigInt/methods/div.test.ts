import div from "./div.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("1 / 1", expect(1n / 1n));
Deno.test("1 / 2", expect(1n / 2n));
Deno.test("12 / 3", expect(12n / 3n));
Deno.test("0 / 1", expect(0n / 1n));

function expect(quotient: bigint) {
  return (t: Deno.TestContext) => {
    const [dividend, divisor] = t.name.split(/\s*\/\s*/).map(BigInt);
    assertEquals(div.call(dividend, divisor), quotient);
  };
}
