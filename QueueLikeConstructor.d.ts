import QueueLike from "./QueueLike.d.ts";

export default interface QueueLikeConstructor<T> {
  new (): QueueLike<T>;
}
