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
    valueFrom={formik.values.conditions[condition.conditionName]?.from}
    valueTo={formik.values.conditions[condition.conditionName]?.to}
    handleInputChangeFrom={(value) =>
      formik.setFieldValue(`conditions.${condition.conditionName}.from`, value)
    }
    handleInputChangeTo={(value) =>
      formik.setFieldValue(`conditions.${condition.conditionName}.to`, value)
    }
    messageFrom={formik.errors.conditions?.[condition.conditionName]?.from}
    messageTo={formik.errors.conditions?.[condition.conditionName]?.to}
    statusFrom={
      (formik.touched.conditions?.[condition.conditionName]?.from
        ? formik.errors.conditions?.[condition.conditionName]?.from
          ? "invalid"
          : "valid"
        : "pending") as IInputStatus
    }
    statusTo={
      (formik.touched.conditions?.[condition.conditionName]?.to
        ? formik.errors.conditions?.[condition.conditionName]?.to
          ? "invalid"
          : "valid"
        : "pending") as IInputStatus
    }
    onBlur={formik.handleBlur}
    typeInput={condition.conditionDataType!.toLowerCase() as IInputType}
  />
);

export { renderInputRange };
