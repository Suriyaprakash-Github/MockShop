import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import LoginContext from "../../../store/LoginContext";

import classes from "./Header.module.css";
import CartButton from "./CartButton";

const Header = () => {
  const authCtx = useContext(LoginContext);

  const history = useNavigate();
  const logoutHandler = () => {
    authCtx.logout();
    history("/Login");
  };

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
            <Link
              style={{ color: "white", margin: "10px", textDecoration: "none" }}
              to="/"
            >
              The Mock Shop
            </Link>
          </Nav>
        </div>
        <div>
          <Nav>
            <Link
              style={{ color: "white", margin: "10px", textDecoration: "none" }}
              to="/home"
            >
              Home
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                margin: "10px",
                alignItems: "center",
              }}
              to="/store"
            >
              Store
            </Link>
            <Link
              style={{ color: "white", margin: "10px", textDecoration: "none" }}
              to="/contact"
            >
              Contact Me
            </Link>
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
              <Nav.Link
                style={{ color: "white", margin: "10px" }}
                href="/login"
              >
                Login
              </Nav.Link>
            )}
            <CartButton />
          </Nav>
        </div>
      </Navbar>
    </>
  );
};
export default Header;
