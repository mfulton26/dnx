import { AssertionError } from "std/testing/asserts.ts";

export default function assertNotThrows(
  fn: () => unknown,
  msg?: string,
): unknown {
  try {
    return fn();
  } catch (e) {
    throw new AssertionError(
      msg ?? `Expected function to not throw but did: ${e}`,
    );
  }
}
