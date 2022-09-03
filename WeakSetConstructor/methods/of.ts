// deno-lint-ignore ban-types
export default function of<T extends object>(...items: T[]): WeakSet<T> {
  const result = new WeakSet<T>();
  for (const value of items) result.add(value);
  return result;
}
