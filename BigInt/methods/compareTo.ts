export default function compareTo(this: bigint, other: unknown): number {
  // @ts-expect-error allow SyntaxError
  const that = BigInt(other);
  return Number(this - that);
}
