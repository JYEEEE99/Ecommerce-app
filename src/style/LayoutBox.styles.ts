import styled from "styled-components";

interface DivProps {
  margin?: string;
  justifyContent?: string;
}
export const LayoutBox = styled.div<DivProps>`
  width: 1240px;
  margin: ${(props) => props.margin || "0 auto"};
`;
