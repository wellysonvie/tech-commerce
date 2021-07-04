import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 2rem 1.5rem;
  background-color: var(--gray-30);
`;

export const Content = styled.div`
  width: min(75rem, 90vw);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Links = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  a {
    margin-right: 2rem;
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--gray);

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 640px) {
    a {
      margin: 0.5rem;
      text-align: center;
    }
  }
`;

export const Credits = styled.div`
  width: 22rem;
  text-align: right;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.7;
  color: var(--gray);

  a {
    font-weight: 500;
    color: var(--gray-50);
  }

  span {
    font-size: 0.75rem;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;
