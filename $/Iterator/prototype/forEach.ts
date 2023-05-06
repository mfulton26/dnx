export default function forEach<T, R>(
  this: Iterator<T>,
  action: (value: T) => void,
) {
  for (
    let { done, value } = this.next();
    !done;
    ({ done, value } = this.next())
  ) {
    action(value);
  }
}
