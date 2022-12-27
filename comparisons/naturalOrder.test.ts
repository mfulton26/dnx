import naturalOrder from "./naturalOrder.ts";

import "../Boolean/compareTo.ts";
import "../Number/compareTo.ts";
import "../BigInt/compareTo.ts";
import "../Date/compareTo.ts";

import Collator from "../Collator.ts";

import { assertEquals, assertInstanceOf } from "std/testing/asserts.ts";

Deno.test("returns a Collator", () => {
  const collator = naturalOrder();
  assertInstanceOf(collator, Collator);
});

Deno.test("compares booleans", () => {
  const collator = naturalOrder<boolean>();
  assertEquals(collator.compare(false, false), 0);
  assertEquals(collator.compare(false, true), -1);
  assertEquals(collator.compare(true, false), 1);
  assertEquals(collator.compare(true, true), 0);
});

Deno.test("compares numbers", () => {
  const collator = naturalOrder<number>();
  assertEquals(collator.compare(1, 2), -1);
  assertEquals(collator.compare(1, 1), 0);
  assertEquals(collator.compare(2, 2), 0);
  assertEquals(collator.compare(2, 1), 1);
});

Deno.test("compares bigints", () => {
  const collator = naturalOrder<bigint>();
  assertEquals(collator.compare(1n, 2n), -1);
  assertEquals(collator.compare(1n, 1n), 0);
  assertEquals(collator.compare(2n, 2n), 0);
  assertEquals(collator.compare(2n, 1n), 1);
});

Deno.test("compares Dates", () => {
  const collator = naturalOrder<Date>();
  assertEquals(collator.compare(new Date(1), new Date(2)), -1);
  assertEquals(collator.compare(new Date(1), new Date(1)), 0);
  assertEquals(collator.compare(new Date(2), new Date(2)), 0);
  assertEquals(collator.compare(new Date(2), new Date(1)), 1);
});
