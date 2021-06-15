import {
  MdLocalShipping,
  MdPhone,
  MdPerson,
  MdShoppingCart,
} from "react-icons/md";

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

const Header = () => {
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
          <Brand>
            <span>Tech</span> Commerce
          </Brand>
          <Search>
            <Filter>
              <option value="">Tudo</option>
              <option value="">Acessórios</option>
              <option value="">Smartphones</option>
              <option value="">Notebooks</option>
              <option value="">Gamer</option>
            </Filter>
            <Input type="text" placeholder="Pesquise aqui" />
          </Search>
          <Menu>
            <MenuSignIn href="#">
              <MdPerson />
              &nbsp; Entrar
            </MenuSignIn>
            <MenuCart href="#">
              <MdShoppingCart />
              &nbsp; <span>0</span>
            </MenuCart>
          </Menu>
        </Content>
      </NavBar>
    </Container>
  );
};

export default Header;
