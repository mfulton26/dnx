export default function lines(this: string) {
  return this.split(/\r\n|\r|\n/);
}
