import Queue from "../../Queue.ts";

export default function build<T>(generate: () => Iterable<T>): Queue<T> {
  const result = new Queue<T>();
  for (const value of generate()) result.push(value);
  return result;
}
