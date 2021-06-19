import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  height: 6.5rem;
  margin: 1.5rem 0;

  position: relative;

  display: flex;
`;

export const ProductImage = styled.img`
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
  object-fit: contain;
  border-radius: 0.6rem;
`;

export const ProductDescription = styled.div`
  flex: 1;
  height: 100%;

  a {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.5;
    color: var(--dark-blue-50);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--dark-blue-50);
    }

    select {
      width: 4.8rem;
      height: 2rem;
      padding: 0 0.4rem;
      background-color: var(--white);
      border-radius: 1rem;
      border: 2px solid var(--gray-30);
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--dark-blue-50);
    }
  }
`;

export const RemoveProductButton = styled.a`
  position: absolute;
  bottom: 0;
  left: 0.8rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--pink);
  cursor: pointer;
`;
