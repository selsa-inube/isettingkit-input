import styled from "styled-components";

const StyledLabelAlignment = styled.div`
  & > div > div {
    justify-content: ${({ $type }) => $type};
  }
`;

const StyledLabelRangeAlignment = styled.div`
  & > div > p {
    text-align: ${({ $type }) => $type};
  }
`;

export { StyledLabelAlignment, StyledLabelRangeAlignment };
