import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: var(--mainColor);
  background-color: var(--mainWhite);
  border-radius: 30px;
  margin-bottom: 170px;
  display: flex;
`;

export const FormInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabelEl = styled.label`
  color: var(--darkGray);
  font-size: 1rem;
  opacity: 0.7;
  margin-bottom: 10px;
`;
export const FormInputEl = styled.input`
  background-color: transparent;
  border: 1px solid #dfdfdf;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  outline: none;
`;
export const FormTitle = styled.h2`
  color: var(--mainColor);
  font-weight: 600;
  margin-bottom: 30px;
  font-size: 2.3rem;
`;
