export default function minBy<T, S extends number>(
  this: readonly T[],
  selector: (value: T) => S,
) {
  let result = Infinity;
  for (const value of this) if (value < result) result = selector(value);
  return result;
}
