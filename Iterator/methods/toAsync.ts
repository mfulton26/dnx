import * as AsyncIterator from "../../AsyncIterator.ts";

export default function toAsync<T>(this: Iterator<T>) {
  return AsyncIterator.from({ next: () => Promise.resolve(this.next()) });
}
