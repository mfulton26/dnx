export default function compareTo(this: string, other: unknown): number {
  const that = String(other);
  return this === that ? 0 : this < that ? -1 : 1;
}
