export default function safeInteger(this: number) {
  if (!Number.isSafeInteger(this)) throw new TypeError();
  return this;
}
