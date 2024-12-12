import { MultipleChoices } from "@isettingkit/input";
import { Condition, FormikType } from "../types/types";

const renderMultipleChoices = ({
  condition,
  formik,
}: {
  condition: Condition;
  formik: FormikType;
}) => (
  <MultipleChoices
    id={condition.name}
    options={
      condition.possibleValue?.list?.map((item) => ({
        id: item,
        label: item,
        checked: formik.values.conditions[condition.name]?.includes(item),
      })) || []
    }
    onHandleSelectCheckChange={(newOptions) => {
      const selectedValues = newOptions
        .filter((option) => option.checked)
        .map((option) => option.id);

      formik.setFieldValue(`conditions.${condition.name}`, selectedValues);
    }}
    message={formik.errors.conditions?.[condition.name]}
    placeholderSelect={`Select ${condition.name}`}
    onBlur={() =>
      formik.setFieldTouched(`conditions.${condition.name}`, true, true)
    }
    labelSelect={""}
    labelSelected={""}
  />
);

export { renderMultipleChoices };
