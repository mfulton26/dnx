export default async function count<T>(
  this: AsyncIterator<T>,
  predicate?: (value: T) => unknown,
) {
  let result = 0;
  if (predicate === undefined) {
    for (
      let { done } = await this.next();
      !done;
      ({ done } = await this.next())
    ) {
      result++;
    }
  } else {
    for (
      let { done, value } = await this.next();
      !done;
      ({ done, value } = await this.next())
    ) {
      if (predicate(value)) result++;
    }
  }
  return result;
}
