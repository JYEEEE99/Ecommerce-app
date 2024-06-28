"use client";
import React from "react";
import About from "../About/About";
import { LayoutBox } from "@/style/LayoutBox.styles";
import {
  CopyEl,
  FooterBgColor,
  FooterIconBox,
  FooterLogoBox,
  FooterProps,
  FooterSnsIcon,
  FooterTextBox,
  FooterTopContainer,
  FooterTopLeft,
  FooterTopRight,
  ListEl,
  UlEl,
  UlTitleEl,
} from "./Footer.style";
import Link from "next/link";

const Footer: React.FC<FooterProps> = () => {
  const footerIconName = ["tweeter", "facebook", "instar", "github"];

  const companyList = ["About", "Terms & Conditions", "Works", " Career"];
  const helpList = [
    "Customer Support",
    "Delivery Details",
    "Terms & Conditions",
    "Privacy Policy",
  ];
  const faqList = ["Account", "Manage Deliveries", "Orders", " Payments"];
  const resourcesList = [
    "Free eBooks",
    "Development Tutorial",
    "How to - Blog",
    " Youtube Playlist",
  ];

  return (
    <FooterBgColor>
      <About />
      <LayoutBox>
        <FooterTopContainer>
          <FooterTopLeft>
            <Link href="#">
              <FooterLogoBox />
            </Link>
            <FooterTextBox>
              <p>
                Join online auctions and find <br />
                unique items to buy and sell with <br />
                excitement!
              </p>
            </FooterTextBox>
            <FooterIconBox>
              {footerIconName.map((icon, i) => (
                <FooterSnsIcon key={i} iconName={icon} />
              ))}
            </FooterIconBox>
          </FooterTopLeft>
          <FooterTopRight>
            <UlEl>
              <UlTitleEl>COMPANY</UlTitleEl>
              {companyList.map((text, i) => (
                <li key={i}>
                  <ListEl href="#">{text}</ListEl>
                </li>
              ))}
            </UlEl>
            <UlEl>
              <UlTitleEl>HELP</UlTitleEl>

              {helpList.map((text, i) => (
                <li key={i}>
                  <ListEl href="#">{text}</ListEl>
                </li>
              ))}
            </UlEl>
            <UlEl>
              <UlTitleEl>FAQ</UlTitleEl>
              {faqList.map((text, i) => (
                <li key={i}>
                  <ListEl href="#">{text}</ListEl>
                </li>
              ))}
            </UlEl>
            <UlEl>
              <UlTitleEl>RESOURCES</UlTitleEl>
              {resourcesList.map((text, i) => (
                <li key={i}>
                  <ListEl href="#">{text}</ListEl>
                </li>
              ))}
            </UlEl>
          </FooterTopRight>
        </FooterTopContainer>
        <CopyEl>Bidbuyy © 2000-2023, All Rights Reserved</CopyEl>
      </LayoutBox>
    </FooterBgColor>
  );
};

export default Footer;
