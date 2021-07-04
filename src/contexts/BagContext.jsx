import { createContext, useContext, useEffect, useState } from "react";

export const BagContext = createContext({});

export function BagProvider({ children }) {
  const [bagProducts, setBagProducts] = useState([]);
  const [totalPurchasePrice, setTotalPurchasePrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setBagProducts(() => {
      const currentValue = JSON.parse(
        window.localStorage.getItem("bagProducts")
      );
      return currentValue || [];
    });
  }, []);

  useEffect(() => {
    calculateTotalItems();
    calculateTotalPurchasePrice();
    window.localStorage.setItem("bagProducts", JSON.stringify(bagProducts));
  }, [bagProducts]);

  function addProduct(product, quantity = 1) {
    setBagProducts([...bagProducts, { ...product, quantity: quantity }]);
  }

  function removeProduct(productId) {
    setBagProducts(bagProducts.filter((product) => product.id !== productId));
  }

  function containsProduct(productId) {
    return bagProducts.some((product) => product.id === productId);
  }

  function getProduct(productId) {
    return bagProducts.find((product) => product.id === productId);
  }

  function updateProductQuantity(productId, quantity) {
    const product = bagProducts.find((product) => product.id === productId);
    product.quantity = Number(quantity);
    calculateTotalItems();
    calculateTotalPurchasePrice();
    window.localStorage.setItem("bagProducts", JSON.stringify(bagProducts));
  }

  function calculateTotalPurchasePrice() {
    setTotalPurchasePrice(
      bagProducts.reduce((total, product) => {
        const productPrice = Number(
          product.price.replace("$", "").replace(".", "").replace(",", ".")
        );
        return (total += productPrice * product.quantity);
      }, 0)
    );
  }

  function calculateTotalItems() {
    setTotalItems(
      bagProducts.reduce((total, product) => (total += product.quantity), 0)
    );
  }

  return (
    <BagContext.Provider
      value={{
        bagProducts,
        addProduct,
        removeProduct,
        containsProduct,
        getProduct,
        updateProductQuantity,
        totalPurchasePrice,
        totalItems,
      }}
    >
      {children}
    </BagContext.Provider>
  );
}

export const useBag = () => {
  return useContext(BagContext);
};
