import div from "dnx/$/BigInt/prototype/div.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("division", async (t) => {
  await t.step("1 / 1", expect(1n / 1n));
  await t.step("1 / 2", expect(1n / 2n));
  await t.step("12 / 3", expect(12n / 3n));
  await t.step("0 / 1", expect(0n / 1n));

  function expect(quotient: bigint) {
    return (t: Deno.TestContext) => {
      const [dividend, divisor] = t.name.split(/\s*\/\s*/).map(BigInt);
      assertEquals(div.call(dividend, divisor), quotient);
    };
  }
});
