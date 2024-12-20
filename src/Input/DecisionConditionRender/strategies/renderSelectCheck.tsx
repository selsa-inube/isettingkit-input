import { SelectCheck } from "../../SelectCheck";
import { Condition, FormikType } from "../types/types";
import { IOptionItemChecked } from "../../SelectCheck/OptionItem";

const renderSelectCheck = ({
  condition,
  formik,
}: {
  condition: Condition;
  formik: FormikType;
}) => {
  const options: IOptionItemChecked[] =
    condition.listOfPossibleValues?.list?.map((item: string) => ({
      id: item,
      label: item,
      checked:
        formik.values.conditionThatEstablishesTheDecision[
          condition.conditionName
        ]?.includes(item),
    })) || [];

  return (
    <SelectCheck
      id={condition.conditionName}
      name={`conditionThatEstablishesTheDecision.${condition.conditionName}`}
      options={options}
      value={
        formik.values.conditionThatEstablishesTheDecision[
          condition.conditionName
        ]
      }
      onChange={(e) => {
        const selectedValue = e.target.value;
        formik.setFieldValue(
          `conditionThatEstablishesTheDecision.${condition.conditionName}`,
          selectedValue,
        );
      }}
      onChangeCheck={(e) => {
        const selectedOption = e.target.value;
        const currentValues =
          formik.values.conditionThatEstablishesTheDecision[
            condition.conditionName
          ] || [];
        const updatedValues = currentValues.includes(selectedOption)
          ? currentValues.filter((v: string) => v !== selectedOption)
          : [...currentValues, selectedOption];
        formik.setFieldValue(
          `conditionThatEstablishesTheDecision.${condition.conditionName}`,
          updatedValues,
        );
      }}
      placeholder={`Select ${condition.conditionName}`}
      message={
        formik.errors.conditionThatEstablishesTheDecision?.[
          condition.conditionName
        ]
      }
      status={
        formik.touched.conditionThatEstablishesTheDecision?.[
          condition.conditionName
        ]
          ? formik.errors.conditionThatEstablishesTheDecision?.[
              condition.conditionName
            ]
            ? "invalid"
            : "valid"
          : "pending"
      }
    />
  );
};

export { renderSelectCheck };
