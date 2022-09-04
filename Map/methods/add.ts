export default function add<T extends readonly [K, V], K, V>(
  this: Map<K, V>,
  item: T,
) {
  const [key, value] = item;
  return this.set(key, value);
}
