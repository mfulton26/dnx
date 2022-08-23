import type Collatable from "../Collatable.d.ts";

import compareValuesBy from "./compareValuesBy.ts";

import assertSign from "../testing/assertSign.ts";

Deno.test("compares-by booleans", () => {
  assertSign(compareValuesBy({ value: false }, { value: false }, "value"), 0);
  assertSign(compareValuesBy({ value: false }, { value: true }, "value"), -1);
  assertSign(compareValuesBy({ value: true }, { value: false }, "value"), 1);
  assertSign(compareValuesBy({ value: true }, { value: true }, "value"), 0);
});

Deno.test("compares-by numbers", () => {
  assertSign(compareValuesBy({ value: 0 }, { value: 0 }, "value"), 0);
  assertSign(compareValuesBy({ value: 0 }, { value: 1 }, "value"), -1);
  assertSign(compareValuesBy({ value: 1 }, { value: 0 }, "value"), 1);
  assertSign(compareValuesBy({ value: 1 }, { value: 1 }, "value"), 0);
});

Deno.test("compares-by bigints", () => {
  assertSign(compareValuesBy({ value: 0n }, { value: 0n }, "value"), 0);
  assertSign(compareValuesBy({ value: 0n }, { value: 1n }, "value"), -1);
  assertSign(compareValuesBy({ value: 1n }, { value: 0n }, "value"), 1);
  assertSign(compareValuesBy({ value: 1n }, { value: 1n }, "value"), 0);
});

Deno.test("compares-by strings", () => {
  assertSign(compareValuesBy({ value: "0" }, { value: "0" }, "value"), 0);
  assertSign(compareValuesBy({ value: "0" }, { value: "1" }, "value"), -1);
  assertSign(compareValuesBy({ value: "1" }, { value: "0" }, "value"), 1);
  assertSign(compareValuesBy({ value: "1" }, { value: "1" }, "value"), 0);
});

Deno.test("compares-by Dates", () => {
  assertSign(
    compareValuesBy({ value: new Date(0) }, { value: new Date(0) }, "value"),
    0,
  );
  assertSign(
    compareValuesBy({ value: new Date(0) }, { value: new Date(1) }, "value"),
    -1,
  );
  assertSign(
    compareValuesBy({ value: new Date(1) }, { value: new Date(0) }, "value"),
    1,
  );
  assertSign(
    compareValuesBy({ value: new Date(1) }, { value: new Date(1) }, "value"),
    0,
  );
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
      assertSign(
        compareValuesBy(
          { value },
          { value },
          // @ts-expect-error unknown is not collatable
          "value",
        ),
        0,
      );
    };
  }
});

Deno.test("treats undefined greater than defined values", () => {
  assertSign(
    compareValuesBy(
      { value: undefined },
      { value: undefined },
      // @ts-expect-error undefined is not collatable
      "value",
    ),
    0,
  );
  assertSign(compareValuesBy({ value: 0 }, { value: undefined }, "value"), -1);
  assertSign(compareValuesBy({ value: undefined }, { value: -1 }, "value"), 1);
  assertSign(
    compareValuesBy(
      { value: undefined },
      { value: null },
      // @ts-expect-error neither undefined nor null is collatable
      "value",
    ),
    1,
  );
});

Deno.test("treats null less than other defined values", () => {
  assertSign(
    compareValuesBy(
      { value: null },
      { value: null },
      // @ts-expect-error null is not collatable
      "value",
    ),
    0,
  );
  assertSign(compareValuesBy({ value: 0 }, { value: null }, "value"), 1);
  assertSign(compareValuesBy({ value: null }, { value: -1 }, "value"), -1);
  assertSign(
    compareValuesBy(
      { value: null },
      { value: undefined },
      // @ts-expect-error neither null nor undefined is collatable
      "value",
    ),
    -1,
  );
});
