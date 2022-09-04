export default function sortWith<T>(
  this: T[],
  compareFn: (a: T, b: T) => number,
) {
  return this.sort(compareFn);
}
