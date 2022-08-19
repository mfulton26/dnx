export default function isLessThan(
  this: number,
  exclusiveMaximum: number,
): boolean {
  return this < exclusiveMaximum;
}
