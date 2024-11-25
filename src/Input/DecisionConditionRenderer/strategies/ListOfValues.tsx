import { Select } from "@inubekit/select";
import { StyledLabelAlignment } from "../styles";
import { IStrategy } from "../types";

function ListOfValuesStrategy({
  name,
  nameLabel,
  possibleValues,
  message,
  type,
  handleSelectChange,
}: IStrategy) {
  const interceptHandleSelectChange = (name: string, value: string) => {
    try {
      handleSelectChange && handleSelectChange(name, value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledLabelAlignment
      $type={type === "condition" ? "flex-start" : "center"}
    >
      <Select
        id={name}
        name={name}
        label={nameLabel}
        options={
          Array.isArray(possibleValues?.list)
            ? possibleValues.list.map((item) => ({
                id: item,
                label: item,
                value: item,
              }))
            : []
        }
        message={String(message)}
        fullwidth
        onChange={(name, value) => interceptHandleSelectChange(name, value)}
        value={""}
      />
    </StyledLabelAlignment>
  );
}

export { ListOfValuesStrategy };
