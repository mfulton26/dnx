// deno-lint-ignore ban-types
export default function build<T extends object>(
  generate: () => Iterable<T>,
): WeakSet<T> {
  const result = new WeakSet<T>();
  for (const value of generate()) result.add(value);
  return result;
}
