import { ReactNode } from "react";
import { IInputStatus } from "../types/IInputStatus";

interface IFieldStrategy {
  label: string;
  messageValidate?: string;
  name: string;
  onBlur?: () => void;
  onChange: (value: string | number) => void;
  statusValidate?: string | IInputStatus;
  value: string | number;
}

type FieldStrategy = {
  render: (props: IFieldStrategy) => ReactNode;
};

type FieldStrategyMap = Record<string, FieldStrategy>;

type FieldType = "alphabetical" | "currency" | "number" | "percentage";

export type { FieldStrategy, FieldStrategyMap, FieldType, IFieldStrategy };
