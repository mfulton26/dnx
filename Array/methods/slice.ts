export default function slice<T>(
  this: readonly T[],
  start?: number,
  end?: number,
) {
  return this.slice(start, end);
}
