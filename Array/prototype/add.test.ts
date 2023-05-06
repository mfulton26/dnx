import $ from "dnx/$.ts";
import "dnx/Array/prototype/add.ts";

import { assertEquals } from "std/testing/asserts.ts";

Deno.test("Array.prototype[$.add]()", () => {
  console.log(Array.prototype[$.add].name);
  const array = [1, 2, 3];
  array[$.add](4);
  assertEquals(array, [1, 2, 3, 4]);
});
