import React from "react";
import Header from "./components/Layout/Header/Header";

import ProductItem from "./components/Product/ProductItem";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.mainDiv}>
      <Header />
      <h1>MockShop</h1>
      <ProductItem />
    </div>
  );
}

export default App;
