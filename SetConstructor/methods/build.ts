export default function build<T>(builder: () => Iterable<T>): Set<T> {
  const result = new Set<T>();
  for (const value of builder()) result.add(value);
  return result;
}
