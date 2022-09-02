import XIterator from "../../XIterator.ts";

import "../compareTo.ts";
import "../add.ts";
import "../../NumberConstructor/ZERO.ts";
import "../../NumberConstructor/ONE.ts";

export default function x(this: number): IterableIterator<number> {
  return new XIterator(this);
}
