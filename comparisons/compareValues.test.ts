import type Collatable from "../Collatable.d.ts";

import compareValues from "./compareValues.ts";

import "../Boolean/compareTo.ts";
import "../Number/compareTo.ts";
import "../BigInt/compareTo.ts";
import "../String/compareTo.ts";
import "../Date/compareTo.ts";

import assertSign from "../testing/assertSign.ts";

Deno.test("compares booleans", () => {
  assertSign(compareValues(false, false), 0);
  assertSign(compareValues(false, true), -1);
  assertSign(compareValues(true, false), 1);
  assertSign(compareValues(true, true), 0);
});

Deno.test("compares numbers", () => {
  assertSign(compareValues(0, 0), 0);
  assertSign(compareValues(0, 1), -1);
  assertSign(compareValues(1, 0), 1);
  assertSign(compareValues(1, 1), 0);
});

Deno.test("compares bigints", () => {
  assertSign(compareValues(0n, 0n), 0);
  assertSign(compareValues(0n, 1n), -1);
  assertSign(compareValues(1n, 0n), 1);
  assertSign(compareValues(1n, 1n), 0);
});

Deno.test("compares strings", () => {
  assertSign(compareValues("0", "0"), 0);
  assertSign(compareValues("0", "1"), -1);
  assertSign(compareValues("1", "0"), 1);
  assertSign(compareValues("1", "1"), 0);
});

Deno.test("compares Dates", () => {
  assertSign(compareValues(new Date(0), new Date(0)), 0);
  assertSign(compareValues(new Date(0), new Date(1)), -1);
  assertSign(compareValues(new Date(1), new Date(0)), 1);
  assertSign(compareValues(new Date(1), new Date(1)), 0);
});

Deno.test("treats same values as equal (even NaN)", async (t) => {
  await t.step("false", expect(false));
  await t.step("0", expect(0));
  await t.step("-0", expect(-0));
  await t.step("0n", expect(0n));
  await t.step('""', expect(""));
  await t.step("null", expect(null));
  await t.step("undefined", expect(undefined));
  await t.step("NaN", expect(NaN));
  await t.step("true", expect(true));
  await t.step("42", expect(42));
  await t.step('"0"', expect("0"));
  await t.step('"false"', expect("false"));
  await t.step("new Date()", expect(new Date()));
  await t.step("-42", expect(-42));
  await t.step("12n", expect(12n));
  await t.step("3.14", expect(3.14));
  await t.step("-3.14", expect(-3.14));
  await t.step("Infinity", expect(Infinity));
  await t.step("-Infinity", expect(-Infinity));

  function expect<T extends Collatable>(value: T | null | undefined) {
    return () => {
      assertSign(compareValues(value, value), 0);
    };
  }
});

Deno.test("treats undefined greater than defined values", () => {
  assertSign(compareValues(undefined, undefined), 0);
  assertSign(compareValues(0, undefined), -1);
  assertSign(compareValues(undefined, -1), 1);
  assertSign(compareValues(undefined, null), 1);
});

Deno.test("treats null less than other defined values", () => {
  assertSign(compareValues(null, null), 0);
  assertSign(compareValues(0, null), 1);
  assertSign(compareValues(null, -1), -1);
  assertSign(compareValues(null, undefined), -1);
});
