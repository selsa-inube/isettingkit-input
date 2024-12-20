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
        formik.values.conditions[condition.conditionName]?.includes(item),
    })) || [];

  return (
    <SelectCheck
      id={condition.conditionName}
      name={`conditions.${condition.conditionName}`}
      options={options}
      value={formik.values.conditions[condition.conditionName]}
      onChange={(e) => {
        const selectedValue = e.target.value;
        formik.setFieldValue(
          `conditions.${condition.conditionName}`,
          selectedValue,
        );
      }}
      onChangeCheck={(e) => {
        const selectedOption = e.target.value;
        const currentValues =
          formik.values.conditions[condition.conditionName] || [];
        const updatedValues = currentValues.includes(selectedOption)
          ? currentValues.filter((v: string) => v !== selectedOption)
          : [...currentValues, selectedOption];
        formik.setFieldValue(
          `conditions.${condition.conditionName}`,
          updatedValues,
        );
      }}
      placeholder={`Select ${condition.conditionName}`}
      message={formik.errors.conditions?.[condition.conditionName]}
      status={
        formik.touched.conditions?.[condition.conditionName]
          ? formik.errors.conditions?.[condition.conditionName]
            ? "invalid"
            : "valid"
          : "pending"
      }
    />
  );
};

export { renderSelectCheck };
