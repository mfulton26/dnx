import type Selectors from "./Selectors.d.ts";

import compareValuesBy from "./comparisons/compareValuesBy.ts";

export default class Collator<T> {
  #compareFn;

  constructor(compareFn: (a: T, b: T) => number) {
    this.#compareFn = compareFn;
    this.compare = this.compare.bind(this);
  }

  compare(a: T, b: T): number {
    return this.#compareFn(a, b);
  }

  reversed(): Collator<T> {
    return new Collator((a, b) => this.compare(b, a));
  }

  then(collator: Collator<T>): Collator<T> {
    return new Collator((a, b) => this.compare(a, b) || collator.compare(a, b));
  }

  thenCollator(compareFn: (a: T, b: T) => number): Collator<T> {
    return new Collator((a, b) => this.compare(a, b) || compareFn(a, b));
  }

  thenBy(...selectors: Selectors<T>): Collator<T> {
    return new Collator(
      (a, b) => this.compare(a, b) || compareValuesBy(a, b, ...selectors),
    );
  }

  thenByDescending(...selectors: Selectors<T>): Collator<T> {
    return new Collator(
      (a, b) => this.compare(a, b) || compareValuesBy(b, a, ...selectors),
    );
  }
}
