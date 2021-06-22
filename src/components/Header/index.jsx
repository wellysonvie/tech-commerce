import { useState } from "react";
import {
  MdLocalShipping,
  MdPhone,
  MdPerson,
  MdShoppingCart,
} from "react-icons/md";

import CartModal from "../CartModal";
import { useBag } from "../../contexts/BagContext";

import {
  Container,
  HeaderInfo,
  Content,
  HeaderInfoContent,
  NavBarContent,
  Info,
  NavBar,
  Brand,
  Search,
  Filter,
  Input,
  Menu,
  MenuSignIn,
  MenuCart,
} from "./styles";

import data from "../../../data.json";

const Header = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const { totalItems } = useBag();

  return (
    <Container>
      <HeaderInfo>
        <HeaderInfoContent>
          <Info>
            <MdLocalShipping />
            &nbsp; Frete grátis em pedidos a partir de $100
          </Info>
          <Info>
            <MdPhone />
            &nbsp; SAC 00 9999-9999
          </Info>
        </HeaderInfoContent>
      </HeaderInfo>
      <NavBar>
        <NavBarContent>
          <Brand href="">
            <span>Tech</span> Commerce
          </Brand>
          <Search>
            <Filter>
              <option value="">Tudo</option>
              {data.categories.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Filter>
            <Input type="text" placeholder="Pesquise aqui" />
          </Search>
          <Menu>
            <MenuSignIn href="#">
              <a>
                <MdPerson />
                &nbsp; <span>Entrar</span>
              </a>
            </MenuSignIn>
            <MenuCart href="#">
              <a onClick={() => setShowCartModal(true)}>
                <MdShoppingCart />
                &nbsp; <span>{totalItems}</span>
              </a>
              {showCartModal && (
                <CartModal closeCartModal={() => setShowCartModal(false)} />
              )}
            </MenuCart>
          </Menu>
        </NavBarContent>
      </NavBar>
    </Container>
  );
};

export default Header;
