export default function build<K, V>(
  generate: () => Iterable<readonly [K, V]>,
): Map<K, V> {
  const result = new Map<K, V>();
  for (const [key, value] of generate()) result.set(key, value);
  return result;
}
