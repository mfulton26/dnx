import sub from "./sub.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("4 - 3", expect(1n));

function expect(sum: bigint) {
  return (t: Deno.TestContext) => {
    const [minuend, subtrahend] = t.name.split(/\s*-\s*/).map(BigInt);
    assertEquals(sub.call(minuend, subtrahend), sum);
  };
}
