import styled from "styled-components";
interface CategoriesIconProps {
  iconNumber: number;
}

export const CategoriesIcon = styled.div<CategoriesIconProps>`
  background: ${(props) =>
    `url('images/section2-icon${props.iconNumber}.png')`};
  background-size: contain;
  background-repeat: no-repeat;
  width: 110px;
  height: 110px;
  margin-bottom: 25px;
`;
