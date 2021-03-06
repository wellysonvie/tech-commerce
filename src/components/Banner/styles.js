import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 40rem;
  background-image: linear-gradient(
    120deg,
    var(--dark-blue-50) 40%,
    #5443bb 100%
  );

  @media screen and (max-width: 640px) {
    height: 30rem;
  }
`;

export const Content = styled.div`
  width: min(75rem, 90vw);
  height: 100%;
  margin: 0 auto;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const ProductDescription = styled.div`
  width: 45%;
  margin-right: 5rem;

  span {
    display: inline-block;
    margin-bottom: 0.8rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--green);
    text-transform: uppercase;
  }

  h1 {
    margin-bottom: 1.5rem;
    font-size: 3.5rem;
    font-weight: 900;
    color: var(--white);
  }

  p {
    margin-bottom: 3rem;
    text-align: left;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    color: var(--white);
  }

  @media screen and (max-width: 1024px) {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    margin-right: 0;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.5);

    h1 {
      margin-bottom: 0.7rem;
      font-size: 2rem;
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 0.875rem;
    }
  }
`;

export const ProductImage = styled.div`
  width: 50%;
  height: 85%;
  text-align: center;

  img {
    width: auto;
    height: 100%;
    object-fit: cover;

    animation: backInRight 0.8s ease-out;
    animation-fill-mode: both;

    @keyframes backInRight {
      from {
        padding-left: 50%;
        opacity: 0;
      }

      to {
        padding-left: 0%;
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const PurchaseButton = styled.a`
  display: inline-block;
  width: 11rem;
  height: 4rem;
  border-radius: 0.5rem;
  background-color: var(--green);
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark-green);

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s;

  &:hover {
    filter: brightness(90%);
  }

  @media screen and (max-width: 1024px) {
    width: 8rem;
    height: 3.2rem;
    font-size: 0.875rem;
  }
`;
