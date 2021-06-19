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
        <Content>
          <Info>
            <MdLocalShipping />
            &nbsp; Frete grátis em pedidos a partir de $100
          </Info>
          <Info>
            <MdPhone />
            &nbsp; SAC 00 9999-9999
          </Info>
        </Content>
      </HeaderInfo>
      <NavBar>
        <Content>
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
                &nbsp; Entrar
              </a>
            </MenuSignIn>
            <MenuCart href="#">
              <a onClick={() => setShowCartModal(!showCartModal)}>
                <MdShoppingCart />
                &nbsp; <span>{totalItems}</span>
              </a>
              {showCartModal && <CartModal />}
            </MenuCart>
          </Menu>
        </Content>
      </NavBar>
    </Container>
  );
};

export default Header;
