import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Slide = styled.div`
  width: 100%;

  position: relative;

  display: grid;
  grid-template-columns: repeat(${(props) => props.numberOfCards}, 1fr);
  gap: 2rem;
`;

export const ControlButton = styled.button`
  position: absolute;
  top: calc(50% - 1.25rem);
  z-index: 2;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--white);
  font-size: 1.5rem;
  color: var(--dark-blue-50);

  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.disabled &&
    css`
      color: var(--gray-50);
      cursor: not-allowed;
    `}
`;

export const PreviousButton = styled(ControlButton)`
  left: -1.25rem;
`;

export const NextButton = styled(ControlButton)`
  right: -1.25rem;
`;

export const CarouselPosition = styled.div`
  width: 100%;
  padding: 2.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: inline-block;
    width: 6px;
    height: 6px;
    margin: 0 0.4rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);

    &:nth-child(${(props) => props.currentSlide}) {
      background-color: var(--dark-blue-50);
    }
  }
`;
