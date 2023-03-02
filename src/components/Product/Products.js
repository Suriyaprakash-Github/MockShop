import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import CartContext from "../../store/cart-context";

const Products = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (e) => {
    cartCtx.addItem({
      id: props.id,
      key: props.id,
      price: props.price,
      title: props.title,
    });
  };

  return (
    <>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "#343a40",
          margin: "0.2rem",
        }}
      >
        <Card.Img variant="top" src={props.image} />
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Card.Title style={{ color: "white" }}>{props.title}</Card.Title>
          <Card.Text style={{ justifyContent: "center", color: "#6c757d" }}>
            {props.description}
          </Card.Text>
          <Card.Text style={{ color: "white" }}> $. {props.price}</Card.Text>
          <Button
            variant="primary"
            style={{
              backgroundColor: "#343a40",
              alignContent: "center",
            }}
            onClick={addItemHandler}
          >
            Add {props.title} to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Products;
