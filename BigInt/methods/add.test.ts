import add from "./add.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("0 + 0", expect(0n));
Deno.test("0 + 1", expect(1n));
Deno.test("1 + 0", expect(1n));
Deno.test("1 + 1", expect(2n));
Deno.test("1 + 2", expect(3n));
Deno.test("2 + 1", expect(3n));
Deno.test("3 + 4", expect(7n));
Deno.test("4 + 3", expect(7n));
Deno.test("0 + -1", expect(-1n));
Deno.test("-1 + 0", expect(-1n));
Deno.test("-1 + -1", expect(-2n));
Deno.test("-1 + 1", expect(0n));
Deno.test("1 + -1", expect(0n));

function expect(sum: bigint) {
  return (t: Deno.TestContext) => {
    const [augend, addend] = t.name.split(/\s*\+\s*/).map(BigInt);
    assertEquals(add.call(augend, addend), sum);
  };
}
