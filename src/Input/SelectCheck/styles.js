import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const sizeOptions = {
  compact: {
    height: "40px",
  },
  wide: {
    height: "48px",
  },
};

export const StyledContainer = styled.div`
  position: relative;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "300px")};
`;

export const StyledInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  background-color: ${({ theme, $readonly }) =>
    $readonly && (theme?.palette?.neutral?.N0 || inube.palette.neutral.N0)};
  border-color: ${({ theme, disabled, $readonly, $status, $focused }) => {
    if (disabled) {
      return (
        (theme?.palette?.neutral?.N20 || inube.palette.neutral.N20) +
        "; pointer-events: none; opacity: 0.5;"
      );
    }
    if ($focused && !$readonly) {
      return theme?.palette?.blue?.B300 || inube.palette.blue.B300;
    }
    if ($status === "invalid" && !$readonly) {
      return theme?.palette?.red?.R400 || inube.palette.red.R400;
    }
    return theme?.palette?.neutral?.N40 || inube.palette.neutral.N40;
  }};

  opacity: ${({ disabled }) => (disabled ? "0.5" : "none")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const StyledInput = styled.input`
  outline: none;
  border-radius: 8px;
  padding-right: 12px;
  padding-left: 16px;
  border-style: none;
  font-family: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.font};
  font-size: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.size};
  line-height: ${({ theme }) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.lineHeight};
  letter-spacing: ${({ theme }) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.tracking};
  color: ${({ theme, disabled }) => {
    if (disabled) {
      return theme?.palette?.neutral?.N20 || inube.palette.neutral.N20;
    }
    return theme?.palette?.neutral?.N900 || inube.palette.neutral.N900;
  }};
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  ${({ $size }) => sizeOptions[$size]};

  ::placeholder {
    color: ${({ theme }) =>
      theme?.palette?.neutral?.N20 || inube.palette.neutral.N20};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-moz-search-cancel-button {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;
