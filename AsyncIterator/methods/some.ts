export default async function some<T>(
  this: AsyncIterator<T>,
  predicate: (value: T) => unknown,
) {
  for (
    let { done, value } = await this.next();
    !done;
    ({ done, value } = await this.next())
  ) {
    if (predicate(value)) return true;
  }
  return false;
}
