import pow from "dnx/$/BigInt/prototype/pow.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("exponentiation", async (t) => {
  await t.step("4 ** 3", expect(64n));

  function expect(sum: bigint) {
    return (t: Deno.TestContext) => {
      const [base, exponent] = t.name.split(/\s*\*{2}\s*/).map(BigInt);
      assertEquals(pow.call(base, exponent), sum);
    };
  }
});
