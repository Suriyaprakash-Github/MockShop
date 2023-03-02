import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems(() => {
      return items.concat(item);
    });
  };
  const removeItemFromCartHandler = (incoming) => {
    const toRemove = items.findIndex((o) => o.id === `${incoming}`);
    items.splice(toRemove, 1);
    let updatedItem = items;
    console.log(updatedItem);
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
