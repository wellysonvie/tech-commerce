import { useEffect, useState } from "react";
import { MdStar, MdCheck, MdShoppingCart } from "react-icons/md";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { useBag } from "../../contexts/BagContext";

import {
  Container,
  ProductDiscount,
  ProductImages,
  CurrentImage,
  ImageSelector,
  ItemImageSelector,
  ProductInfos,
  ProductBrand,
  ProductName,
  ProductRating,
  ProductPrice,
  PurchaseContainer,
  PurchaseButton,
  QuantitySelector,
  ProductStock,
  ProductDescription,
} from "./styles";

const ProductDetails = ({ product }) => {
  const {
    bagProducts,
    addProduct,
    removeProduct,
    updateProductQuantity,
    getProduct,
  } = useBag();

  const [productCurrentImageIndex, setProductCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(() => {
    return getProduct(product.id)?.quantity || 1;
  });
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const productInBag = getProduct(product.id);

    if (productInBag) {
      setAddedToCart(true);
      setQuantity(productInBag.quantity);
    } else {
      setAddedToCart(false);
      setQuantity(1);
    }
  }, [product, bagProducts]);

  function handlePurchaseButton() {
    if (!addedToCart) {
      addProduct(product, quantity);
    } else {
      removeProduct(product.id);
    }
    setAddedToCart(!addedToCart);
  }

  function handleQuantitySelector({ target }) {
    setQuantity(target.value);
    if (addedToCart) {
      updateProductQuantity(product.id, target.value);
    }
  }

  return (
    <Container>
      {product?.discount && (
        <ProductDiscount>{product.discount}</ProductDiscount>
      )}
      <ProductImages>
        <Zoom wrapStyle={{ width: "100%" }}>
          <CurrentImage>
            <img
              src={product.images[productCurrentImageIndex]}
              alt={product.name}
            />
          </CurrentImage>
        </Zoom>
        <ImageSelector>
          {product.images.map((image, index) => (
            <ItemImageSelector
              key={image}
              current={productCurrentImageIndex === index}
              onClick={() => setProductCurrentImageIndex(index)}
            >
              <img src={image} alt={product.name} />
            </ItemImageSelector>
          ))}
        </ImageSelector>
      </ProductImages>
      <ProductInfos>
        <ProductBrand>{product.brand}</ProductBrand>
        <ProductName>{product.name}</ProductName>
        <ProductRating>
          {new Array(5).fill("").map((item, index) => (
            <MdStar
              key={index}
              alight={
                index < Math.floor(product.rating.stars) ? "true" : "false"
              }
            />
          ))}
          <span>{product.rating.stars}</span>
          <span>({product.rating.quantity})</span>
        </ProductRating>
        <ProductPrice>{product.price}</ProductPrice>
        <PurchaseContainer>
          <PurchaseButton onClick={handlePurchaseButton}>
            {addedToCart ? <MdCheck /> : <MdShoppingCart />}
            <span>
              {addedToCart ? "Produto no carrinho" : "Adicionar ao carrinho"}
            </span>
          </PurchaseButton>
          <QuantitySelector value={quantity} onChange={handleQuantitySelector}>
            <option value="1">Qtd: 1</option>
            <option value="2">Qtd: 2</option>
            <option value="3">Qtd: 3</option>
            <option value="4">Qtd: 4</option>
            <option value="5">Qtd: 5</option>
          </QuantitySelector>
        </PurchaseContainer>
        <ProductStock>
          <span>{product.stock}</span> em estoque
        </ProductStock>
        <ProductDescription>
          <div>Detalhes do produto:</div>
          <p>{product.description}</p>
        </ProductDescription>
      </ProductInfos>
    </Container>
  );
};

export default ProductDetails;
