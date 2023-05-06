export default function minBy<T, S extends number>(
  this: readonly T[],
  selector: (value: T) => S,
) {
  if (this.length === 0) throw new Error();
  let result = this[0];
  if (this.length === 1) return result;
  let resultWeight = selector(result);
  for (let i = 1; i < this.length; i++) {
    const value = this[i];
    const valueWeight = selector(value);
    if (valueWeight < resultWeight) {
      result = value;
      resultWeight = valueWeight;
    }
  }
  return result;
}
