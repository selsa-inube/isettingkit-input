import styled from "styled-components";
import { inube } from "@inubekit/inubekit";

const StyledDecisionAlignmentContainer = styled.div`
  & > div > div {
    justify-content: center;
  }
`;

const StyledDecisionAlignmentMultipleChoicesContainer = styled.div`
  & > div > div > div {
    justify-content: center;
  }
`;

export {
  StyledDecisionAlignmentContainer,
  StyledDecisionAlignmentMultipleChoicesContainer,
};
