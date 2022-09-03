export default function of<K, V>(...items: (readonly [K, V])[]): Map<K, V> {
  const result = new Map<K, V>();
  for (const [key, value] of items) result.set(key, value);
  return result;
}
