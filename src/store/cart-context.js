import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  receivedItem: (item) => {},
});

export default CartContext;
