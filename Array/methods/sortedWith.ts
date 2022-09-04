export default function sortedWith<T>(
  this: T[],
  compareFn: (a: T, b: T) => number,
) {
  return this.slice().sort(compareFn);
}
