/* eslint-disable @typescript-eslint/no-explicit-any */
import { StringSchema, NumberSchema, ObjectSchema, AnyObject } from "yup";
import { IValue } from "./types/IValue";

declare const inputTypes: readonly [
  "alphabetical",
  "date",
  "currency",
  "number",
  "monetary",
  "percentage",
];

declare type ITextfieldInputType = (typeof inputTypes)[number];

interface TypeDataOutput {
  schema: StringSchema | NumberSchema | ObjectSchema<any, AnyObject, any>;
  value: IValue | undefined | string | number | string[];
}
const currencyFormat = (price: number | string): string => {
  if (!price || price === 0) {
    return "$ 0";
  }

  if (typeof price === "string") {
    if (price.includes("Mayor a") || price.includes("Menor a")) {
      return price.replace(/(\d+)$/, (match) => {
        const number = parseInt(match);
        const formattedNumber = Intl.NumberFormat("es-CO", {
          minimumFractionDigits: 0,
        }).format(number);
        return `$${formattedNumber}`;
      });
    }
    const num = parseFloat(price);
    return !isNaN(num)
      ? Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0,
        }).format(num)
      : `$ ${price}`;
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
  const m = percentageString.match(/-?\d+(?:[.,]\d+)?/);
  return m ? parseFloat(m[0].replace(",", ".")) : NaN;
};

const percentageFormat = (percentage: number | string): string => {
  if (percentage === 0 || percentage === "0" || percentage === "0%") {
    return "0%";
  }

  if (typeof percentage === "string") {
    const trimmed = percentage.trim();

    if (/Mayor a|Menor a/i.test(trimmed)) {
      return /%$/.test(trimmed) ? trimmed : `${trimmed}%`;
    }

    if (/%$/.test(trimmed)) return trimmed;

    const num = parsePercentageString(trimmed);
    return Number.isFinite(num) ? `${String(num)}%` : percentage;
  }

  return `${String(percentage)}%`;
};

const formatters: Record<
  ITextfieldInputType,
  (value: number | string) => string | number
> = {
  currency: (value) => currencyFormat(value),
  monetary: (value) => currencyFormat(value),
  percentage: (value) => percentageFormat(value),
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
};
export type { IRangeMessages, TypeDataOutput };
