import CardsCarousel from "../CardsCarousel";
import ProductCard from "../ProductCard";
import { Container, Header } from "./styles";

const FeaturedProducts = ({ products }) => {
  return (
    <Container>
      <Header>
        <h1>Produtos em destaque</h1>
        <a href="#">Ver mais produtos</a>
      </Header>
      <CardsCarousel
        CardTemplate={ProductCard}
        numberOfCardsOnSlide={4}
        items={products}
      />
    </Container>
  );
};

export default FeaturedProducts;
