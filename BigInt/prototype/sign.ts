export default function sign(this: bigint): -1n | 0n | 1n {
  if (this === 0n) return 0n;
  return this < 0n ? -1n : 1n;
}
