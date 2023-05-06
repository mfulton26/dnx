import build from "dnx/$/:Collection/build.ts";

import "dnx/Array/prototype/add.ts";

export default function <T>(generate: () => Iterable<T>): T[] {
  return build([], generate);
}
