import styled from "styled-components";

export const MainButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 52px;
  background-color: var(--mainColor);
  color: var(--mainWhite);
  border-radius: 100px;
  margin-top: 40px;
  transition: all 0.15s linear;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
