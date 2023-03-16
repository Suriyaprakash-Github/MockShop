import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    updatedItems = state.items.concat(action.item);

    fetch(
      `https://ecomm-c1511-default-rtdb.firebaseio.com/cart/${action.item.email}.json`,
      {
        method: "PUT",
        body: JSON.stringify(updatedItems),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems;
    const toRemove = state.items.findIndex((item) => item.id === action.id.id);
    state.items.splice(toRemove, 1);
    updatedItems = [...state.items];

    fetch(
      `https://ecomm-c1511-default-rtdb.firebaseio.com/cart/${action.id.email}.json`,
      {
        method: "PUT",
        body: JSON.stringify(updatedItems),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return {
      items: updatedItems,
    };
  }
  if (action.type === "RECEIVED") {
    let updatedItems;
    updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
    };
  }

  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", id: item });
  };

  const receivedItemHandler = (item) => {
    dispatchCartAction({ type: "RECEIVED", item: item });
  };

  const cartContext = {
    items: cartState.items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    receivedItem: receivedItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
