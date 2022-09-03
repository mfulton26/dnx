export default function build<K, V>(
  builder: () => Iterable<readonly [K, V]>,
): Map<K, V> {
  const result = new Map<K, V>();
  for (const [key, value] of builder()) result.set(key, value);
  return result;
}
