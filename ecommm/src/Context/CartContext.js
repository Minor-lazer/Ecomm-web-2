import React from "react";
import {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      let flag = 0;
      state.map((item) => {
        if (item.id === payload.id) {
          flag = 1;
        }
      });
      if (flag === 0) {
        state = [...state, { ...payload, cartQty: 1, inCart: true }];
        return state;
      }
      return state;

    case "INCREMENT":
      return state.map((item) => {
        if (item.id === payload.id) {
          return { ...payload, cartQty: payload.cartQty + 1 };
        }
        return item;
      });

    case "DECREMENT":
      if (payload.cartQty > 1) {
        return state.map((item) => {
          if (item.id === payload.id) {
            return { ...payload, cartQty: payload.cartQty - 1 };
          }
          return item;
        });
      } else {
        return state.filter((item) => item.id !== payload.id);
      }

    case "REMOVE":
      return state.filter((item) => {
        return item.id !== payload.id;
      });

    default:
      break;
  }
};

export function useCart() {
  return useContext(CartContext);
}
