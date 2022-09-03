// deno-lint-ignore ban-types
export default function build<K extends object, V>(
  builder: () => Iterable<readonly [K, V]>,
): WeakMap<K, V> {
  const result = new WeakMap<K, V>();
  for (const [key, value] of builder()) result.set(key, value);
  return result;
}
