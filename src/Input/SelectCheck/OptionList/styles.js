import styled from "styled-components";
import { inube } from "@inubekit/inubekit";

const StyledOptionList = styled.ul`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  padding: 4px 0;
  position: absolute;
  z-index: 1;
  border-radius: 4px;
  background: ${({ theme }) => {
    return theme?.palette?.neutral?.N0 || inube.palette.neutral.N0;
  }};
  box-shadow:
    0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px rgba(0, 0, 0, 0.15);
`;

export { StyledOptionList };
