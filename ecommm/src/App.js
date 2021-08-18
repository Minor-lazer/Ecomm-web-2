import React from "react";
import "./index.css";
import Navbar from "../src/Components/NavBar/Navbar.js";
import Banner from "../src/Components/Banner/Banner.js";
import OfferCard from "../src/Components/OfferCard/OfferCard.js";
import Footer from "../src/Components/Footer/Footer.js";
import Home from "../src/Pages/Home/Home.js";
import ProductPage from "../src/Pages/Products/ProductPage.js";
import ProductCard from "../src/Components/ProductCard/ProductCard.js";
import CartPage from "../src/Pages/Private/Cart/Cart.js";
import WishlistPage from "../src/Pages/Private/Wishlist/Wishlist.js";
import Cart from "../src/Pages/Private/Cart/Cart.js";
import { Router, Routes, Route, Link } from "react-router-dom";
import Login from "../src/Pages/Login/Login.js";
import PrivateRoute from "../src/PrivateRoute/PrivateRoute.js";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route exact path="/login" element={<Login />} />
        <PrivateRoute path="/cart">
          <Cart />
        </PrivateRoute>
      </Routes>
      <Footer />
    </div>
  );
}
