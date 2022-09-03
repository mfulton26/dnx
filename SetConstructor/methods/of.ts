export default function of<T>(...items: T[]): Set<T> {
  const result = new Set<T>();
  for (const value of items) result.add(value);
  return result;
}
