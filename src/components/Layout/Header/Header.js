import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <Navbar className={classes.navbar} expand="lg">
        <div className={classes.header_subdiv}>
          <Nav>
            <Nav.Link className={classes.header_link} href="#home">
              Mock Shop
            </Nav.Link>
          </Nav>
        </div>
        <div>
          <Nav>
            <Nav.Link className={classes.header_link} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={classes.header_link} href="#store">
              Store
            </Nav.Link>
            <Nav.Link className={classes.header_link} href="#about">
              About
            </Nav.Link>
          </Nav>
        </div>
        <div className={classes.header_btn_div}>
          <Nav>
            <Nav.Link className={classes.header_link} href="#">
              Login
            </Nav.Link>
            <Nav.Link className={classes.header_link} href="#">
              Cart
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};
export default Header;
