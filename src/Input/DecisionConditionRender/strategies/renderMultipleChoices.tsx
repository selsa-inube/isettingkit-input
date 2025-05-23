import { MultipleChoices } from "../../MultipleChoices";
import { Condition, FormikType } from "../types/types";

const renderMultipleChoices = ({
  condition,
  formik,
}: {
  condition: Condition;
  formik: FormikType;
}) => {
  const list = condition.listOfPossibleValues?.list || [];

  const options = list.map((item) => ({
    id: item,
    label: item,
    value: item,
  }));

  const currentValues =
    formik.values.conditionsThatEstablishesTheDecision?.[
      condition.conditionName
    ];

  const formikValue =
    Array.isArray(currentValues) && currentValues.length > 0
      ? currentValues.join(",")
      : "";

  return (
    <MultipleChoices
      id={condition.conditionName}
      labelSelected={condition.conditionName}
      labelSelect={condition.labelName!}
      options={options}
      values={formikValue}
      onChange={(_name, value) => {
        const selectedValues = value.split(",").filter(Boolean);
        formik.setFieldValue(
          `conditionsThatEstablishesTheDecision.${condition.conditionName}`,
          selectedValues,
        );
      }}
      message={
        formik.errors.conditionsThatEstablishesTheDecision?.[
          condition.conditionName
        ]
      }
      placeholderSelect={`Select ${condition.conditionName}`}
      onBlur={() =>
        formik.setFieldTouched(
          `conditionsThatEstablishesTheDecision.${condition.conditionName}`,
          true,
          true,
        )
      }
    />
  );
};

export { renderMultipleChoices };
