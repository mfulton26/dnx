export default function build(generate: () => Iterable<unknown>): string {
  let result = "";
  for (const value of generate()) result += value;
  return result;
}
