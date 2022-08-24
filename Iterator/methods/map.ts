import { prototype } from "../../Iterator.ts";

export default function map<T, R>(
  this: Iterator<T>,
  transform: (value: T) => R,
): Iterator<T> {
  const next = () => {
    const { done, value } = this.next();
    if (done) return { done: true };
    return { done: false, value: transform(value) };
  };
  return Object.create(prototype, { next: { value: next } });
}
