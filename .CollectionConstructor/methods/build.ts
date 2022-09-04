import add from "../../symbols/add.ts";

export default function build<T, C extends { [add](item: T): void }>(
  destination: C,
  generate: () => Iterable<T>,
): C {
  for (const item of generate()) destination[add](item);
  return destination;
}
