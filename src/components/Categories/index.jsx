import CardsCarousel from "../CardsCarousel";
import CategoryCard from "../CategoryCard";
import { Container } from "./styles";

const Categories = ({ categories }) => {
  return (
    <Container>
      <CardsCarousel
        items={categories}
        CardTemplate={CategoryCard}
        numberOfCardsOnSlide={3}
      />
    </Container>
  );
};

export default Categories;
