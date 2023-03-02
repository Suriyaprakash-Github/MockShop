import React, { useContext, useState } from "react";
import CartContext from "../../../store/cart-context";
import Nav from "react-bootstrap/Nav";
import Cart from "../../Cart/Cart";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.length;

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Nav.Link
        style={{ color: "white", margin: "10px", display: "flex" }}
        onClick={() => setModalShow(true)}
      >
        Cart
        <div
          style={{
            marginLeft: "0.5rem",
            height: "1.5rem",
            width: "1.5rem",
            border: "1px solid #0275d8",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {numberOfItems}
        </div>
      </Nav.Link>
      <Cart show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default CartButton;
