export default function maxBy<T, S extends number>(
  this: Iterable<T>,
  selector: (value: T) => S,
) {
  const iterator = this[Symbol.iterator]();
  let iteratorResult = iterator.next();
  if (iteratorResult.done) throw new Error();
  let { value: result } = iteratorResult;
  iteratorResult = iterator.next();
  if (iteratorResult.done) return result;
  let resultWeight = selector(result);
  do {
    const { value } = iteratorResult;
    const valueWeight = selector(value);
    if (valueWeight > resultWeight) {
      result = value;
      resultWeight = valueWeight;
    }
  } while (!iteratorResult.done);
  return result;
}
