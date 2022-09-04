// deno-lint-ignore ban-types
export default function add<T extends object>(this: WeakSet<T>, item: T) {
  return this.add(item);
}
