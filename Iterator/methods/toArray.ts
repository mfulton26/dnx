export default function toArray<T>(this: Iterator<T>): T[] {
  const result = [];
  for (
    let { done, value } = this.next();
    !done;
    ({ done, value } = this.next())
  ) {
    result.push(value);
  }
  return result;
}
