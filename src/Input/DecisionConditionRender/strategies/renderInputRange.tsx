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
    id={`range-${condition.name}`}
    label={condition.name}
    valueFrom={formik.values.conditions[condition.name]?.from}
    valueTo={formik.values.conditions[condition.name]?.to}
    handleInputChangeFrom={(value) =>
      formik.setFieldValue(`conditions.${condition.name}.from`, value)
    }
    handleInputChangeTo={(value) =>
      formik.setFieldValue(`conditions.${condition.name}.to`, value)
    }
    messageFrom={formik.errors.conditions?.[condition.name]?.from}
    messageTo={formik.errors.conditions?.[condition.name]?.to}
    statusFrom={
      (formik.touched.conditions?.[condition.name]?.from
        ? formik.errors.conditions?.[condition.name]?.from
          ? "invalid"
          : "valid"
        : "pending") as IInputStatus
    }
    statusTo={
      (formik.touched.conditions?.[condition.name]?.to
        ? formik.errors.conditions?.[condition.name]?.to
          ? "invalid"
          : "valid"
        : "pending") as IInputStatus
    }
    onBlur={formik.handleBlur}
    typeInput={condition.conditionDataType!.toLowerCase() as IInputType}
  />
);

export { renderInputRange };
