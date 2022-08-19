import safeInteger from "./Number/safeInteger.ts";
import isAtLeast from "./Number/isAtLeast.ts";
import isAtMost from "./Number/isAtMost.ts";

export default function* integers(
  first?: number,
  last?: number,
  step?: number,
) {
  first = first?.[safeInteger]() ?? 0;
  last = last?.[safeInteger]() ?? Number.MAX_SAFE_INTEGER;
  step = step?.[safeInteger]() ?? Math.sign(last - first);
  if (step === 0) {
    if (first !== last) throw RangeError();
    yield first;
    return;
  }
  const isNotPast = step < 0 ? isAtLeast : isAtMost;
  for (let n = first; n[isNotPast](last); n += step) yield n;
}
