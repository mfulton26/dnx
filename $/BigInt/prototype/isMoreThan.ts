export default function isMoreThan(
  this: bigint,
  exclusiveMinimum: bigint,
): boolean {
  return this > exclusiveMinimum;
}
