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
      formik.values.conditionThatEstablishesTheDecision[condition.conditionName]
        ?.from
    }
    valueTo={
      formik.values.conditionThatEstablishesTheDecision[condition.conditionName]
        ?.to
    }
    handleInputChangeFrom={(value) =>
      formik.setFieldValue(
        `conditionThatEstablishesTheDecision.${condition.conditionName}.from`,
        value,
      )
    }
    handleInputChangeTo={(value) =>
      formik.setFieldValue(
        `conditionThatEstablishesTheDecision.${condition.conditionName}.to`,
        value,
      )
    }
    messageFrom={
      formik.errors.conditionThatEstablishesTheDecision?.[
        condition.conditionName
      ]?.from
    }
    messageTo={
      formik.errors.conditionThatEstablishesTheDecision?.[
        condition.conditionName
      ]?.to
    }
    statusFrom={
      (formik.touched.conditionThatEstablishesTheDecision?.[
        condition.conditionName
      ]?.from
        ? formik.errors.conditionThatEstablishesTheDecision?.[
            condition.conditionName
          ]?.from
          ? "invalid"
          : "valid"
        : "pending") as IInputStatus
    }
    statusTo={
      (formik.touched.conditionThatEstablishesTheDecision?.[
        condition.conditionName
      ]?.to
        ? formik.errors.conditionThatEstablishesTheDecision?.[
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
