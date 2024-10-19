import { Stack } from "@inubekit/stack";
import { StyledOptionItemChecked } from "./styles";
import { Checkbox } from "@inubekit/checkbox";

interface IOptionItemChecked {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptionItemChecked = (props: IOptionItemChecked) => {
  const { id, label, checked = false, onChange } = props;

  return (
    <StyledOptionItemChecked>
      <Stack direction="row" alignItems="center" gap="4px">
        <Checkbox
          id={id}
          name={id}
          checked={checked}
          value=""
          onChange={onChange!}
          label={label}
        />
      </Stack>
    </StyledOptionItemChecked>
  );
};

export { OptionItemChecked };
export type { IOptionItemChecked };
