import { StrictMode } from "react";
import { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import { FilterProvider } from "./Context/FilterContext.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WishlistProvider } from "../src/Context/WishlistContext.js";
import { CartProvider } from "../src/Context/CartContext.js";
import App from "./App";
import { AuthProvider } from "../src/Context/AuthContext.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <WishlistProvider>
      <FilterProvider>
        <AuthProvider>
          <CartProvider>
            <Router>
              <App />
            </Router>
          </CartProvider>
        </AuthProvider>
      </FilterProvider>
    </WishlistProvider>
  </StrictMode>,
  rootElement
);
