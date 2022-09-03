export default function build<T>(generate: () => Iterable<T>): Set<T> {
  const result = new Set<T>();
  for (const value of generate()) result.add(value);
  return result;
}
