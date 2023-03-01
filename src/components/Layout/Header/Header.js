import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import LoginContext from "../../../store/LoginContext";
import CartContext from "../../../store/cart-context";

import classes from "./Header.module.css";

const Header = () => {
  const authCtx = useContext(LoginContext);
  const cartCtx = useContext(CartContext);

  const history = useNavigate();
  const logoutHandler = () => {
    authCtx.logout();
    history("/Login");
  };

  const numberOfItems = cartCtx.items.length;

  return (
    <>
      <Navbar
        style={{
          justifyContent: "space-between",
          backgroundColor: "#343a40",
          borderRadius: "0.2em",
          marginBottom: "1rem",
        }}
        expand="lg"
      >
        <div className={classes.header_subdiv}>
          <Nav>
            <Nav.Link style={{ color: "white", margin: "10px" }} href="/">
              Dummy Shop
            </Nav.Link>
          </Nav>
        </div>
        <div>
          <Nav>
            <Nav.Link style={{ color: "white", margin: "10px" }} href="home">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white", margin: "10px" }} href="store">
              Store
            </Nav.Link>
            <Nav.Link style={{ color: "white", margin: "10px" }} href="contact">
              Contact Me
            </Nav.Link>
          </Nav>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Nav>
            {authCtx.isLoggedIn ? (
              <Nav.Link
                style={{ color: "white", margin: "10px" }}
                onClick={logoutHandler}
                href="login"
              >
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link style={{ color: "white", margin: "10px" }} href="login">
                Login
              </Nav.Link>
            )}

            <Nav.Link
              style={{ color: "white", margin: "10px", display: "flex" }}
              href="#"
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
          </Nav>
        </div>
      </Navbar>
    </>
  );
};
export default Header;
