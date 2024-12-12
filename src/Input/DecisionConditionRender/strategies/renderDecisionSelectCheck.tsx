import { SelectCheck } from "@isettingkit/input";
import { Condition, FormikType } from "../types/types";
import { IOptionItemChecked } from "src/Input/SelectCheck/OptionItem";

const renderDecisionSelectCheck = ({
  condition,
  formik,
}: {
  condition: Condition;
  formik: FormikType;
}) => {
  const options: IOptionItemChecked[] =
    condition.possibleValue?.list?.map((item: string) => ({
      id: item,
      label: item,
      checked: formik.values.value?.includes(item),
    })) || [];

  return (
    <SelectCheck
      id="value"
      name="value"
      options={options}
      value={formik.values.value}
      onChange={(e) => {
        const selectedValue = e.target.value;
        formik.setFieldValue("value", selectedValue);
      }}
      onChangeCheck={(e) => {
        const selectedOption = e.target.value;
        const currentValues = formik.values.value || [];
        const updatedValues = currentValues.includes(selectedOption)
          ? currentValues.filter((v: string) => v !== selectedOption)
          : [...currentValues, selectedOption];
        formik.setFieldValue("value", updatedValues);
      }}
      placeholder={`Select ${condition.name}`}
      message={formik.errors.value}
      status={
        formik.touched.value
          ? formik.errors.value
            ? "invalid"
            : "valid"
          : "pending"
      }
    />
  );
};

export { renderDecisionSelectCheck };
