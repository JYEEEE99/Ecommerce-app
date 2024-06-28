import styled from "styled-components";

export interface FooterProps {
  iconName: string;
}

export const FooterBgColor = styled.div`
  background-color: #f0f0f0;
  position: relative;
  margin-top: 100px;
  padding-top: 170px;
`;
export const FooterTopContainer = styled.div`
  background-color: #f0f0f0;
  display: flex;
  border-bottom: 1px solid #cfcfcf;
  padding-bottom: 30px;
`;
export const FooterTopLeft = styled.div`
  width: 25%;
`;

export const FooterTopRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
`;
export const FooterLogoBox = styled.div`
  background: url("images/footer-logo.png") center center;
  background-repeat: no-repeat;
  width: 121px;
  height: 39px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
export const FooterTextBox = styled.div`
  color: var(--mainColor);
  opacity: 0.6;
  font-size: 1.2rem;
  letter-spacing: -1px;
  margin: 30px 0;
`;
export const FooterIconBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FooterSnsIcon = styled.a<FooterProps>`
  display: block;
  background-color: var(--mainWhite);
  background: ${(props) => `url('images/footer-icon-${props.iconName}.png')`};
  background-repeat: no-repeat;
  background-size: cover;
  width: 32px;
  height: 32px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const UlEl = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const UlTitleEl = styled.h3`
  font-size: 1.3rem;
  color: var(--mainColor);
  font-weight: 600;
  margin-bottom: 20px;
`;
export const ListEl = styled.a`
  color: var(--mainColor);
  padding: 10px 0;
  display: block;
  font-size: 1.1rem;
  opacity: 0.5;
  &:hover {
    opacity: 0.9;
  }
`;
export const CopyEl = styled.p`
  color: var(--mainColor);
  font-size: 1.1rem;
  opacity: 0.6;
  padding: 30px 0;
`;
