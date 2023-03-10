import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import LoginContext from "./store/LoginContext";
import CartContext from "./store/cart-context";
import axios from "axios";

import classes from "./App.module.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import Login from "./components/Login/Login";

import ProductDetails from "./pages/ProductDetails";

function App() {
  const authCtx = useContext(LoginContext);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      const loggedEmail = authCtx.email.replace("@", "").replace(".", "");
      axios
        .get(
          `https://ecomm-c1511-default-rtdb.firebaseio.com/cart/${loggedEmail}.json`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          res.data.map((item) => {
            return cartCtx.addItem({
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

  return (
    <div className={classes.mainDiv}>
      <Header />
      <Routes>
        {authCtx.isLoggedIn ? (
          <Route path="/store" exact element={<Store />}></Route>
        ) : (
          <Route path="/store" exact element={<Navigate to="/login" />}></Route>
        )}
        <Route
          exact
          path="/products/:product_id"
          element={<ProductDetails />}
        ></Route>

        <Route path="/contact" exact element={<ContactUs />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
