import {
  ICondition,
  IDecision,
  IRuleDecision,
  TypeDataOutput,
  ValueHowToSetUp,
} from "./types";
import * as Yup from "yup";

const typeData = (
  element: IDecision | ICondition,
): TypeDataOutput | undefined => {
  const value = element.possibleValue;
  switch (element.howToSetUp) {
    case ValueHowToSetUp.LIST_OF_VALUES:
      return {
        schema: Yup.string(),
        value: value.listSelected?.[0],
      };
    case ValueHowToSetUp.LIST_OF_VALUES_MULTI:
      return {
        schema: Yup.string(),
        value: "",
      };
    case ValueHowToSetUp.RANGE:
      return {
        schema: Yup.number(),
        value: {
          rangeFrom: (value?.rangeFrom as number) || 0,
          rangeTo: (value?.rangeTo as number) || 0,
        },
      };
    case ValueHowToSetUp.GREATER_THAN:
    case ValueHowToSetUp.LESS_THAN:
    case ValueHowToSetUp.EQUAL:
      return {
        schema: Yup.string().required("Required"),
        value: value.value,
      };
    default:
      return {
        schema: Yup.string(),
        value: undefined,
      };
  }
};

const ValueValidationSchema = (decision: IRuleDecision) => {
  const respValue: { [key: string]: Yup.StringSchema | Yup.NumberSchema } = {},
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
  return { validationSchema: Yup.object().shape(respValue), initialValues };
};

export const currencyFormat = (price: number): string => {
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

export { ValueValidationSchema, parseCurrencyString };
