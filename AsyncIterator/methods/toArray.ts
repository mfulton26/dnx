export default async function toArray<T>(this: AsyncIterator<T>) {
  const result: T[] = [];
  for (
    let { done, value } = await this.next();
    !done;
    ({ done, value } = await this.next())
  ) {
    result.push(value);
  }
  return result;
}
