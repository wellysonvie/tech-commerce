import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
`;

export const HeaderInfo = styled.section`
  width: 100%;
  height: 3.75rem;
  background-color: var(--dark-blue-30);

  @media screen and (max-width: 492px) {
    height: auto;
    padding: 0.3rem 0;
  }
`;

export const Content = styled.div`
  width: min(75rem, 90vw);
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderInfoContent = styled(Content)`
  flex-wrap: wrap;
`;

export const NavBarContent = styled(Content)`
  @media screen and (max-width: 840px) {
    flex-wrap: wrap;
  }
`;

export const Info = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--white);

  display: flex;
  align-items: center;

  svg {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 492px) {
    flex-basis: 100%;
    padding: 0.2rem 0;
    font-size: 0.75rem;
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 5.8rem;
  background-color: var(--blue);

  @media screen and (max-width: 840px) {
    height: 8rem;
    padding: 0.5rem 0;
  }
`;

export const Brand = styled.a`
  display: inline-block;
  width: 10.2rem;
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--white);

  cursor: pointer;

  span {
    font-weight: 500;
  }
`;

export const Search = styled.div`
  flex-basis: 32.5rem;
  height: 3.125rem;
  margin: 0 1rem;

  display: flex;
  align-items: center;

  @media screen and (max-width: 840px) {
    order: 3;
    flex: 100%;
    margin: 0 auto;
  }
`;

export const Filter = styled.select`
  width: 8.8rem;
  height: 100%;
  padding-left: 0.8rem;
  border-right: 0.8rem solid var(--dark-blue);
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: var(--dark-blue);
  color: var(--white);
  font-size: 1rem;

  @media screen and (max-width: 430px) {
    display: none;
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 100%;
  padding-left: 1.5rem;
  padding-right: 3rem;
  border-radius: 0 0.5rem 0.5rem 0;
  background-color: var(--white);
  font-size: 1rem;
  color: var(--gray);

  background-image: url("/assets/svgs/search.svg");
  background-size: 1.2rem;
  background-position: 95% 1rem;
  background-repeat: no-repeat;

  &::placeholder {
    color: var(--gray-50);
  }

  @media screen and (max-width: 430px) {
    border-radius: 0.5rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.div`
  > a {
    padding: 0.5rem 0;
    font-size: 1rem;
    font-weight: 500;
    color: var(--white);
    white-space: nowrap;

    cursor: pointer;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    svg {
      font-size: 1.2rem;
    }

    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const MenuSignIn = styled(MenuItem)`
  border-right: 1px solid var(--gray);
  padding-right: 1rem;

  @media screen and (max-width: 360px) {
    > a > span {
      display: none;
    }
  }
`;

export const MenuCart = styled(MenuItem)`
  padding-left: 1rem;

  position: relative;

  > a > span {
    height: 1.5rem;
    padding: 0 0.5rem;
    border-radius: 50%;
    background-color: var(--dark-blue);
    font-size: 0.875rem;
    line-height: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 360px) {
    > a > span {
      margin-left: -0.5rem;
    }
  }
`;
