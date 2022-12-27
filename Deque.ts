import * as Iterator from "./Iterator.ts";

import reverseIterator from "./reverseIterator.ts";

interface Node<T> {
  value: T;
  next: Node<T>;
  previous: Node<T>;
}

class $Node<T> implements Node<T> {
  previous: Node<T>;
  next: Node<T>;

  constructor() {
    this.previous = this;
    this.next = this;
  }

  get value(): never {
    throw new Error("unreachable");
  }
}

export default class Deque<T> {
  readonly #$ = new $Node<T>();
  #size = 0;

  constructor(items?: Iterable<T> | null) {
    if (items) this.push(...items);
  }

  get size() {
    return this.#size;
  }

  clear() {
    const $ = this.#$;
    $.next = $.previous = $;
    this.#size = 0;
  }

  push(...items: T[]) {
    const $ = this.#$;
    for (const value of items) {
      $.previous = $.previous.next = {
        value,
        next: $,
        previous: $.previous,
      };
    }
    this.#size += items.length;
  }

  pop() {
    const $ = this.#$;
    const node = $.previous;
    if (node === $) return;
    $.previous = node.previous;
    node.previous.next = $;
    this.#size--;
    return node.value;
  }

  unshift(...items: T[]) {
    let node: Node<T> = this.#$;
    for (const value of items) {
      node = node.next = node.next.previous = {
        value,
        next: node.next,
        previous: node,
      };
    }
    this.#size += items.length;
  }

  shift() {
    const $ = this.#$;
    const node = $.next;
    if (node === $) return;
    $.next = node.next;
    node.next.previous = $;
    this.#size--;
    return node.value;
  }

  [Symbol.iterator]() {
    const $ = this.#$;
    let current: Readonly<Node<T>> = $.next;
    const next = () => {
      if (current === $) return { value: undefined, done: true };
      const { value } = current;
      current = current.next;
      return { value, done: false };
    };
    return Iterator.from({ next });
  }

  [reverseIterator]() {
    const $ = this.#$;
    let current: Readonly<Node<T>> = $.previous;
    const next = () => {
      if (current === $) return { value: undefined, done: true };
      const { value } = current;
      current = current.previous;
      return { value, done: false };
    };
    return Iterator.from({ next });
  }
}
