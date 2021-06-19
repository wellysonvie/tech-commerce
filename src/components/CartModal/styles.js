import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 3.2rem;
  right: 0;
  z-index: 99;
  width: 25rem;
  height: 32rem;
  border-radius: 0.6rem;
  background-color: var(--white);

  box-shadow: 5px 5px 20px rgb(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  #triangle {
    position: absolute;
    top: -0.8rem;
    right: 1.7rem;
    width: 0;
    height: 0;
    border-left: 0.8rem solid transparent;
    border-right: 0.8rem solid transparent;
    border-bottom: 0.8rem solid var(--white);
  }
`;

export const ModalHeader = styled.div`
  flex-basis: 4rem;
  margin: 0 1.5rem;
  border-bottom: 2px solid var(--gray-30);

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--dark-blue-50);
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: var(--dark-blue-50);
  }
`;

export const EmptyCartMessage = styled.div`
  flex: 1;
  width: 100%;
  padding: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.2;
    color: var(--gray);
  }
`;

export const CartItemsList = styled.ul`
  flex: 1;
  width: 100%;
  padding: 0 1.5rem;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.6rem;
  background-color: var(--gray-30);

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1rem;
    font-weight: 700;
    color: var(--dark-blue-50);
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const CheckoutButton = styled.button`
  width: 9rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: 1px solid var(--dark-blue-50);
  background-color: var(--white);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--dark-blue-50);

  cursor: not-allowed;

  transition: all 0.2s;

  ${(props) =>
    !props.disabled &&
    css`
      cursor: pointer;

      &:hover {
        background-color: var(--dark-blue-50);
        color: var(--white);
      }
    `}
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;
