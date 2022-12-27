import compareBy from "./compareBy.ts";

import "../String/compareTo.ts";
import "../Number/compareTo.ts";
import "../BigInt/compareTo.ts";

import Collator from "../Collator.ts";

import { assertInstanceOf } from "std/testing/asserts.ts";
import assertSign from "../testing/assertSign.ts";

Deno.test("returns a Collator", () => {
  const collator = compareBy<{ age: number }>("age");
  assertInstanceOf(collator, Collator);
});

Deno.test("string property key selector", async (t) => {
  const collator = compareBy<{ name: string }>("name");

  await t.step("<", expect({ name: "Adam" }, { name: "Eve" }, -1));
  await t.step("=", expect({ name: "Adam" }, { name: "Adam" }, 0));
  await t.step(">", expect({ name: "Eve" }, { name: "Adam" }, 1));

  function expect<T extends { name: string }>(a: T, b: T, sign: -1 | 0 | 1) {
    return () => {
      assertSign(collator.compare(a, b), sign);
    };
  }
});

Deno.test("number property key selector", async (t) => {
  const collator = compareBy<string[]>(3);

  await t.step("<", expect(["a", "b", "c", "D"], ["a", "b", "c", "d"], -1));
  await t.step("=", expect(["A", "b", "c", "d"], ["a", "B", "🤪", "d"], 0));
  await t.step(">", expect(["a", "b", "c", "d"], ["a", "b", "c", "D"], 1));

  function expect<T extends string[]>(a: T, b: T, sign: -1 | 0 | 1) {
    return () => {
      assertSign(collator.compare(a, b), sign);
    };
  }
});

Deno.test("symbol property key selector", async (t) => {
  const id = Symbol("id");
  const collator = compareBy<{ [id]: bigint }>(id);

  await t.step("<", expect({ [id]: 0n }, { [id]: 1n }, -1));
  await t.step("=", expect({ [id]: 1n }, { [id]: 1n }, 0));
  await t.step(">", expect({ [id]: 1n }, { [id]: 0n }, 1));

  function expect<T extends { [id]: bigint }>(a: T, b: T, sign: -1 | 0 | 1) {
    return () => {
      assertSign(collator.compare(a, b), sign);
    };
  }
});

Deno.test("function selector", async (t) => {
  const collator = compareBy<{ nested: { value: number } }>(
    ({ nested: { value } }) => value,
  );

  await t.step(
    "<",
    expect(
      { nested: { value: 1 } },
      { nested: { value: 2 } },
      -1,
    ),
  );
  await t.step(
    "=",
    expect(
      { nested: { value: 3 } },
      { nested: { value: 3 } },
      0,
    ),
  );
  await t.step(
    ">",
    expect(
      { nested: { value: Infinity } },
      { nested: { value: -Infinity } },
      1,
    ),
  );

  function expect<T extends { nested: { value: number } }>(
    a: T,
    b: T,
    sign: -1 | 0 | 1,
  ) {
    return () => {
      assertSign(collator.compare(a, b), sign);
    };
  }
});
