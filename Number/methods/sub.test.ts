import sub from "./sub.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("subtraction", async (t) => {
  await t.step("4 - 3", expect(1));

  function expect(sum: number) {
    return (t: Deno.TestContext) => {
      const [minuend, subtrahend] = t.name.split(/\s*-\s*/).map(Number);
      assertEquals(sub.call(minuend, subtrahend), sum);
    };
  }
});
