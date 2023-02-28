import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import classes from "./Header.module.css";

const Header = () => {
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
            <Nav.Link style={{ color: "white", margin: "10px" }} href="#">
              Login
            </Nav.Link>
            <Nav.Link style={{ color: "white", margin: "10px" }} href="#">
              Cart
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};
export default Header;
