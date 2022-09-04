// deno-lint-ignore ban-types
export default function add<T extends readonly [K, V], K extends object, V>(
  this: WeakMap<K, V>,
  item: T,
) {
  const [key, value] = item;
  return this.set(key, value);
}
