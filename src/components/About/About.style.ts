import { MainButton } from "@/style/Button.styles";
import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 1240px;
  margin: 0 auto;
  background: linear-gradient(150deg, #7b2435, #a03348);
  border-radius: 30px;
  padding: 50px 70px;
  color: var(--mainWhite);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
`;
export const TitleBox = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -1.5px;
  line-height: 1.4;
  width: 60%;
`;
export const InputBox = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
`;
export const InputEl = styled.input`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: var(--mainWhite);
  outline: none;
  height: 48px;
  border-radius: 100px;
  padding: 10px 30px;
`;
export const ButtonEl = styled(MainButton)`
  width: 100%;
  background-color: var(--mainWhite);
  color: var(--mainColor);
  font-size: 1.1rem;
  font-weight: 600;
  height: 48px;
  margin-top: 15px;
  &:hover {
    background-color: var(--mainColor);
    color: var(--mainWhite);
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
