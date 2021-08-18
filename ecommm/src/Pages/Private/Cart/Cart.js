import React from "react";
import "./Cart.css";
import { useState, useContext, createContext, useReducer } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard.js";
// import {ProductData} from "../../../Data/ProductData.js";
import { useCart } from "../../../Context/CartContext.js";
export default function CartPage() {
  const { state, dispatch } = useCart();

  function totalPrice() {
    let total = 0;
    state.map((item) => {
      total = total + item.price;
    });
    return total;
  }

  return (
    <div>
      <div className="cart__layout">
        {totalPrice() === 0 ? (
          <div>No mithais in the cart,please add some mithais </div>
        ) : (
          <h4> Total Price Rs {totalPrice()}</h4>
        )}
        <div className="cart__item">
          {state.map((item) => {
            return (
              <div key={item.id} className="card__product--display">
                <ProductCard
                  item={item}
                  buttonText={"remove"}
                  buttonHandler={() => {
                    dispatch({ type: "REMOVE", payload: item });
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
