import CartItem from "../CartItem";
import { useBag } from "../../contexts/BagContext";
import {
  Container,
  ModalHeader,
  EmptyCartMessage,
  CartItemsList,
  ModalFooter,
  CheckoutButton,
  ModalOverlay,
} from "./styles";

const CartModal = ({ closeCartModal }) => {
  const { bagProducts, totalPurchasePrice, totalItems } = useBag();

  return (
    <Container>
      <div id="triangle"></div>
      <ModalHeader>
        <h1>Meu carrinho</h1>
        <h2>{totalItems} itens</h2>
        <a onClick={closeCartModal}>Fechar</a>
      </ModalHeader>
      {bagProducts.length > 0 ? (
        <CartItemsList>
          {bagProducts.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </CartItemsList>
      ) : (
        <EmptyCartMessage>
          <p>Seu carrinho está vazio!</p>
        </EmptyCartMessage>
      )}
      <ModalFooter disabled={bagProducts.length === 0}>
        <p>
          Total: $
          {totalPurchasePrice.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </p>
        <CheckoutButton disabled={bagProducts.length === 0}>
          Finalizar compra
        </CheckoutButton>
      </ModalFooter>
      <ModalOverlay onClick={closeCartModal} />
    </Container>
  );
};

export default CartModal;
