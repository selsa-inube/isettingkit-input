/* eslint-disable @typescript-eslint/no-explicit-any */
interface IFormikTypeNew {
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
  submitCount: number;
}

export type { IFormikTypeNew };
