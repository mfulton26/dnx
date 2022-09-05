import pow from "./pow.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("exponentiation", async (t) => {
  await t.step("4 ** 3", expect(64));

  function expect(sum: number) {
    return (t: Deno.TestContext) => {
      const [base, exponent] = t.name.split(/\s*\*{2}\s*/).map(Number);
      assertEquals(pow.call(base, exponent), sum);
    };
  }
});
