import XIterator from "dnx/XIterator.ts";

import "dnx/BigInt/prototype/compareTo.ts";
import "dnx/BigInt/prototype/add.ts";
import "dnx/BigInt/ZERO.ts";
import "dnx/BigInt/ONE.ts";

export default function x(this: bigint): IterableIterator<bigint> {
  return new XIterator(this);
}
