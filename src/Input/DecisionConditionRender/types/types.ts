/* eslint-disable @typescript-eslint/no-explicit-any */
interface Condition {
  valueUse:
    | "RANGE"
    | "LIST_OF_VALUES_MULTI"
    | "EQUAL"
    | "GREATER_THAN"
    | "LESS_THAN";
  listOfPossibleValues?: { list?: string[] };
  conditionDataType: string;
  decisionDataType?: string;
  howToSetTheCondition: string;
  howToSetTheDecision: string;
  conditionName: string;
  ruleName: string;
  labelName: string;
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
