import sign from "./Math/sign.ts";

import "./BigInt/sign.ts";
import isAtLeast from "./BigInt/isAtLeast.ts";
import isAtMost from "./BigInt/isAtMost.ts";

export default function* bigInts(
  first: bigint,
  last: bigint,
  step = Math[sign](last - first),
) {
  if (step === 0n) {
    if (first !== last) throw RangeError();
    yield first;
    return;
  }
  const isNotPast = step < 0 ? isAtLeast : isAtMost;
  for (let n = first; n[isNotPast](last); n += step) yield n;
}
