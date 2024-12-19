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
  howToSetTheCondition: string;
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
