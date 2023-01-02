export default function drop<T>(this: readonly T[], n: number) {
  return this.slice(n);
}
