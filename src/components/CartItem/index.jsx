import Link from "next/link";

import { useBag } from "../../contexts/BagContext";

import {
  Container,
  ProductImage,
  ProductDescription,
  RemoveProductButton,
} from "./styles";

const CartItem = ({ product }) => {
  const { removeProduct, updateProductQuantity } = useBag();

  return (
    <Container>
      <ProductImage src={product.images[0]} alt={product.name} />
      <ProductDescription>
        <Link href={`/products/${product.id}`}>{product.name}</Link>
        <div>
          <p>{product.price}</p>
          <select
            value={product.quantity}
            onChange={({ target }) =>
              updateProductQuantity(product.id, target.value)
            }
          >
            <option value="1">Qtd: 1</option>
            <option value="2">Qtd: 2</option>
            <option value="3">Qtd: 3</option>
            <option value="4">Qtd: 4</option>
            <option value="5">Qtd: 5</option>
          </select>
        </div>
      </ProductDescription>
      <RemoveProductButton onClick={() => removeProduct(product.id)}>
        Remover
      </RemoveProductButton>
    </Container>
  );
};

export default CartItem;
