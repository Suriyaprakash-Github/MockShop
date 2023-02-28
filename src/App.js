import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

import classes from "./App.module.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className={classes.mainDiv}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
      </Routes>
      <Routes>
        <Route path="home" exact element={<Home />}></Route>
      </Routes>

      <Routes>
        <Route path="store" exact element={<Store />}></Route>
      </Routes>
      <Routes>
        <Route path="contact" exact element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
