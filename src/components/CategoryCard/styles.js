import styled from "styled-components";

export const Container = styled.article`
  height: 10rem;
  padding: 1.8rem;
  border-radius: 0.6rem;
  background-color: var(--gray-30);

  background-image: url("${(props) => props.image}");
  background-size: 45%;
  background-position: 120% 1.5rem;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--dark-blue-50);
  }

  a {
    display: inline-block;
    width: 8rem;
    height: 3rem;
    border-radius: 0.5rem;
    background-color: var(--white);
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--dark-blue-50);

    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;

    &:hover {
      background-color: var(--dark-blue-50);
      color: var(--white);
    }
  }
`;
