export default function compareTo(this: Date, other: unknown): number {
  // @ts-expect-error allow invalid date coercion
  const that = new Date(other);
  return this.valueOf() - that.valueOf();
}
