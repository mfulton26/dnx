export default function sortedWith<T>(
  this: readonly T[],
  compareFn: (a: T, b: T) => number,
) {
  return this.slice().sort(compareFn);
}
