import add from "./add.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("addition", async (t) => {
  await t.step("0 + 0", expect(0));
  await t.step("0 + 1", expect(1));
  await t.step("1 + 0", expect(1));
  await t.step("1 + 1", expect(2));
  await t.step("1 + 2", expect(3));
  await t.step("2 + 1", expect(3));
  await t.step("3 + 4", expect(7));
  await t.step("4 + 3", expect(7));
  await t.step("0 + -1", expect(-1));
  await t.step("-1 + 0", expect(-1));
  await t.step("-1 + -1", expect(-2));
  await t.step("-1 + 1", expect(0));
  await t.step("1 + -1", expect(0));

  function expect(sum: number) {
    return (t: Deno.TestContext) => {
      const [augend, addend] = t.name.split(/\s*\+\s*/).map(Number);
      assertEquals(add.call(augend, addend), sum);
    };
  }
});
