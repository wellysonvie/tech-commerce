import styled from "styled-components";

export const Container = styled.section`
  width: min(75rem, 80vw);
  margin: 1.5rem auto;
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--dark-blue-50);
  }

  a {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--dark-blue-50);

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 1.6rem;
      margin-bottom: 0.8rem;
    }

    a {
      font-size: 1rem;
    }
  }
`;
