export default function isLessThan(
  this: bigint,
  exclusiveMaximum: bigint,
): boolean {
  return this < exclusiveMaximum;
}
