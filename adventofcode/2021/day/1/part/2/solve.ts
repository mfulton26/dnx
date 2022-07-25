import lines from "dnx/String/lines.ts";
import map from "dnx/Iterator/map.ts";
import slices from "dnx/Iterator/slices.ts";
import count from "dnx/Iterator/count.ts";

export default function solve(input: string) {
  return input[lines]()[map](Number)[slices](4)[count](([a, , , d]) => d > a);
}
