export default function slices<T>(
  this: ReadonlyArray<T>,
  size: number,
  step = 1,
) {
  const result: T[][] = [];
  for (
    let start = 0, end = size;
    end <= this.length;
    start += step, end += step
  ) {
    result.push(this.slice(start, end));
  }
  return result;
}
