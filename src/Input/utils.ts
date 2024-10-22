import { string, number, StringSchema, NumberSchema, object } from "yup";
import {
  ICondition,
  IDecision,
  IRuleDecision,
  TypeDataOutput,
  ValueHowToSetUp,
} from "./types";
import { ITextfieldInputType } from "./DynamicField";

const currencyFormat = (price: number): string => {
  if (price === 0 || !price) {
    return "$ 0";
  }
  return Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price);
};

const parseCurrencyString = (currencyString: string): number => {
  if (currencyString === "$ 0") {
    return NaN;
  }
  return parseInt(currencyString.replace(/\$|\./g, ""));
};

const parsePercentageString = (percentageString: string): number => {
  if (percentageString === "0%") {
    return NaN;
  }
  return parseFloat(percentageString.replace("%", ""));
};

const percentageFormat = (percentage: number): string => {
  if (percentage === 0 || !percentage) {
    return "0%";
  }
  return `${percentage.toFixed(0)}%`;
};

const typeData = (
  element: IDecision | ICondition,
): TypeDataOutput | undefined => {
  const value = element.possibleValue;
  switch (element.howToSetUp) {
    case ValueHowToSetUp.LIST_OF_VALUES:
      return {
        schema: string(),
        value: value!.listSelected?.[0],
      };
    case ValueHowToSetUp.LIST_OF_VALUES_MULTI:
      return {
        schema: string(),
        value: "",
      };
    case ValueHowToSetUp.RANGE:
      return {
        schema: number(),
        value: {
          rangeFrom: (value?.rangeFrom as number) || 0,
          rangeTo: (value?.rangeTo as number) || 0,
        },
      };
    case ValueHowToSetUp.GREATER_THAN:
    case ValueHowToSetUp.LESS_THAN:
    case ValueHowToSetUp.EQUAL:
      return {
        schema: string().required("Required"),
        value: value!.value,
      };
    default:
      return {
        schema: string(),
        value: undefined,
      };
  }
};

const ValueValidationSchema = (decision: IRuleDecision) => {
  const respValue: { [key: string]: StringSchema | NumberSchema } = {},
    initialValues: {
      [key: string]:
        | string
        | number
        | { rangeFrom: number; rangeTo: number }
        | undefined;
    } = {};

  if (decision.decision) {
    const decisionData = typeData(decision.decision);
    if (decisionData) {
      respValue[decision.decision.name] = decisionData.schema;
      initialValues[decision.decision.name] = decisionData.value;
    }
  }

  if (decision.conditions) {
    decision.conditions.forEach((condition) => {
      const typeDataResult = typeData(condition);
      if (typeDataResult) {
        respValue[condition.name] = typeDataResult.schema;
        initialValues[condition.name] = typeDataResult.value;
      }
    });
  }
  return { validationSchema: object().shape(respValue), initialValues };
};

const formatters: Record<
  ITextfieldInputType,
  (value: number | string) => string | number
> = {
  currency: (value) =>
    typeof value === "number" ? currencyFormat(value) : value,
  percentage: (value) =>
    typeof value === "number" ? percentageFormat(value) : value,
  number: (value) => value,
  alphabetical: (value) => value,
  date: (value) => value,
};

const formatValue = (value: number | string, type: ITextfieldInputType) => {
  const formatter = formatters[type] || ((v: number) => v);
  return formatter(value);
};

export {
  currencyFormat,
  formatValue,
  parseCurrencyString,
  parsePercentageString,
  percentageFormat,
  typeData,
  ValueValidationSchema,
};
