import Queue from "../../Queue.ts";

export default function add<T>(this: Queue<T>, item: T) {
  this.push(item);
  return this;
}
