import styled, { css } from "styled-components";

export const Container = styled.section`
  width: min(75rem, 80vw);
  margin: 4rem auto;

  display: flex;
  justify-content: center;

  position: relative;

  @media screen and (max-width: 940px) {
    flex-direction: column;
  }
`;

export const ProductImages = styled.div`
  flex-basis: 40%;

  @media screen and (max-width: 940px) {
    flex-basis: 100%;
  }
`;

export const CurrentImage = styled.div`
  width: 100%;
  height: 25rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: 940px) {
    height: 18rem;
  }
`;

export const ImageSelector = styled.div`
  width: 100%;
  margin-top: 2rem;
  overflow-x: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ItemImageSelector = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  border: 2px solid var(--gray-30);

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.current &&
    css`
      border-color: var(--dark-blue-50);
    `}

  img {
    width: 95%;
    height: 95%;
    object-fit: contain;
  }
`;

export const ProductInfos = styled.div`
  flex-basis: 60%;
  padding-left: 5rem;

  @media screen and (max-width: 940px) {
    flex-basis: 100%;
    margin-top: 3rem;
    padding: 0;
  }
`;

export const ProductDiscount = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--green);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--white);
`;

export const ProductBrand = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray);
  text-transform: uppercase;
`;

export const ProductName = styled.h1`
  margin-bottom: 0.2rem;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  color: var(--dark-blue-50);

  @media screen and (max-width: 640px) {
    font-size: 1.3rem;
  }
`;

export const ProductRating = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;

  svg {
    font-size: 1.2rem;
    color: #e3e3e9;

    &[alight="true"] {
      color: var(--orange);
    }
  }

  span {
    display: inline-block;
    line-height: 1;
    padding: 0;
    margin: 0;
    margin-left: 0.3rem;
    font-size: 0.875rem;
    color: var(--dark-blue-50);

    &:nth-last-child(2) {
      font-weight: 700;
    }

    &:nth-last-child(1) {
      font-weight: 300;
    }
  }
`;

export const ProductPrice = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--dark-blue-50);

  @media screen and (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

export const PurchaseContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
`;

export const PurchaseButton = styled.a`
  display: inline-block;
  width: 14.5rem;
  height: 3.5rem;
  border-radius: 0.5rem;
  background-color: var(--green);
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark-green);

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  transition: all 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export const QuantitySelector = styled.select`
  width: 4.8rem;
  height: 2.5rem;
  margin-left: 1rem;
  padding: 0 0.4rem;
  background-color: var(--white);
  border-radius: 1rem;
  border: 2px solid var(--gray-30);
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--dark-blue-50);
`;

export const ProductStock = styled.p`
  margin-left: 0.2rem;
  margin-bottom: 2rem;
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--pink);

  span {
    font-weight: 500;
  }
`;

export const ProductDescription = styled.div`
  width: 100%;

  > div {
    width: 100%;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 400;
    color: var(--gray);

    display: flex;
    align-items: center;

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background-color: var(--gray-50);
      margin-right: 1rem;
    }

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background-color: var(--gray-50);
      margin-left: 1rem;
    }
  }

  p {
    text-align: left;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    color: var(--gray);
  }
`;
