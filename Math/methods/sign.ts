import type Signable from "../../Signable.d.ts";

import key from "../../sign.ts";

export default function sign<T>(value: Signable<T>): T {
  return value[key]();
}
