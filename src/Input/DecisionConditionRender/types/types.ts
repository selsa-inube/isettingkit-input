import { ValueDataType } from "src/Input/types";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Condition {
  valueUse:
    | "RANGE"
    | "LIST_OF_VALUES_MULTI"
    | "EQUAL"
    | "GREATER_THAN"
    | "LESS_THAN";
  name: string;
  listOfPossibleValues?: { list?: string[] };
  conditionDataType: string;
  decisionDataType?: (typeof ValueDataType)[keyof typeof ValueDataType];
  howToSetTheCondition: string;
  howToSetTheDecision?: string;
  conditionName?: string;
  ruleName?: string;
  labelName?: string;
}

interface FormikType {
  setFieldValue: (field: string, value: any) => void;
  setFieldTouched: (
    field: string,
    isTouched: boolean,
    shouldValidate?: boolean,
  ) => void;
  values: Record<string, any>;
  errors: Record<string, any>;
  touched: Record<string, any>;
  handleBlur: () => void;
}

export type { Condition, FormikType };
