export default function rem(this: number, that: number) {
  return ((this % that) + that) % that;
}
