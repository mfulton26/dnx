import div from "./div.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("division", async (t) => {
  await t.step("1 / 1", expect(1 / 1));
  await t.step("1 / 2", expect(1 / 2));
  await t.step("12 / 3", expect(12 / 3));
  await t.step("0 / 1", expect(0 / 1));
  await t.step("1 / 0", expect(1 / 0));

  function expect(quotient: number) {
    return (t: Deno.TestContext) => {
      const [dividend, divisor] = t.name.split(/\s*\/\s*/).map(Number);
      assertEquals(div.call(dividend, divisor), quotient);
    };
  }
});
