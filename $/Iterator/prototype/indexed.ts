import * as Iterator from "dnx/Iterator.ts";

export default function indexed<T>(
  this: Iterator<T>,
) {
  let i = 0;
  const next = (): IteratorResult<[number, T]> => {
    const { done, value } = this.next();
    if (done) return { done: true, value: undefined };
    return { done: false, value: [i++, value] };
  };
  return Iterator.from({ next });
}
