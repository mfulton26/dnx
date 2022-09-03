export default function build(builder: () => Iterable<unknown>): string {
  let result = "";
  for (const value of builder()) result += value;
  return result;
}
