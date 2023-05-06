import add from "dnx/$/BigInt/prototype/add.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("addition", async (t) => {
  await t.step("0 + 0", expect(0n));
  await t.step("0 + 1", expect(1n));
  await t.step("1 + 0", expect(1n));
  await t.step("1 + 1", expect(2n));
  await t.step("1 + 2", expect(3n));
  await t.step("2 + 1", expect(3n));
  await t.step("3 + 4", expect(7n));
  await t.step("4 + 3", expect(7n));
  await t.step("0 + -1", expect(-1n));
  await t.step("-1 + 0", expect(-1n));
  await t.step("-1 + -1", expect(-2n));
  await t.step("-1 + 1", expect(0n));
  await t.step("1 + -1", expect(0n));

  function expect(sum: bigint) {
    return (t: Deno.TestContext) => {
      const [augend, addend] = t.name.split(/\s*\+\s*/).map(BigInt);
      assertEquals(add.call(augend, addend), sum);
    };
  }
});
