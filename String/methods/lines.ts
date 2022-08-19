export default function* lines(this: string) {
  const { length } = this;
  let start = 0;
  for (let end = 0; end < length; end++) {
    switch (this[end]) {
      case "\n":
        yield this.slice(start, end);
        start = end + 1;
        break;
      case "\r":
        yield this.slice(start, end);
        if (this[end + 1] === "\n") end++;
        start = end + 1;
        break;
    }
  }
  if (start < length) yield this.slice(start, length);
}
