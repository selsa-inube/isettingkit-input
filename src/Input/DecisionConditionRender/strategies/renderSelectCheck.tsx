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
    condition.possibleValue?.list?.map((item: string) => ({
      id: item,
      label: item,
      checked: formik.values.conditions[condition.name]?.includes(item),
    })) || [];

  return (
    <SelectCheck
      id={condition.name}
      name={`conditions.${condition.name}`}
      options={options}
      value={formik.values.conditions[condition.name]}
      onChange={(e) => {
        const selectedValue = e.target.value;
        formik.setFieldValue(`conditions.${condition.name}`, selectedValue);
      }}
      onChangeCheck={(e) => {
        const selectedOption = e.target.value;
        const currentValues = formik.values.conditions[condition.name] || [];
        const updatedValues = currentValues.includes(selectedOption)
          ? currentValues.filter((v: string) => v !== selectedOption)
          : [...currentValues, selectedOption];
        formik.setFieldValue(`conditions.${condition.name}`, updatedValues);
      }}
      placeholder={`Select ${condition.name}`}
      message={formik.errors.conditions?.[condition.name]}
      status={
        formik.touched.conditions?.[condition.name]
          ? formik.errors.conditions?.[condition.name]
            ? "invalid"
            : "valid"
          : "pending"
      }
    />
  );
};

export { renderSelectCheck };
