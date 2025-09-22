import { IInputStatus, IInputType } from "../../types";
import { InputRangeNew } from "../../../Input/InputRangeNew";
import { IConditionNew } from "../types/IConditionNew";
import { IFormikTypeNew } from "../types/IFormikTypeNew";

const renderInputRange = ({
  condition,
  formik,
}: {
  condition: IConditionNew;
  formik: IFormikTypeNew;
}) => (
  <InputRangeNew
    condition
    id={`range-${condition.conditionName}`}
    label={condition.labelName!}
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
