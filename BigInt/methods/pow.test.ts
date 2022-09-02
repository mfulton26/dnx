import pow from "./pow.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("4 ** 3", expect(64n));

function expect(sum: bigint) {
  return (t: Deno.TestContext) => {
    const [base, exponent] = t.name.split(/\s*\*{2}\s*/).map(BigInt);
    assertEquals(pow.call(base, exponent), sum);
  };
}
