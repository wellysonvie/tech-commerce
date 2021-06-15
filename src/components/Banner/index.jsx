import {
  Container,
  Content,
  ProductDescription,
  ProductImage,
  PurchaseButton,
} from "./styles";

const Banner = ({ product }) => {
  return (
    <Container>
      <Content>
        <ProductDescription>
          <span>{product.discount}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <PurchaseButton>Mais detalhes</PurchaseButton>
        </ProductDescription>
        <ProductImage>
          <img src={product.image} alt={product.name} />
        </ProductImage>
      </Content>
    </Container>
  );
};

export default Banner;
