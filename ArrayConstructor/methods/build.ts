export default function build<T>(builder: () => Iterable<T>): T[] {
  const result = [];
  for (const value of builder()) result.push(value);
  return result;
}
