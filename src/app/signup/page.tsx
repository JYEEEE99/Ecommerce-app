"use client";
import "../../style/reset.css";
import { LayoutBox } from "@/style/LayoutBox.styles";
import { NavBox } from "@/style/NavBox.style";
import Link from "next/link";
import React, { useState } from "react";
import "./Signup.css";
import { FormContainer, FormTitle } from "@/style/Form.style";
import FormInput from "@/components/FormInput/FormInput";
import { AccountButton, MainButton } from "@/style/Button.styles";
import { FormIcon } from "@/style/Icon.style";

interface userInfoProps {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC<userInfoProps> = ({
  email,
  password,
  confirmPassword,
}) => {
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState(password);
  const [userConfirmPassword, setUserConfirmPassword] =
    useState(confirmPassword);

  const emailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };
  const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  const confirmPasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserConfirmPassword(e.target.value);
  };

  // 폼 제출 핸들러
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg__color">
      <LayoutBox>
        <NavBox>
          <p>
            <Link href="/">Home</Link>
          </p>
          <p className="nav__on">
            <span> {"> "} </span>
            <Link href="/signup">Signup</Link>
          </p>
        </NavBox>
        <FormContainer>
          <div className="user__info__box">
            <FormTitle>Signup</FormTitle>
            <form className="form__box" onSubmit={onSubmit}>
              <FormInput
                id="email"
                label="Email"
                placeholder="이메일을 입력해 주세요."
                type="text"
                value={userEmail}
                onChange={emailOnChange}
              />
              <FormInput
                id="password"
                label="Password"
                placeholder="비밀번호를 입력해 주세요."
                type="password"
                value={userPassword}
                onChange={passwordOnChange}
              />
              <FormInput
                id="confirm__password"
                label="Confirm__Password"
                placeholder="비밀번호를 다시 입력해 주세요"
                type="password"
                value={userConfirmPassword}
                onChange={confirmPasswordOnChange}
              />
              <div className="check__box">
                <input type="checkbox" />
                <p>I accept terms and conditions</p>
              </div>
              <MainButton style={{ width: "100%" }}>Register</MainButton>
            </form>
            <div className="sns__container">
              <h3 className="sns__title">Or sign up with</h3>
              <div className="sns__box">
                <Link href="/" passHref>
                  <FormIcon iconName="google" />
                </Link>
                <Link href="javascript: void">
                  <FormIcon iconName="facebook" />
                </Link>
                <Link href="javascript: void">
                  <FormIcon iconName="instar" />
                </Link>
              </div>
            </div>
          </div>
          <div className="account__box">
            <FormTitle style={{ color: "var(--mainWhite)" }}>
              Create Account
            </FormTitle>
            <p className="text">
              Create an account to dive into the world of auctions and unveil
              hidden treasures. As a member of Bidbuyy, you'll gain exclusive
              access to bid on unique, one-of-a-kind items, from vintage gems to
              intriguing antiques. Don't miss out on the excitement – sign up
              now and embark on a journey where every bid is a step closer to
              uncovering extraordinary finds! Join the auction adventure today!
            </p>
            <AccountButton>
              Already have an account?
              <span className="login__here"> Login here</span>
            </AccountButton>
          </div>
        </FormContainer>
      </LayoutBox>
    </div>
  );
};

export default Signup;
