import { FieldStrategyMap } from "../types";
import { AlphabeticalStrategy } from "../strategies/Alphabetical";
import { CurrencyStrategy } from "../strategies/Currency";
import { DateStrategy } from "../strategies/Date";
import { NumberStrategy } from "../strategies/Number";
import { PercentageStrategy } from "../strategies/Percentage";

const fieldStrategies: FieldStrategyMap = {
  alphabetical: AlphabeticalStrategy,
  currency: CurrencyStrategy,
  date: DateStrategy,
  number: NumberStrategy,
  percentage: PercentageStrategy,
};

export const getFieldStrategy = (type: string) => fieldStrategies[type] || null;
