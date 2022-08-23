import type Collatable from "./Collatable.d.ts";
import type ValuePick from "./ValuePick.d.ts";

export type FunctionSelector<T> = (value: T) => Collatable;

export type PropertyKeySelector<T> = keyof ValuePick<T, Collatable>;

type Selector<T> = FunctionSelector<T> | PropertyKeySelector<T>;

export default Selector;
