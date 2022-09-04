export default function add<T>(this: Set<T>, item: T) {
  return this.add(item);
}
