export default function build<T>(generate: () => Iterable<T>): T[] {
  const result = [];
  for (const value of generate()) result.push(value);
  return result;
}
