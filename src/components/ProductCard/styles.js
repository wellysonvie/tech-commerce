import styled from "styled-components";

export const Container = styled.article`
  height: 24.5rem;
  padding: 1.3rem;
  border-radius: 0.6rem;
  background-color: var(--white);

  cursor: pointer;

  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const ProductDiscount = styled.span`
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--green);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--white);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 45%;
  object-fit: contain;
`;

export const ProductDescription = styled.div`
  margin-top: 1.5rem;
`;

export const ProductBrand = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--gray);
  text-transform: uppercase;
`;

export const ProductName = styled.h1`
  margin-bottom: 0.2rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: var(--dark-blue-50);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  margin-bottom: 0.7rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark-blue-50);
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 100%;
    padding-left: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    color: var(--white);
  }
`;

export const ProductStock = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--pink);

  span {
    font-weight: 500;
  }
`;
