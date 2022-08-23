export default function compareTo(this: number, other: unknown): number {
  const that = Number(other);
  if (this === that || Number.isNaN(this) || Number.isNaN(that)) return 0;
  return this - that;
}
