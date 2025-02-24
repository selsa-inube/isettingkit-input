import { forwardRef } from "react";
import {
  MdOutlineError,
  MdCheckCircle,
  MdOutlineArrowDropDown,
} from "react-icons/md";
import { Text } from "@inubekit/inubekit";
import { Icon } from "@inubekit/inubekit";
import { Label } from "@inubekit/inubekit";
import { Stack } from "@inubekit/inubekit";

import { OptionList } from "./OptionList";
import { Size } from "./types";
import { StyledContainer, StyledInputContainer, StyledInput } from "./styles";
import { SelectCheckProps } from ".";
import { OptionItemChecked } from "./OptionItem";

export interface SelectCheckUIProps extends SelectCheckProps {
  displayList: boolean;
  focused?: boolean;
}

const getTypo = (size: Size) => {
  return size === "compact" ? "medium" : "large";
};

const Message = (
  props: Pick<SelectCheckProps, "disabled" | "status"> & { message?: string },
) => {
  const { disabled, status, message } = props;

  return (
    status !== "pending" && (
      <Stack alignItems="center" gap="4px" margin="4px 0 0 16px">
        <Icon
          appearance={status === "invalid" ? "danger" : "success"}
          disabled={disabled}
          icon={status === "invalid" ? <MdOutlineError /> : <MdCheckCircle />}
          size="14px"
        />
        <Text
          type="body"
          size="small"
          appearance={status === "invalid" ? "danger" : "success"}
          disabled={disabled}
        >
          {message && `${message}`}
        </Text>
      </Stack>
    )
  );
};

export const SelectCheckUI = forwardRef<HTMLDivElement, SelectCheckUIProps>(
  (props: SelectCheckUIProps, ref) => {
    const {
      disabled,
      id,
      name,
      options,
      value,
      displayList,
      focused,
      fullwidth,
      label,
      message,
      onBlur,
      onChange,
      onChangeCheck,
      onClick,
      onFocus,
      placeholder,
      readonly,
      required,
      size,
      status,
    } = props;

    return (
      <StyledContainer $fullwidth={fullwidth} disabled={disabled} ref={ref}>
        {(label || required) && (
          <Stack
            alignItems="center"
            margin="0 0 4px 0"
            padding="0 0 0 16px"
            gap="4px"
          >
            {label && (
              <Label
                htmlFor={id}
                disabled={disabled}
                focused={!readonly && focused}
                invalid={status === "invalid" && !readonly}
                size={getTypo(size!)}
                margin="0 0 0 2px"
              >
                {label}
              </Label>
            )}

            {required && !disabled && (
              <Text type="body" size="small" appearance="dark">
                (Requerido)
              </Text>
            )}
          </Stack>
        )}

        <StyledInputContainer
          disabled={disabled}
          $focused={focused!}
          $status={status}
          onClick={onClick}
          $readonly={readonly}
        >
          <StyledInput
            autoComplete="off"
            readOnly
            value={value}
            name={name}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            $required={required}
            $size={size}
            $status={status}
            $fullwidth={fullwidth}
            $focused={focused!}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            onClick={onClick}
          />

          {!readonly && (
            <Icon
              appearance="dark"
              icon={<MdOutlineArrowDropDown />}
              size="24px"
              spacing="narrow"
              disabled={disabled}
            />
          )}
        </StyledInputContainer>

        {status && !readonly && (
          <Message disabled={disabled} status={status} message={message} />
        )}

        {displayList && !disabled && (
          <OptionList onClick={onChangeCheck}>
            {options?.map((optionItem) => (
              <OptionItemChecked
                key={optionItem.id}
                id={optionItem.id}
                label={optionItem.label}
                checked={optionItem.checked}
                onChange={onChangeCheck}
              />
            ))}
          </OptionList>
        )}
      </StyledContainer>
    );
  },
);
