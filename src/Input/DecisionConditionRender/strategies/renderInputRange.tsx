import { InputRange } from "../../InputRange";
import { Condition, FormikType } from "../types/types";
import { IInputStatus, IInputType } from "../../types";

const renderInputRange = ({
  condition,
  formik,
}: {
  condition: Condition;
  formik: FormikType;
}) => (
  <InputRange
    id={`range-${condition.conditionName}`}
    label={condition.conditionName}
    valueFrom={
      formik.values.conditionsThatEstablishesTheDecision[
        condition.conditionName
      ]?.from
    }
    valueTo={
      formik.values.conditionsThatEstablishesTheDecision[
        condition.conditionName
      ]?.to
    }
    handleInputChangeFrom={(value) =>
      formik.setFieldValue(
        `conditionsThatEstablishesTheDecision.${condition.conditionName}.from`,
        value,
      )
    }
    handleInputChangeTo={(value) =>
      formik.setFieldValue(
        `conditionsThatEstablishesTheDecision.${condition.conditionName}.to`,
        value,
      )
    }
    messageFrom={
      formik.errors.conditionsThatEstablishesTheDecision?.[
        condition.conditionName
      ]?.from
    }
    messageTo={
      formik.errors.conditionsThatEstablishesTheDecision?.[
        condition.conditionName
      ]?.to
    }
    statusFrom={
      (formik.touched.conditionsThatEstablishesTheDecision?.[
        condition.conditionName
      ]?.from
        ? formik.errors.conditionsThatEstablishesTheDecision?.[
            condition.conditionName
          ]?.from
          ? "invalid"
          : "valid"
        : "pending") as IInputStatus
    }
    statusTo={
      (formik.touched.conditionsThatEstablishesTheDecision?.[
        condition.conditionName
      ]?.to
        ? formik.errors.conditionsThatEstablishesTheDecision?.[
            condition.conditionName
          ]?.to
          ? "invalid"
          : "valid"
        : "pending") as IInputStatus
    }
    onBlur={formik.handleBlur}
    typeInput={condition.conditionDataType!.toLowerCase() as IInputType}
  />
);

export { renderInputRange };
