import Deque from "../../Deque.ts";

export default function add<T>(this: Deque<T>, item: T) {
  this.push(item);
  return this;
}
