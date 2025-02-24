import { IOption, Select } from "@inubekit/inubekit";
import { Condition, FormikType } from "../types/types";

const renderDecisionSelectCheck = ({
  condition,
  formik,
}: {
  condition: Condition;
  formik: FormikType;
}) => {
  const options =
    condition.listOfPossibleValues?.list?.map((item: string) => ({
      id: item,
      label: item,
      value: item,
    })) || [];
  const handleChange = (_: string, newValue: string) => {
    formik.setFieldValue("value", newValue);
  };
  return (
    <Select
      id={condition.ruleName!}
      name={condition.ruleName!}
      options={options as IOption[]}
      value={formik.values.value}
      onChange={handleChange}
      placeholder={`Select ${condition.labelName}`}
      message={formik.errors.value}
      invalid={Boolean(formik.touched.value && formik.errors.value)}
      fullwidth
    />
  );
};

export { renderDecisionSelectCheck };
