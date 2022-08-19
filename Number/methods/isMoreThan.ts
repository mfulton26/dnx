export default function isMoreThan(
  this: number,
  exclusiveMinimum: number,
): boolean {
  return this > exclusiveMinimum;
}
