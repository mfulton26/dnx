export default function splitArray<T>(this: readonly T[], separator: T) {
  let subarray: T[] = [];
  const result = [subarray];
  for (const value of this) {
    if (value === separator) {
      result.push(subarray = []);
      continue;
    }
    subarray.push(value);
  }
  return result;
}
