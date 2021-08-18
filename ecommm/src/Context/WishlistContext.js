import React from "react";
import { useReducer, useState, createContext, useContext } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(wishlistReducer, []);

  return (
    <WishlistContext.Provider value={{ dispatch, state, wishlistReducer }}>
      {children}
    </WishlistContext.Provider>
  );
}

const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      let flag = 0;
      state.map((item) => {
        if (item.id === payload.id) {
          flag = 1;
        }
      });
      if (flag === 0) {
        state = [...state, { ...payload, wishlisted: true }];
        console.log(state);
        return state;
      }
      console.log(state);
      return state;

    case "REMOVE":
      return state.filter((item) => {
        return item.id !== payload.id;
      });

    default:
      break;
  }
};

export function useWishlist() {
  return useContext(WishlistContext);
}
