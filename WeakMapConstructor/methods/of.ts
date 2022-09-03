// deno-lint-ignore ban-types
export default function of<K extends object, V>(
  ...items: (readonly [K, V])[]
): WeakMap<K, V> {
  const result = new WeakMap<K, V>();
  for (const [key, value] of items) result.set(key, value);
  return result;
}
