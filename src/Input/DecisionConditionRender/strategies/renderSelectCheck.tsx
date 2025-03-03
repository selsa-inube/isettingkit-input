import { Select } from "@inubekit/inubekit";
import { Condition, FormikType } from "../types/types";

const renderSelectCheck = ({
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
    formik.setFieldValue(
      `conditionThatEstablishesTheDecision.${condition.conditionName}`,
      newValue,
    );
  };

  return (
    <Select
      id={condition.conditionName}
      name={`conditionThatEstablishesTheDecision.${condition.conditionName}`}
      options={options}
      value={
        formik.values.conditionThatEstablishesTheDecision[
          condition.conditionName
        ]
      }
      onChange={handleChange}
      placeholder={`Select ${condition.conditionName}`}
      message={
        formik.errors.conditionThatEstablishesTheDecision?.[
          condition.conditionName
        ]
      }
      invalid={Boolean(
        formik.touched.conditionThatEstablishesTheDecision?.[
          condition.conditionName
        ] &&
          formik.errors.conditionThatEstablishesTheDecision?.[
            condition.conditionName
          ],
      )}
      fullwidth
    />
  );
};

export { renderSelectCheck };
