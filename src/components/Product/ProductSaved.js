import React, { useContext, useEffect } from "react";

import CartContext from "../../store/cart-context";
import LoginContext from "../../store/LoginContext";

import axios from "axios";

const ProductSaved = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(LoginContext);

  useEffect(() => {
    if (authCtx.isLoggedIn) {
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
            cartCtx.addItem({
              id: item.id,
              email: item.email,
              key: item.id,
              price: item.price,
              title: item.title,
            });
          });
        });
    }
  });

  return <></>;
};

export default ProductSaved;
