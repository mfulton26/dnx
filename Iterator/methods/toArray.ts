import toIterable from "../toIterable.ts";

export default function toArray<T>(this: Iterator<T>): T[] {
  const result = [];
  for (const value of this[toIterable]()) result.push(value);
  return result;
}
