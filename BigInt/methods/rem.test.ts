import rem from "./rem.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("remainder", async (t) => {
  await t.step("4 % 3", expect(1n));

  function expect(sum: bigint) {
    return (t: Deno.TestContext) => {
      const [dividend, divisor] = t.name.split(/\s*%\s*/).map(BigInt);
      assertEquals(rem.call(dividend, divisor), sum);
    };
  }
});
