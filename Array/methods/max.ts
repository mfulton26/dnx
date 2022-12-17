export default function max<T extends number>(this: readonly T[]) {
  let result = -Infinity;
  for (const value of this) if (value > result) result = value;
  return result;
}
