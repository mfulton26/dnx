export default async function forEach<T, R>(
  this: AsyncIterator<T>,
  action: (value: T) => void,
) {
  for (
    let { done, value } = await this.next();
    !done;
    ({ done, value } = await this.next())
  ) {
    action(value);
  }
}
