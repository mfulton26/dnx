import lines from "../../../../../../String/lines.ts";
import map from "../../../../../../Array/map.ts";
import slices from "../../../../../../Array/slices.ts";
import count from "../../../../../../Array/count.ts";

export default function solve(input: string) {
  return input[lines]()
    [map](Number)
    [slices](4)
    [count](([a, , , d]) => d > a);
}
