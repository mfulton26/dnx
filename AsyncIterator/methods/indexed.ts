import * as AsyncIterator from "../../AsyncIterator.ts";

export default function indexed<T>(
  this: AsyncIterator<T>,
) {
  let i = 0;
  const next = async (): Promise<IteratorResult<[number, T]>> => {
    const { done, value } = await this.next();
    if (done) return { done: true, value: undefined };
    return { done: false, value: [i++, value] };
  };
  return AsyncIterator.from({ next });
}
