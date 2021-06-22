import { useState } from "react";
import Media from "react-media";
import CardsCarousel from "../CardsCarousel";
import CategoryCard from "../CategoryCard";
import { Container } from "./styles";

const Categories = ({ categories }) => {
  const [numberOfCards, setNumberOfCards] = useState(3);

  function updateNumberOfCards(matches) {
    setNumberOfCards(() => {
      if (matches.medium) return 1;
      if (matches.large) return 2;
      else return 3;
    });
  }

  return (
    <Container>
      <Media
        queries={{
          medium: "(max-width: 768px)",
          large: "(max-width: 1024px)",
        }}
        onChange={updateNumberOfCards}
      />

      <CardsCarousel
        items={categories}
        CardTemplate={CategoryCard}
        numberOfCardsOnSlide={numberOfCards}
      />
    </Container>
  );
};

export default Categories;
