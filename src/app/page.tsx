"use client";
import React from "react";
import "./main.css";
import Image from "next/image";
import { MainButton } from "@/style/Button.styles";
import { ProductCard, ProductCardImg } from "@/style/ProductCard.styles";
import { LayoutBox } from "@/style/LayoutBox.styles";
import { CategoriesIcon } from "@/style/CategoriesIcon.style";
import Link from "next/link";

const HomePage: React.FC = () => {
  // 길이가 8인 배열을 생성하고, 각 요소에 1부터 8까지의 숫자를 할당
  const cards = Array.from(
    // 첫 번째 인자: 유사 배열 객체, 여기서는 길이가 8인 빈 객체를 사용
    { length: 8 },
    // 두 번째 인자: 맵핑 함수, 각 요소의 인덱스에 1을 더하여 숫자를 생성
    (_, i) => i + 1
  );
  const categoiesIcons = Array.from({ length: 6 }, (_, i) => i + 1);
  const categoiesText = [
    "HeadPhones",
    "Gaming",
    "Computers",
    "Phones",
    "Camera",
    "SmartWatch",
  ];

  console.log();

  return (
    <main>
      <div className="bg-color">
        <LayoutBox className="visual__section">
          <div className="text__container">
            <div className="title__box">
              <h2>
                YOUR GATEWAY TO <br />
                ESCITING <br />
                AUSCTIONS
              </h2>
            </div>
            <div className="info__box">
              <p>
                Discover treasures at BidBuyy - where bidding meets buying. Join
                online <br /> auctions and find unique items to buy and sell
                with excitement!
              </p>
            </div>
            <div className="times__box">
              <ul>
                <li>
                  <p className="number">23</p>
                  <p>Hours</p>
                </li>
                <li>
                  <p className="number">05</p>
                  <p>Days</p>
                </li>
                <li>
                  <p className="number">59</p>
                  <p>Minutes</p>
                </li>
                <li>
                  <p className="number">35</p>
                  <p>Seconds</p>
                </li>
              </ul>
            </div>
            <MainButton>Bid Now</MainButton>
          </div>
          <div className="img__container">
            <Image
              src="/images/visual-img.png"
              alt="visual-img"
              width={588}
              height={588}
            />
          </div>
        </LayoutBox>
      </div>
      <div className="ongoing__uctions">
        <div className="title__box">
          <h2>ONGOING AUCTIONS</h2>
        </div>

        <LayoutBox
          className="product__container"
          margin="50px auto"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {cards.map((num) => (
            <ProductCard>
              <ProductCardImg key={num} imageNumber={num} />
              <div className="text__box">
                <div className="top__box">
                  <h3 className="sub__title">Product name</h3>
                </div>
                <div className="middle__box">
                  <p className="main__color">
                    <span className="text__bold">RS.120</span> 3bids
                  </p>
                  <p>(Seller name) 45</p>
                </div>
                <div className="bottom__box">
                  <p>Time left 4d 20h (Sat, 02:39 PM)</p>
                </div>
              </div>
            </ProductCard>
          ))}
          <div className="center__container">
            <MainButton className="card__view__btn">View All</MainButton>
          </div>
        </LayoutBox>
      </div>
      <div className="categories">
        <LayoutBox style={{ width: "1024px" }}>
          <div className="title__box">
            <h2>BROWES BY CATEGORIES</h2>
          </div>
          <div className="linked__box">
            {categoiesIcons.map((num) => (
              <Link href="#">
                <CategoriesIcon iconNumber={num} />
                <p>{categoiesText[num - 1]}</p>
              </Link>
            ))}
          </div>
        </LayoutBox>
      </div>
    </main>
  );
};

export default HomePage;
