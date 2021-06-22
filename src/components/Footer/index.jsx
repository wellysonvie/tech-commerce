import { Container, Content, Links, Credits } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Links>
          <a href="#">Termos de uso</a>
          <a href="#">Políticas de privacidade</a>
          <a href="#">Cookies</a>
          <a href="#">Formas de pagamento</a>
        </Links>
        <Credits>
          <p>
            2021 Tech Commerce | Desenvolvido por{" "}
            <a href="https://github.com/wellysonvie" target="_blank">
              @wellysonvie
            </a>
            <br />
            <span>
              OBS.: Os dados e produtos apresentados neste site são fictícios.
            </span>
          </p>
        </Credits>
      </Content>
    </Container>
  );
};

export default Footer;
