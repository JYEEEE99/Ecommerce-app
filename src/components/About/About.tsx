import React from "react";
import {
  AboutContainer,
  ButtonEl,
  InputBox,
  InputEl,
  TitleBox,
} from "./About.style";

const About: React.FC = () => {
  return (
    <AboutContainer>
      <TitleBox>
        <h1>
          STAY UPTO DATE ABOUT OUR <br />
          LATEST AUCTIONS
        </h1>
      </TitleBox>
      <InputBox>
        <InputEl placeholder="Enter your email address" />
        <ButtonEl>Subscribe to Newsletter</ButtonEl>
      </InputBox>
    </AboutContainer>
  );
};

export default About;
