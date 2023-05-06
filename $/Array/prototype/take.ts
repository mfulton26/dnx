export default function take<T>(this: readonly T[], n: number) {
  return this.slice(0, n);
}
