export default function find<T, S extends T>(
  this: Iterator<T>,
  predicate: (value: T) => value is S,
): S | undefined;
export default function find<T>(
  this: Iterator<T>,
  predicate: (value: T) => unknown,
): T | undefined;
export default function find<T>(
  this: Iterator<T>,
  predicate: (value: T) => unknown,
): T | undefined {
  for (
    let { done, value } = this.next();
    !done;
    ({ done, value } = this.next())
  ) {
    if (predicate(value)) return value;
  }
}
