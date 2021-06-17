import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
`;

export const HeaderInfo = styled.section`
  width: 100%;
  height: 3.75rem;
  background-color: var(--dark-blue-30);
`;

export const Content = styled.div`
  width: min(75rem, 90vw);
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 5.8rem;
  background-color: var(--blue);
`;

export const Brand = styled.h1`
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--white);

  span {
    font-weight: 500;
  }
`;

export const Search = styled.div`
  width: 32rem;
  height: 55%;

  display: flex;
  align-items: center;
`;

export const Filter = styled.select`
  width: 26%;
  height: 100%;
  padding-left: 0.8rem;
  border-right: 0.8rem solid var(--dark-blue);
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: var(--dark-blue);
  color: var(--white);
  font-size: 1rem;
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
  background-position: 21.5rem 1rem;
  background-repeat: no-repeat;

  &::placeholder {
    color: var(--gray-50);
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.a`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--white);

  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  svg {
    font-size: 1.2rem;
  }
`;

export const MenuSignIn = styled(MenuItem)`
  border-right: 1px solid var(--gray);
`;

export const MenuCart = styled(MenuItem)`
  span {
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
`;
