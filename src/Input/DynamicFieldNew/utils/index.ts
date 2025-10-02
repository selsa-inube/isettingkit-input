import { IFieldStrategyMap } from "../../../Input/types/IFieldStrategyMap";
import { AlphabeticalStrategyNew } from "../strategies/Alphabetical";
import { CurrencyStrategyNew } from "../strategies/Currency";
import { DateStrategyNew } from "../strategies/Date";
import { NumberStrategyNew } from "../strategies/Number";
import { PercentageStrategyNew } from "../strategies/Percentage";

const fieldStrategies: IFieldStrategyMap = {
  alphabetical: AlphabeticalStrategyNew,
  currency: CurrencyStrategyNew,
  monetary: CurrencyStrategyNew,
  date: DateStrategyNew,
  number: NumberStrategyNew,
  percentage: PercentageStrategyNew,
};

const getFieldStrategy = (type: string) => fieldStrategies[type] || null;

export { getFieldStrategy };
