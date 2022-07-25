interface Node<T> {
  value: T;
  next: Node<T>;
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

export default class Queue<T> {
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
      };
    }
    this.#size += items.length;
  }

  shift(): T | undefined {
    const $ = this.#$;
    const node = $.next;
    if (node === $) return;
    $.next = node.next;
    this.#size--;
    return node.value;
  }

  *[Symbol.iterator]() {
    const $ = this.#$;
    for (
      let current: Readonly<Node<T>> = $.next;
      current !== $;
      current = current.next
    ) {
      yield current.value;
    }
  }
}
