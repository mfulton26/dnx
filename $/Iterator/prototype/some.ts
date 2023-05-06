export default function some<T>(
  this: Iterator<T>,
  predicate: (value: T) => unknown,
) {
  for (
    let { done, value } = this.next();
    !done;
    ({ done, value } = this.next())
  ) {
    if (predicate(value)) return true;
  }
  return false;
}
