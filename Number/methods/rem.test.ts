import rem from "./rem.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("remainder", async (t) => {
  await t.step("4 % 3", expect(1));

  function expect(sum: number) {
    return (t: Deno.TestContext) => {
      const [dividend, divisor] = t.name.split(/\s*%\s*/).map(Number);
      assertEquals(rem.call(dividend, divisor), sum);
    };
  }
});
