import * as AsyncIterator from "dnx/AsyncIterator.ts";

export default function toAsync<T>(this: Iterator<T>) {
  return AsyncIterator.from({ next: () => Promise.resolve(this.next()) });
}
