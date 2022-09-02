import mul from "./mul.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("4 * 3", expect(12));

function expect(product: number) {
  return (t: Deno.TestContext) => {
    const [multiplier, multiplicand] = t.name.split(/\s*\*\s*/).map(Number);
    assertEquals(mul.call(multiplier, multiplicand), product);
  };
}
