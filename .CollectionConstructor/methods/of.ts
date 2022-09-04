import add from "../../symbols/add.ts";

export type Args<T> = [...items: T[]];

export default function of<T, C extends { [add](item: T): void }>(
  destination: C,
  ...[...items]: Args<T>
): C {
  for (const item of items) destination[add](item);
  return destination;
}
