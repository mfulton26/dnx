import * as Iterator from "./Iterator.ts";

import compareTo from "./compareTo.ts";
import add from "./add.ts";
import ZERO from "./ZERO.ts";
import ONE from "./ONE.ts";

export interface Incrementable<T> {
  [compareTo](other: T): number;
  [add](addend: T): T;
  constructor: { [ZERO]: T; [ONE]: T };
}
export default class XIterator<T extends Incrementable<T>> {
  readonly #limit: T;
  #n: T;
  readonly #one: T;

  constructor(limit: T) {
    const { constructor: { [ZERO]: zero, [ONE]: one } } = limit;
    if (limit[compareTo](zero) < 0) throw new RangeError();
    this.#limit = limit;
    this.#n = zero;
    this.#one = one;
  }

  next(): IteratorResult<T> {
    if (this.#n[compareTo](this.#limit) >= 0) {
      return { value: undefined, done: true };
    }
    const result = { value: this.#n, done: false };
    this.#n = this.#n[add](this.#one);
    return result;
  }
}

// deno-lint-ignore no-empty-interface
export default interface XIterator<T extends Incrementable<T>>
  extends IterableIterator<T> {}

Object.setPrototypeOf(XIterator.prototype, Iterator.prototype);
