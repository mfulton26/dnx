// deno-lint-ignore ban-types
export default function build<K extends object, V>(
  generate: () => Iterable<readonly [K, V]>,
): WeakMap<K, V> {
  const result = new WeakMap<K, V>();
  for (const [key, value] of generate()) result.set(key, value);
  return result;
}
