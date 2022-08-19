export default function integer(this: number) {
  if (!Number.isInteger(this)) throw new TypeError();
  return this;
}
