export default function maxBy<T, S extends number>(
  this: readonly T[],
  selector: (value: T) => S,
) {
  if (this.length === 0) throw new Error();
  let result = this[0];
  if (this.length === 1) return result;
  let resultWeight = selector(result);
  for (let index = 1; index < this.length; index++) {
    const value = this[index];
    const valueWeight = selector(value);
    if (valueWeight > resultWeight) {
      result = value;
      resultWeight = valueWeight;
    }
  }
  return result;
}
