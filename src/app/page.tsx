"use client";
import React from "react";
import "./main.css";
import Image from "next/image";
import { MainButton } from "@/style/Button.styles";

const HomePage: React.FC = () => {
  return (
    <main>
      <div className="bg-color">
        <section className="visual__section">
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
        </section>
      </div>
      <section className="ongoing__uctions">
        <div className="title__box">
          <h2>ONGOING AUCTIONS</h2>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
