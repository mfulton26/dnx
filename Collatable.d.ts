import type compareTo from "./compareTo.ts";

export default interface Collatable {
  /**
   * Compares this value to another value for order (returns zero for same, negative for before, and positive for after).
   *
   * @param other the other value to compare against
   *
   * @throws whenever comparing things that cannot be coerced for comparison
   */
  [compareTo](other: unknown): number;
}
