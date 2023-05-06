export default function count<T>(
  this: Iterator<T>,
  predicate?: (value: T) => unknown,
) {
  let result = 0n;
  if (predicate === undefined) {
    for (let { done } = this.next(); !done; ({ done } = this.next())) result++;
  } else {
    for (
      let { done, value } = this.next();
      !done;
      ({ done, value } = this.next())
    ) {
      if (predicate(value)) result++;
    }
  }
  return result;
}
