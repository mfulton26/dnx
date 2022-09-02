import XIterator from "../../XIterator.ts";

import "../compareTo.ts";
import "../add.ts";
import "../../BigIntConstructor/ZERO.ts";
import "../../BigIntConstructor/ONE.ts";

export default function x(this: bigint): IterableIterator<bigint> {
  return new XIterator(this);
}
