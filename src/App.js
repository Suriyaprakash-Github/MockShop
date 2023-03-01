import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
// import LoginContext from "./store/LoginContext";

import classes from "./App.module.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ContactUs from "./pages/ContactUs";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className={classes.mainDiv}>
      <Header />
      <Routes>
        <Route path="store" exact element={<Store />}></Route>
        <Route path="contact" exact element={<ContactUs />}></Route>
        <Route path="login" exact element={<Login />}></Route>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="home" exact element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
