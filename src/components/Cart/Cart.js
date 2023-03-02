import React, { useContext } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((item) => (
    <div key={item.id} id={item.id}>
      {item.title} : {item.price}
      <Button onClick={removeHandler.bind(null, item.id)}>Remove</Button>
    </div>
  ));

  const total = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + Number(item.price);
  }, 0);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ diplsy: "flex" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Title</h4>
        <div>
          <span>{cartItems} </span>
          <span></span>
        </div>
        <div>
          <span>Total</span>
          <span>{total}</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
