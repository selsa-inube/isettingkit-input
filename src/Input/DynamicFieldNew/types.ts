import { ReactNode } from "react";
import { IInputStatus } from "../types/IInputStatus";

interface IFieldStrategyNew {
  label: string;
  messageValidate?: string;
  name: string;
  placeholder?: string;
  onBlur?: () => void;
  onChange: (value: string | number) => void;
  statusValidate?: string | IInputStatus;
  value: string | number;
  condition?: boolean;
}

type FieldStrategyNew = {
  render: (props: IFieldStrategyNew) => ReactNode;
};

type FieldType = "alphabetical" | "currency" | "number" | "percentage";

export type { FieldStrategyNew, FieldType, IFieldStrategyNew };
