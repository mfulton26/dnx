import mul from "./mul.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("4 * 3", expect(12n));

function expect(product: bigint) {
  return (t: Deno.TestContext) => {
    const [multiplier, multiplicand] = t.name.split(/\s*\*\s*/).map(BigInt);
    assertEquals(mul.call(multiplier, multiplicand), product);
  };
}
