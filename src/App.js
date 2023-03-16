import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import LoginContext from "./store/LoginContext";
// import CartContext from "./store/cart-context";
// import axios from "axios";

import classes from "./App.module.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import Login from "./components/Login/Login";

import ProductDetails from "./pages/ProductDetails";
import ProductSaved from "./components/Product/ProductSaved";

function App() {
  const authCtx = useContext(LoginContext);
  // const cartCtx = useContext(CartContext);

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
      {authCtx.isLoggedIn && <ProductSaved />} ;
    </div>
  );
}

export default App;
