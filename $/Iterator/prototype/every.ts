export default function every<T>(
  this: Iterator<T>,
  predicate: (value: T) => unknown,
) {
  for (
    let { done, value } = this.next();
    !done;
    ({ done, value } = this.next())
  ) {
    if (!predicate(value)) return false;
  }
  return true;
}
