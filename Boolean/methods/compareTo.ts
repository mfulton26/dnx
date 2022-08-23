export default function compareTo(this: boolean, other: unknown): number {
  const that = Boolean(other);
  return Number(this) - Number(that);
}
