import { useEffect, useState } from "react";
import { MdStar } from "react-icons/md";
import Switch from "react-switch";
import { MdShoppingCart } from "react-icons/md";
import { useBag } from "../../contexts/BagContext";
import {
  Container,
  ProductDiscount,
  ProductImage,
  ProductDescription,
  ProductBrand,
  ProductName,
  ProductPrice,
  ProductRating,
  CardFooter,
  ProductStock,
} from "./styles";

const ProductCard = ({ data }) => {
  const [itsInCart, setItsInCart] = useState(false);
  const { bagProducts, addProduct, removeProduct, containsProduct } = useBag();

  useEffect(() => {
    setItsInCart(containsProduct(data.id));
  }, [data, bagProducts]);

  function handleCartSwitch(checked) {
    if (checked) {
      addProduct(data);
    } else {
      removeProduct(data.id);
    }
  }

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
        <CardFooter>
          <ProductStock>
            <span>{data.stock}</span> em estoque
          </ProductStock>
          <Switch
            onChange={handleCartSwitch}
            checked={itsInCart}
            onColor="#44d77d"
            offColor="#9da0bf"
            activeBoxShadow="0 0 2px 3px #44d77d"
            uncheckedIcon={<MdShoppingCart />}
          />
        </CardFooter>
      </ProductDescription>
    </Container>
  );
};

export default ProductCard;
