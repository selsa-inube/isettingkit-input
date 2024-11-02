/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  string,
  number,
  StringSchema,
  NumberSchema,
  object,
  ObjectSchema,
  AnyObject,
} from "yup";
import {
  ICondition,
  IDecision,
  IRuleDecision,
  IValue,
  ValueHowToSetUp,
} from "./types";

declare const inputTypes: readonly [
  "alphabetical",
  "date",
  "currency",
  "number",
  "percentage",
];

declare type ITextfieldInputType = (typeof inputTypes)[number];

interface TypeDataOutput {
  schema: StringSchema | NumberSchema | ObjectSchema<any, AnyObject, any>;
  value: IValue | undefined | string | number | string[];
}
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
  element:
    | IDecision
    | ICondition
    | IRuleDecision
    | IValue
    | undefined
    | string[],
): TypeDataOutput | undefined => {
  if (
    "value" in element! &&
    "valueUse" in element! &&
    element.value !== undefined
  ) {
    const value = element.value;
    const fromNumber =
      typeof value === "object" &&
      "from" in value &&
      typeof value.from === "number"
        ? value.from
        : 0;
    const toNumber =
      typeof value === "object" && "to" in value && typeof value.to === "number"
        ? value.to
        : Infinity;

    switch (element!.valueUse) {
      case ValueHowToSetUp.LIST_OF_VALUES:
        return {
          schema: string(),
          value: value,
        };
      case ValueHowToSetUp.LIST_OF_VALUES_MULTI:
        return {
          schema: string(),
          value: value,
        };
      case ValueHowToSetUp.RANGE:
        return {
          schema: object({
            from: number()
              .required("Range From is required")
              .max(toNumber, "'Range From' cannot be greater than 'Range To'")
              .min(0, "'Range From' cannot be less than 0"),
            to: number()
              .required("Range To is required")
              .min(fromNumber, "'Range To' cannot be less than 'Range From'")
              .min(0, "'Range To' cannot be less than 0"),
          }),
          value: {
            from: fromNumber,
            to: toNumber,
          },
        };
      case ValueHowToSetUp.GREATER_THAN:
      case ValueHowToSetUp.LESS_THAN:
      case ValueHowToSetUp.EQUAL:
        return {
          schema: string().required("Required"),
          value: value,
        };
      default:
        return {
          schema: string(),
          value: undefined,
        };
    }
  }
};

const ValueValidationSchema = (decision: IRuleDecision) => {
  const respValue: {
      [key: string]:
        | StringSchema
        | NumberSchema
        | ObjectSchema<any, AnyObject, any>;
    } = {},
    initialValues: {
      [key: string]: IValue | undefined | string | number | string[];
    } = {};

  if (decision) {
    const decisionData = typeData(decision);
    if (decisionData) {
      respValue[decision.name] = decisionData.schema;
      initialValues[decision.name] = decisionData.value;
    }
  }

  if (decision.conditions) {
    decision.conditions.forEach((condition: { name: string | number }) => {
      const typeDataResult = typeData(condition as ICondition);
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

interface IRangeMessages {
  from?: string | NestedErrors | IRangeMessages;
  to?: string | NestedErrors | IRangeMessages;
}

interface NestedErrors {
  [key: string]: string | NestedErrors | IRangeMessages;
}

const findNestedError = (
  errors: NestedErrors | string,
): string | IRangeMessages => {
  if (typeof errors === "string") {
    return errors;
  }

  if (typeof errors === "object" && ("from" in errors || "to" in errors)) {
    const rangeMessages: IRangeMessages = {
      from: errors.from || "",
      to: errors.to || "",
    };
    return rangeMessages;
  }

  for (const key in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, key)) {
      const nestedError = findNestedError(errors[key] as NestedErrors);
      if (nestedError) return nestedError;
    }
  }

  return "";
};

export {
  currencyFormat,
  formatValue,
  findNestedError,
  parseCurrencyString,
  parsePercentageString,
  percentageFormat,
  typeData,
  ValueValidationSchema,
};
export type { IRangeMessages, TypeDataOutput };
