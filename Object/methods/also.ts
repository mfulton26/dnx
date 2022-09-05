export default function also<T>(this: T, action: (value: T) => void): T {
  action(this);
  return this;
}
