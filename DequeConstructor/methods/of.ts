import Deque from "../../Deque.ts";

export default function of<T>(...items: T[]): Deque<T> {
  const result = new Deque<T>();
  for (const value of items) result.push(value);
  return result;
}
