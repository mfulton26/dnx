export default function sum<T extends number>(this: readonly T[]) {
  let result = 0;
  for (const value of this) result += value;
  return result;
}
