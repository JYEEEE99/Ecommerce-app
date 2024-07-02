import styled from "styled-components";
interface IconProps {
  iconNumber?: number;
  iconName?: string;
}

export const CategoriesIcon = styled.div<IconProps>`
  background: ${(props) =>
    `url('images/section2-icon${props.iconNumber}.png')`};
  background-size: contain;
  background-repeat: no-repeat;
  width: 110px;
  height: 110px;
  margin-bottom: 25px;
`;

export const FormIcon = styled.div<IconProps>`
  background: ${(props) => `url('images/signup-icon-${props.iconName}.png')`};
  background-size: contain;
  background-repeat: no-repeat;
  width: 38px;
  height: 38px;
  padding: 5px;
  margin-right: 20px;
  &:hover {
    opacity: 0.8;
  }
`;
