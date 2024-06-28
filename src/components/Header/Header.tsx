"use client";
import React, { useEffect } from "react";
import "./Header.css";
import { Form, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0 });
  };
  useEffect(() => {});

  return (
    <header className="header__container">
      <div className="logo__box">
        <Image
          src="/images/header-logo.png"
          alt="header-logo"
          layout="intrinsic"
          width={114}
          height={33}
        />
      </div>
      <div className="nav__box">
        <Link href="/">Home</Link>
        <Link href="#">Sell</Link>
        <Link href="#">About us</Link>
      </div>
      <div className="search__box">
        <Form>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search for products..."
                className=" mr-sm-2"
              />
            </Col>
          </Row>
        </Form>
      </div>
      <div className="icon__box">
        <a href="/login">
          <Image
            src="/images/header-heart.png"
            alt="header-profile"
            layout="intrinsic"
            width={20}
            height={20}
          />
        </a>
        <a href="/login">
          <Image
            src="/images/header-profile.png"
            alt="header-profile"
            layout="intrinsic"
            width={20}
            height={20}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
