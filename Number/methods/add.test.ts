import add from "./add.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("0 + 0", expect(0));
Deno.test("0 + 1", expect(1));
Deno.test("1 + 0", expect(1));
Deno.test("1 + 1", expect(2));
Deno.test("1 + 2", expect(3));
Deno.test("2 + 1", expect(3));
Deno.test("3 + 4", expect(7));
Deno.test("4 + 3", expect(7));
Deno.test("0 + -1", expect(-1));
Deno.test("-1 + 0", expect(-1));
Deno.test("-1 + -1", expect(-2));
Deno.test("-1 + 1", expect(0));
Deno.test("1 + -1", expect(0));

function expect(sum: number) {
  return (t: Deno.TestContext) => {
    const [augend, addend] = t.name.split(/\s*\+\s*/).map(Number);
    assertEquals(add.call(augend, addend), sum);
  };
}
