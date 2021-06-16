import { Container } from "./styles";

const CategoryCard = ({ data }) => {
  return (
    <Container image={data.image}>
      <h1>{data.name}</h1>
      <a href="#">Ver ofertas</a>
    </Container>
  );
};

export default CategoryCard;
