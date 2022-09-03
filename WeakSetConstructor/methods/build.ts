// deno-lint-ignore ban-types
export default function build<T extends object>(
  builder: () => Iterable<T>,
): WeakSet<T> {
  const result = new WeakSet<T>();
  for (const value of builder()) result.add(value);
  return result;
}
