import styled from "styled-components";

export const MainButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 210px;
  height: 52px;
  background-color: var(--mainColor);
  color: var(--mainWhite);
  border-radius: 100px;
  margin-top: 40px;
  transition: all 0.15s linear;
  font-weight: bold;
  letter-spacing: 0cap.5;
  cursor: pointer;
  &:hover {
    background-color: var(--mainWhite);
    color: var(--mainColor);
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const AccountButton = styled(MainButton)`
  background-color: rgba(255, 255, 255, 0.2);
  width: 320px;
  font-size: 0.8rem;
  padding: 15px;
  height: auto;
`;
