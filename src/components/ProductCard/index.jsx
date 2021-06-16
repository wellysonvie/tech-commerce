import { MdStar } from "react-icons/md";
import {
  Container,
  ProductDiscount,
  ProductImage,
  ProductDescription,
  ProductBrand,
  ProductName,
  ProductPrice,
  ProductRating,
  ProductStock,
} from "./styles";

const ProductCard = ({ data }) => {
  return (
    <Container>
      <ProductDiscount>{data.discount}</ProductDiscount>
      <ProductImage src={data.images[0]} alt={data.name} loading="lazy" />
      <ProductDescription>
        <ProductBrand>{data.brand}</ProductBrand>
        <ProductName>{data.name}</ProductName>
        <ProductRating>
          {new Array(5).fill("").map((item, index) => (
            <MdStar
              key={index}
              alight={index < Math.floor(data.rating.stars) ? "true" : "false"}
            />
          ))}
          <span>{data.rating.stars}</span>
          <span>({data.rating.quantity})</span>
        </ProductRating>
        <ProductPrice>{data.price}</ProductPrice>
        <ProductStock>
          <span>{data.stock}</span> em estoque
        </ProductStock>
      </ProductDescription>
    </Container>
  );
};

export default ProductCard;
