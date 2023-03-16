import React, { useContext } from "react";

import CartContext from "../../store/cart-context";
import LoginContext from "../../store/LoginContext";
import axios from "axios";

let flag = false;

const ProductSaved = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(LoginContext);

  if (authCtx.isLoggedIn && !flag) {
    const NewEmail = authCtx.email.replace("@", "").replace(".", "");
    axios
      .get(
        `https://ecomm-c1511-default-rtdb.firebaseio.com/cart/${NewEmail}.json`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        res.data.map((item) => {
          return cartCtx.receivedItem({
            id: item.id,
            email: item.email,
            key: item.id,
            price: item.price,
            title: item.title,
          });
        });
      });

    flag = true;
  }

  return <></>;
};

export default ProductSaved;
