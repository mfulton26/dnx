import Collator from "./Collator.ts";

import compareBy from "./comparisons/compareBy.ts";
import naturalOrder from "./comparisons/naturalOrder.ts";

import "./String/compareTo.ts";
import "./Number/compareTo.ts";

import {
  assertEquals,
  assertInstanceOf,
  assertNotStrictEquals,
} from "std/testing/asserts.ts";
import assertNotThrows from "./testing/assertNotThrows.ts";

Deno.test("compare method is bound to the collator", () => {
  const { compare } = new Collator(() => 0);
  assertNotThrows(() => compare(undefined, undefined));
});

Deno.test("natural sort", () => {
  const collator = new Collator<number>((a, b) => a - b);
  assertEquals([1, 0, -1].sort(collator.compare), [-1, 0, 1]);
});

Deno.test("reversed sort", () => {
  const collator = new Collator<number>((a, b) => a - b).reversed();
  assertEquals([-1, 0, 1].sort(collator.compare), [1, 0, -1]);
});

Deno.test("secondary sort", () => {
  const collator = compareBy<string>("length").then(naturalOrder());
  assertEquals(
    ["a", "aa", "b", "ab"].sort(collator.compare),
    ["a", "b", "aa", "ab"],
  );
});

Deno.test("secondary sort-by", () => {
  const collator = compareBy((value: string) => value.slice(-1))
    .thenBy("length");
  assertEquals(
    ["aba", "za", "bab", "zb"].sort(collator.compare),
    ["za", "aba", "zb", "bab"],
  );
});

Deno.test("secondary sort-by-descending", () => {
  const collator = compareBy((value: string) => value.slice(-1))
    .thenByDescending("length");
  assertEquals(
    ["aba", "za", "bab", "zb"].sort(collator.compare),
    ["aba", "za", "bab", "zb"],
  );
});

Deno.test(
  "Collator.prototype.reversed returns a new Collator",
  () => {
    const collator = compareBy<{ age: number }>("age");
    const collator2 = collator.reversed();
    assertInstanceOf(collator2, Collator);
    assertNotStrictEquals(collator2, collator);
  },
);

Deno.test(
  "Collator.prototype.then returns a new Collator",
  () => {
    const collator = compareBy<{ age: number }>("age");
    const collator2 = collator.then(compareBy("age"));
    assertInstanceOf(collator2, Collator);
    assertNotStrictEquals(collator2, collator);
  },
);

Deno.test(
  "Collator.prototype.thenCollator returns a new Collator",
  () => {
    const collator = compareBy<{ age: number }>("age");
    const collator2 = collator.thenCollator(({ age: a }, { age: b }) => a - b);
    assertInstanceOf(collator2, Collator);
    assertNotStrictEquals(collator2, collator);
  },
);

Deno.test(
  "Collator.prototype.thenBy returns a new Collator",
  () => {
    const collator = compareBy<{ age: number }>("age");
    const collator2 = collator.thenBy("age");
    assertInstanceOf(collator2, Collator);
    assertNotStrictEquals(collator2, collator);
  },
);

Deno.test(
  "Collator.prototype.thenByDescending returns a new Collator",
  () => {
    const collator = compareBy<{ age: number }>("age");
    const collator2 = collator.thenByDescending("age");
    assertInstanceOf(collator2, Collator);
    assertNotStrictEquals(collator2, collator);
  },
);
