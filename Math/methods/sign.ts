import type Signable from "../../Signable.d.ts";

import key from "../../symbols/sign.ts";

export default function sign<ReturnType>(
  value: Signable<ReturnType>,
): ReturnType {
  return value[key]();
}
