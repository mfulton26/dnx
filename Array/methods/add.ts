export default function add<T>(this: T[], item: T) {
  this.push(item);
  return this;
}
