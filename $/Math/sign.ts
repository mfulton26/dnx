import type Signable from "dnx/Signable.d.ts";

import $ from "dnx/$.ts";
import "dnx/$/sign.ts";

export default function sign<T>(value: Signable<T>): T {
  return value[$.sign]();
}
