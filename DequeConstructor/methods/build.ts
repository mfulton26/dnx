import Deque from "../../Deque.ts";

export default function build<T>(generate: () => Iterable<T>): Deque<T> {
  const result = new Deque<T>();
  for (const value of generate()) result.push(value);
  return result;
}
