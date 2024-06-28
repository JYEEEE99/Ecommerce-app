import styled from "styled-components";

interface ProductCardProps {
  imageNumber: number;
}

export const ProductCard = styled.div`
  flex: 0 0 23%;
  height: 410px;
  overflow: hidden;
`;

export const ProductCardImg = styled.div<ProductCardProps>`
  background: ${(props) =>
    `url('/images/section1-img${props.imageNumber}.png')`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  border-radius: 10px;
`;
