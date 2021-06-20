import { useState } from "react";
import Media from "react-media";
import CardsCarousel from "../CardsCarousel";
import ProductCard from "../ProductCard";
import { Container, Header } from "./styles";

const FeaturedProducts = ({ products }) => {
  const [numberOfCards, setNumberOfCards] = useState(4);

  function updateNumberOfCards(matches) {
    setNumberOfCards(() => {
      if (matches.small) return 1;
      if (matches.medium) return 2;
      if (matches.large) return 3;
      else return 4;
    });
  }

  return (
    <Container>
      <Header>
        <h1>Produtos em destaque</h1>
        <a href="#">Ver mais produtos</a>
      </Header>

      <Media
        queries={{
          small: "(max-width: 640px)",
          medium: "(max-width: 768px)",
          large: "(max-width: 1024px)",
        }}
        onChange={updateNumberOfCards}
      />

      <CardsCarousel
        CardTemplate={ProductCard}
        numberOfCardsOnSlide={numberOfCards}
        items={products}
      />
    </Container>
  );
};

export default FeaturedProducts;
