/* eslint-disable @typescript-eslint/no-explicit-any */
import { IInputType } from "../../types";
import { InputRangeNew } from "../../../Input/InputRangeNew";
import { IConditionNew } from "../types/IConditionNew";
import { IFormikTypeNew } from "../types/IFormikTypeNew";
import { IInputStatus } from "../../../Input/types/IInputStatus";

const renderInputRange = ({
  condition,
  formik,
}: {
  condition: IConditionNew;
  formik: IFormikTypeNew;
}) => {
  const groupKey = condition.groupKey || "group-primary";

  const condFromFormik =
    formik.values.conditionsThatEstablishesTheDecision?.[groupKey]?.[
      condition.conditionName!
    ];

  const range = condFromFormik?.value ?? condFromFormik ?? {};

  const errorsForCond =
    (formik.errors as any).conditionsThatEstablishesTheDecision?.[groupKey]?.[
      condition.conditionName!
    ] || {};

  const touchedForCond =
    (formik.touched as any).conditionsThatEstablishesTheDecision?.[groupKey]?.[
      condition.conditionName!
    ] || {};

  const messageFrom = errorsForCond?.value?.from;
  const messageTo = errorsForCond?.value?.to;

  const statusFrom = (
    touchedForCond?.value?.from
      ? messageFrom
        ? "invalid"
        : "valid"
      : "pending"
  ) as IInputStatus;

  const statusTo = (
    touchedForCond?.value?.to ? (messageTo ? "invalid" : "valid") : "pending"
  ) as IInputStatus;

  return (
    <InputRangeNew
      condition
      id={`range-${condition.conditionName}`}
      label={condition.labelName!}
      valueFrom={range?.from}
      valueTo={range?.to}
      handleInputChangeFrom={(value) =>
        formik.setFieldValue(
          `conditionsThatEstablishesTheDecision.${groupKey}.${condition.conditionName}.value.from`,
          value,
        )
      }
      handleInputChangeTo={(value) =>
        formik.setFieldValue(
          `conditionsThatEstablishesTheDecision.${groupKey}.${condition.conditionName}.value.to`,
          value,
        )
      }
      messageFrom={messageFrom}
      messageTo={messageTo}
      statusFrom={statusFrom}
      statusTo={statusTo}
      onBlur={formik.handleBlur}
      typeInput={condition.conditionDataType!.toLowerCase() as IInputType}
      listOfPossibleValues={condition.listOfPossibleValues}
    />
  );
};

export { renderInputRange };
