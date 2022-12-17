export default function sumArrayBy<T, S extends number>(
  this: readonly T[],
  selector: (value: T) => S,
) {
  let result = 0;
  for (const value of this) result += selector(value);
  return result;
}
