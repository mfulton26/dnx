import lines from "../../../../../../String/lines.ts";
import map from "../../../../../../Iterator/map.ts";
import slices from "../../../../../../Iterator/slices.ts";
import count from "../../../../../../Iterator/count.ts";

export default function solve(input: string) {
  return input[lines]()[map](Number)[slices](2)[count](([a, b]) => b > a);
}
