export default function rem(this: bigint, that: bigint) {
  return ((this % that) + that) % that;
}
