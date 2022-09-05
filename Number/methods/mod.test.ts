import mod from "./mod.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("modulo", async (t) => {
  await t.step("-4 %% 3", expect(2));

  function expect(remainder: number) {
    return (t: Deno.TestContext) => {
      const [dividend, modulus] = t.name.split(/\s*%{2}\s*/).map(Number);
      assertEquals(mod.call(dividend, modulus), remainder);
    };
  }
});
