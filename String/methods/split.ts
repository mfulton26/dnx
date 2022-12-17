export default function split(
  this: string,
  separator: string | RegExp,
  limit?: number,
): string[];
export default function split(
  this: string,
  splitter: { [Symbol.split](string: string, limit?: number): string[] },
  limit?: number,
): string[];
export default function split(this: string, arg0: unknown, limit?: number) {
  return this.split(arg0 as any, limit);
}
