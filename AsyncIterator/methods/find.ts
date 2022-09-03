export default async function find<T, S extends T>(
  this: AsyncIterator<T>,
  predicate: (value: T) => value is S,
): Promise<S | undefined>;
export default async function find<T>(
  this: AsyncIterator<T>,
  predicate: (value: T) => unknown,
): Promise<T | undefined>;
export default async function find<T>(
  this: AsyncIterator<T>,
  predicate: (value: T) => unknown,
): Promise<T | undefined> {
  for (
    let { done, value } = await this.next();
    !done;
    ({ done, value } = await this.next())
  ) {
    if (predicate(value)) return value;
  }
}
