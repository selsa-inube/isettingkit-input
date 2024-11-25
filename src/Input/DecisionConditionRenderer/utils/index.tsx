import { GreaterThanStrategy } from "../strategies/GreaterThan";
import { ListOfValuesStrategy } from "../strategies/ListOfValues";
import { ListOfValuesMultiStrategy } from "../strategies/ListOfValuesMulti";
import { RangeStrategy } from "../strategies/Range";

const strategies = {
  LIST_OF_VALUES: ListOfValuesStrategy,
  LIST_OF_VALUES_MULTI: ListOfValuesMultiStrategy,
  RANGE: RangeStrategy,
  GREATER_THAN: GreaterThanStrategy,
  LESS_THAN: GreaterThanStrategy,
  EQUAL: GreaterThanStrategy,
};

type StrategyType = keyof typeof strategies;
const getStrategy = (type: StrategyType) => strategies[type];

export { getStrategy };
export type { StrategyType };
