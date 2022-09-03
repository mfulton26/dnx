import Queue from "../../Queue.ts";

export default function of<T>(...items: T[]): Queue<T> {
  const result = new Queue<T>();
  for (const value of items) result.push(value);
  return result;
}
